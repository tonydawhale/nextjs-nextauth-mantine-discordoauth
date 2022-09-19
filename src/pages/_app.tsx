import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from "../components/layout";
import {SessionProvider} from "next-auth/react";

export default function App(props: AppProps) {
    const { Component, pageProps, router } = props;

    // @ts-ignore
    return (
        <>
            {/* @ts-ignore */}
            <SessionProvider session={pageProps.session}>
                <Head>
                    <title>Page title</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <Layout route={router.pathname}>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
        </>
    );
}
