import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Spin } from 'antd';
import IntlMessages from 'components/IntlMessages';
import { notifyError, notifySuccess } from 'components/Notification';
import { login } from 'data/Auth';
import useIntlMessage from 'hooks/UseIntlMessage';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuthUserInfo } from 'store/actions';

const SignInPage: React.FC<any> = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector((state: any) => state.auth?.user);
    const [form] = Form.useForm();
    const [inProgress, setInProgress] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user != null) {
            router.push('/');
        }

        setLoading(false);
    }, [user, router]);

    const onFinish = useCallback(
        (payload) => {
            setInProgress(true);

            login(payload)
                .then((data: any) => {
                    if (data != null) {
                        dispatch(updateAuthUserInfo(data));
                        notifySuccess(useIntlMessage('page.content.login.form.alert.success'));
                    }
                })
                .catch(() => {
                    notifyError(useIntlMessage('page.content.login.form.alert.error'));
                })
                .finally(() => {
                    setInProgress(false);
                });
        },
        [dispatch]
    );

    return (
        <Spin spinning={loading}>
            <Row>
                <Col xs={{ span: 22, offset: 1 }} md={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }}>
                    <div className="login-page kdn-mt-4 kdn-pt-4 kdn-flex-column kdn-align-items-center">
                        <h1>
                            <IntlMessages id="page.content.login.header" />
                        </h1>
                        <Form
                            form={form}
                            style={{ width: '100%' }}
                            name="login-form"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: useIntlMessage('page.content.login.form.email.required'),
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    prefix={<UserOutlined />}
                                    placeholder={useIntlMessage('page.content.login.form.email.placeholder')}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: useIntlMessage('page.content.login.form.password.required'),
                                    },
                                ]}
                            >
                                <Input
                                    size="large"
                                    prefix={<LockOutlined />}
                                    type="password"
                                    placeholder={useIntlMessage('page.content.login.form.password.placeholder')}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item className="hidden" name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>
                                        <IntlMessages id="page.content.login.form.remember" />
                                    </Checkbox>
                                </Form.Item>
                                <a className="pull-right" href="#/forgot-password">
                                    <IntlMessages id="page.content.login.form.forgotpassword" />
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button loading={inProgress} block type="primary" htmlType="submit">
                                    <IntlMessages id="page.content.login.form.submit" />
                                </Button>
                            </Form.Item>

                            <p className="kdn-font-italic kdn-text-center">Demo Staff: staff@email.com / staff</p>
                            <p className="kdn-font-italic kdn-text-center">Demo Admin: admin@email.com / admin</p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Spin>
    );
};

export default SignInPage;
