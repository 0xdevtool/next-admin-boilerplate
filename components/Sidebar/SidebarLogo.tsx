import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapsedSideNav, toggleNavStyleChange } from 'store/actions';
import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from 'store/ActionTypes';

import styles from './SidebarLogo.module.scss';

const SidebarLogo: NextPage = () => {
    const dispatch = useDispatch();

    let { navCollapsed, width, navStyle } = useSelector((state: any) => state.common);

    if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
        navStyle = NAV_STYLE_DRAWER;
    }

    const toggleCollapseSideNav$ = () => {
        dispatch(toggleCollapsedSideNav(!navCollapsed));
        if (navStyle === NAV_STYLE_FIXED) {
            dispatch(toggleNavStyleChange(NAV_STYLE_MINI_SIDEBAR));
        } else {
            dispatch(toggleNavStyleChange(NAV_STYLE_FIXED));
        }
    };

    return (
        <div className="kdn-layout-sider-header">
            {navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
                <div className={styles.linebar}>
                    {navStyle === NAV_STYLE_MINI_SIDEBAR ? (
                        <MenuUnfoldOutlined onClick={toggleCollapseSideNav$} />
                    ) : (
                        <MenuFoldOutlined onClick={toggleCollapseSideNav$} />
                    )}
                </div>
            ) : null}

            <Link href="/">
                <a className="kdn-site-logo">
                    <img alt="log" className={styles.logo} src="/images/w-logo.png" />
                </a>
            </Link>
        </div>
    );
};

export default SidebarLogo;
