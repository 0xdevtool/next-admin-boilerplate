import { ContainerOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, Popover } from 'antd';
import classNames from 'classnames';
import CustomScrollbars from 'components/CustomScrollbar';
import IntlMessages from 'components/IntlMessages';
import { isAdmin } from 'data/models';
import { languageData } from 'locales';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchLanguage } from 'store/actions';
import styles from './SidebarContent.module.scss';

import SidebarLogo from './SidebarLogo';

const SidebarContent: NextPage = () => {
    let { pathname } = useSelector((state: any) => state.common);
    const { locale } = useSelector((state: any) => state.settings);
    const { user } = useSelector((state: any) => state.auth);

    const dispatch = useDispatch();
    const popoverLangCls = classNames('kdn-popover-lang-scroll', styles['lang-scroll']);

    const languageMenu = () => (
        <CustomScrollbars className={popoverLangCls}>
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
                        <Menu.SubMenu
                            key="posts"
                            icon={<ContainerOutlined />}
                            title={<IntlMessages id="sidebar.post.list" />}
                        >
                            <Menu.Item key="/portal/posts">
                                <Link href="/portal/posts">
                                    <a>
                                        <IntlMessages id="sidebar.post.list.active" />
                                    </a>
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>

                        {isAdmin(user?.roles) && (
                            <Menu.SubMenu
                                key="users"
                                icon={<TeamOutlined />}
                                title={<IntlMessages id="sidebar.user.list" />}
                            >
                                <Menu.Item key="/portal/users">
                                    <Link href="/portal/users">
                                        <a>
                                            <IntlMessages id="sidebar.user.list.active" />
                                        </a>
                                    </Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )}
                    </Menu>
                </CustomScrollbars>

                <Menu theme="dark" mode="inline" className={styles['bottom-menu']}>
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
                            <a>
                                <SettingOutlined />
                                <span>
                                    <IntlMessages id="sidebar.settingPage" />
                                </span>
                            </a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
};

export default SidebarContent;
