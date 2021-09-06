import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ForbiddenPage: React.FC<any> = () => (
    <div className="login-page kdn-mt-4 kdn-pt-4 kdn-flex-column kdn-align-items-center">
        <h1 className="kdn-fs-icon-lg">403</h1>
        <p className="kdn-text-uppercase">access not granted</p>
        <Button type="primary">
            <Link href="/">Back to Home</Link>
        </Button>
    </div>
);

export default ForbiddenPage;
