import { MenuOutlined } from '@ant-design/icons';
import { Layout, Popover } from 'antd';
import Auxiliary from 'components/Auxiliary';
import CustomScrollbars from 'components/CustomScrollbar';
import UserInfo from 'components/UserInfo';
import UserProfile from 'components/UserProfile';
import { languageData } from 'locales';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import wlogo from 'public/images/w-logo.png';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchLanguage, toggleCollapsedSideNav } from 'store/actions';
import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from 'store/ActionTypes';

const { Header } = Layout;

const Topbar: NextPage = () => {
    const { locale, width, navStyle } = useSelector((state: any) => state.settings);
    const { navCollapsed } = useSelector((state: any) => state.common);
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
                    <Image alt="" className="kdn-sm-logo" src={wlogo} />
                </Link>
            </div>

            <ul className="kdn-header-notifications kdn-ml-auto">
                <li className="kdn-sidebar-notification">
                    <UserProfile />
                </li>

                {width < TAB_SIZE && (
                    <Auxiliary>
                        <li className="kdn-user-nav">
                            <UserInfo />
                        </li>
                    </Auxiliary>
                )}
            </ul>
        </Header>
    );
};

export default Topbar;
