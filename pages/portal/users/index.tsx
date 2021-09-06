import styles from './users.module.scss';

import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import DynamicTable from 'components/DynamicTable';
import IntlMessages from 'components/IntlMessages';
import { notifyError } from 'components/Notification';
import PageContent from 'components/PageContent';
import { UserRole } from 'data/models';
import { useUsers } from 'data/Users';
import useAuthorization from 'hooks/UseAuthorization';
import useIntlMessage from 'hooks/UseIntlMessage';
import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

const UserListPage: FC<any> = () => {
    const [userInfo] = useAuthorization([UserRole.Admin]);
    const [loading, setLoading] = useState(false);
    const { data: users, mutate, error: getPostsError } = useUsers();

    useEffect(() => {
        if (getPostsError != null) {
            notifyError('Fetch post list error');
        }
    }, [getPostsError]);

    const columns: any[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Roles',
            dataIndex: 'roles',
            className: classNames('user-text', styles['text-highlight']),
            key: 'roles',
        },
    ];

    return (
        <>
            <Breadcrumb className="kdn-page-breadcrumbs">
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <IntlMessages id="sidebar.user.list" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <IntlMessages id="sidebar.user.list.active" />
                </Breadcrumb.Item>
            </Breadcrumb>

            <PageContent className="user-list-page">
                <DynamicTable
                    primaryTitle={useIntlMessage('sidebar.user.list.active')}
                    loading={loading}
                    dataSource={users}
                    columns={columns}
                    rowKey="id"
                    scroll={{ x: 'max-content' }}
                />
            </PageContent>
        </>
    );
};

export default UserListPage;
