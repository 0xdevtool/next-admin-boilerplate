import '../styles/default.css';
import '../styles/globals.scss';

import { ConfigProvider } from 'antd';
import AppLocale from 'locales';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider, useSelector } from 'react-redux';
import { useStore } from 'store';

import FlatLayout from '../components/FlatLayout';
import PortalLayout from '../components/PortalLayout';

import type { AppProps } from 'next/app';
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

function MainApp(props: AppProps) {
    const store = useStore(props.pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <MainWrapper {...props}></MainWrapper>
        </Provider>
    );
}

export default dynamic(() => Promise.resolve(MainApp), {
    ssr: false,
});
