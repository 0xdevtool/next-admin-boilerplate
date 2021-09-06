import { Layout } from 'antd';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import React from 'react';

import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { updateWindowWidth } from 'store/actions';
import useAuthenticated from 'hooks/UseAuthentication';
const { Content, Footer } = Layout;

const PortalLayout: NextPage = ({ children }) => {
    const dispatch = useDispatch();
    const [userInfo] = useAuthenticated();
    let { width } = useSelector((state: any) => state.common);

    if (width == null && window) {
        dispatch(updateWindowWidth(window.innerWidth));
    }

    return (
        <Layout className="kdn-app-layout">
            <Sidebar />
            <Layout>
                <Topbar />
                <Content className={`kdn-layout-content kdn-container-wrap`}>
                    <div className="kdn-main-content-wrapper">
                        <main>{children}</main>
                    </div>
                    <Footer>
                        <div className="kdn-layout-footer-content kdn-text-center">
                            Kong Next Admin | Copyright © {new Date().getFullYear()}{' '}
                            <a className="kdn-link" href="https://blogs.kongd.io/">
                                Kongd.io
                            </a>
                        </div>
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
};

export default PortalLayout;
