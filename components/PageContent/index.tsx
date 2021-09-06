import { Card } from 'antd';
import classNames from 'classnames';
import React from 'react';

interface PageContentProps extends React.ComponentProps<any> {
    className?: string;
}

const PageContent: React.FC<PageContentProps> = ({
    children,
    className: pageClassName,
}) => {
    const primaryClsName = classNames(
        'kdn-card',
        'kdn-mt-2',
        'kdn-page-container',
        pageClassName
    );

    return <Card className={primaryClsName}>{children}</Card>;
};

export default PageContent;
