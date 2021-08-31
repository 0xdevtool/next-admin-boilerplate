import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript>
                        <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
                        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
                    </NextScript>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
