import { Drawer, Layout } from 'antd';
import classNames from 'classnames';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapsedSideNav } from 'store/actions';
import {
    NAV_STYLE_DRAWER,
    NAV_STYLE_FIXED,
    NAV_STYLE_MINI_SIDEBAR,
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    TAB_SIZE,
} from 'store/ActionTypes';

import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const Sidebar: NextPage = () => {
    const dispatch = useDispatch();

    const { width, navCollapsed, navStyle } = useSelector((state: any) => state.common);

    const drawerStyle = classNames(
        {
            'kdn-collapsed-sidebar':
                (navStyle === NAV_STYLE_FIXED ||
                    navStyle === NAV_STYLE_MINI_SIDEBAR ||
                    navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) &&
                width < TAB_SIZE,
        },
        {
            'kdn-mini-sidebar': navStyle === NAV_STYLE_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
        },
        {
            'kdn-mini-custom-sidebar': navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
        },
        {
            'kdn-custom-sidebar': navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
        }
    );

    return (
        <Sider
            className={`kdn-app-sidebar ${drawerStyle} kdn-layout-sider-dark`}
            trigger={null}
            collapsed={
                width < TAB_SIZE
                    ? false
                    : navStyle === NAV_STYLE_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
            }
            collapsible
        >
            {navStyle === NAV_STYLE_DRAWER || width < TAB_SIZE ? (
                <Drawer
                    className={`kdn-drawer-sidebar kdn-drawer-sidebar-dark`}
                    placement="left"
                    closable={false}
                    visible={navCollapsed}
                    onClose={() => dispatch(toggleCollapsedSideNav(!navCollapsed))}
                >
                    <SidebarContent />
                </Drawer>
            ) : (
                <SidebarContent />
            )}
        </Sider>
    );
};

export default Sidebar;
