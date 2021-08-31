import { DashboardOutlined, SettingOutlined, SkinOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Menu, Popover } from 'antd';
import CustomScrollbars from 'components/CustomScrollbar';
import IntlMessages from 'components/IntlMessages';
import { languageData } from 'locales';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchLanguage } from 'store/actions';

import SidebarLogo from './SidebarLogo';

const SidebarContent: NextPage = () => {
    let { pathname } = useSelector((state: any) => state.common);
    const { locale, width, navStyle } = useSelector((state: any) => state.settings);

    const dispatch = useDispatch();

    const languageMenu = () => (
        <CustomScrollbars className="kdn-popover-lang-scroll">
            <ul className="kdn-sub-popover">
                {languageData.map((language) => (
                    <li
                        className="kdn-media kdn-pointer"
                        key={JSON.stringify(language)}
                        onClick={(e) => dispatch(switchLanguage(language))}
                    >
                        <i className={`flag-icon flag-icon-${language.icon}`} />
                        <span className="kdn-language-text kdn-ml-2">{language.name}</span>
                    </li>
                ))}
            </ul>
        </CustomScrollbars>
    );

    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];

    return (
        <>
            <SidebarLogo />
            <div className="kdn-sidebar-content">
                <CustomScrollbars className="kdn-layout-sider-scrollbar">
                    <Menu defaultOpenKeys={[defaultOpenKeys]} selectedKeys={[selectedKeys]} theme="dark" mode="inline">
                        <Menu.Item key="">
                            <Link href="/">
                                <>
                                    <DashboardOutlined />
                                    <span>
                                        <IntlMessages id="sidebar.dashboardPage" />
                                    </span>
                                </>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="sample">
                            <Link href="/sample">
                                <>
                                    <SnippetsOutlined />
                                    <span>
                                        <IntlMessages id="sidebar.samplePage" />
                                    </span>
                                </>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="products">
                            <Link href="/products">
                                <>
                                    <SkinOutlined />
                                    <span>
                                        <IntlMessages id="sidebar.productListPage" />
                                    </span>
                                </>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </CustomScrollbars>

                <Menu theme="dark" mode="inline" className="kdn-bottom-menu">
                    <Menu.Item key="languages">
                        <Popover
                            overlayClassName="kdn-popover-horizontal"
                            placement="bottomRight"
                            content={languageMenu()}
                        >
                            <span className="anticon kdn-pointer">
                                <i className={`flag-icon flag-icon-${locale.icon}`} />
                            </span>
                            <span className="kdn-pointer">{locale.name}</span>
                        </Popover>
                    </Menu.Item>

                    <Menu.Item key="settings">
                        <Link href="/settings">
                            <>
                                <SettingOutlined />
                                <span>
                                    <IntlMessages id="sidebar.settingPage" />
                                </span>
                            </>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
};

export default SidebarContent;
