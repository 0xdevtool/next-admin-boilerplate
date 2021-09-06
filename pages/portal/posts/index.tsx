import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import DynamicTable from 'components/DynamicTable';
import IntlMessages from 'components/IntlMessages';
import { notifyError } from 'components/Notification';
import PageContent from 'components/PageContent';
import { usePosts } from 'data/Posts';
import useIntlMessage from 'hooks/UseIntlMessage';
import React, { useEffect, useState } from 'react';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Content',
        dataIndex: 'body',
        key: 'body',
    },
];

const PostListPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const { data: posts, mutate, error } = usePosts();

    useEffect(() => {
        if (error != null) {
            notifyError('Load all posts error.');
        }
    }, [error]);

    return (
        <>
            <Breadcrumb className="kdn-page-breadcrumbs">
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <IntlMessages id="sidebar.post.list" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <IntlMessages id="sidebar.post.list.active" />
                </Breadcrumb.Item>
            </Breadcrumb>

            <PageContent className="post-list-page">
                <DynamicTable
                    primaryTitle={useIntlMessage('sidebar.post.list.active')}
                    loading={loading}
                    columns={columns}
                    dataSource={posts}
                    rowKey="id"
                    scroll={{ x: 'max-content' }}
                />
            </PageContent>
        </>
    );
};

export default PostListPage;
