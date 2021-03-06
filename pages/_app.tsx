import '../styles/default.css';
import '../styles/globals.scss';
import 'nprogress/nprogress.css';

import { ConfigProvider } from 'antd';
import AppLocale from 'locales';
import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';
import nProgress from 'nprogress';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider, useSelector } from 'react-redux';
import { useStore } from 'store';
import { loadStorageAuthUserInfo } from 'store/actions';

import FlatLayout from '../components/FlatLayout';
import PortalLayout from '../components/PortalLayout';

import type { AppProps } from 'next/app';
import { NAV_STYLE_FIXED } from 'store/ActionTypes';
// add nprogress bar
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MainLayout({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if (router.pathname.indexOf('portal/') >= 0) {
        return (
            <PortalLayout>
                <Component {...pageProps} />
            </PortalLayout>
        );
    }

    return (
        <FlatLayout>
            <Component {...pageProps} />
        </FlatLayout>
    );
}

function MainWrapper(props: AppProps) {
    const { locale } = useSelector((state: any) => state.settings);
    const currentAppLocale = AppLocale[locale.locale];

    return (
        <ConfigProvider locale={currentAppLocale.antd}>
            <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
                <MainLayout {...props}></MainLayout>
            </IntlProvider>
        </ConfigProvider>
    );
}

function MainApp(props: any) {
    const initialState = {
        auth: {
            user: loadStorageAuthUserInfo(),
        },
        common: {
            navStyle: NAV_STYLE_FIXED,
            /* eslint-disable-next-line */
            width: window?.innerWidth,
            error: '',
            loading: false,
            message: '',
            navCollapsed: true,
            pathname: '/',
        },
    };
    const store = useStore({ ...props.pageProps.initialReduxState, ...initialState });

    return (
        <Provider store={store}>
            <MainWrapper {...props}></MainWrapper>
        </Provider>
    );
}

export default dynamic(() => Promise.resolve(MainApp), {
    ssr: false,
});
