import { Layout } from 'antd';
import type { NextPage } from 'next';

const FlatLayout: NextPage = ({ children }) => {
    return (
        <Layout className="kdn-flat-layout">
            <main>{children}</main>
        </Layout>
    );
};

export default FlatLayout;
