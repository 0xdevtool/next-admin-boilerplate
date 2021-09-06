import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Auxiliary from 'components/Auxiliary';
import UserInfo from 'components/UserInfo';
import UserProfile from 'components/UserProfile';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapsedSideNav } from 'store/actions';
import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from 'store/ActionTypes';

import styles from './Topbar.module.scss';

const { Header } = Layout;

const Topbar: NextPage = () => {
    const { navCollapsed, width, navStyle } = useSelector((state: any) => state.common);
    const dispatch = useDispatch();

    return (
        <Header className="kdn-default-header">
            {navStyle === NAV_STYLE_DRAWER ||
            ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ? (
                <div className="kdn-linebar kdn-mr-3">
                    <MenuOutlined
                        onClick={() => {
                            dispatch(toggleCollapsedSideNav(!navCollapsed));
                        }}
                    />
                </div>
            ) : null}

            <div className="kdn-d-block kdn-d-lg-none kdn-pointer">
                <Link href="/">
                    <a>
                        <img alt="" className={styles.smlogo} src="/images/w-logo.png" />
                    </a>
                </Link>
            </div>

            <ul className="kdn-header-notifications kdn-ml-auto">
                {width < TAB_SIZE ? (
                    <Auxiliary>
                        <li className="kdn-user-nav">
                            <UserInfo />
                        </li>
                    </Auxiliary>
                ) : (
                    <li className="kdn-sidebar-notification">
                        <UserProfile />
                    </li>
                )}
            </ul>
        </Header>
    );
};

export default Topbar;
