import { DownOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';

import type { NextPage } from 'next';

const UserProfile: NextPage = () => {
    const userMenuOptions = (
        <ul className="kdn-user-popover">
            <li>My Account</li>
            <li>Connections</li>
            <li>Logout</li>
        </ul>
    );

    return (
        <div className="kdn-flex-row kdn-align-items-center kdn-mb-4 kdn-avatar-row">
            <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
                <Avatar
                    src="https://via.placeholder.com/150x150"
                    className="kdn-size-40 kdn-pointer kdn-mr-2"
                    alt=""
                />
                <span className="kdn-avatar-name">
                    Nikola Tesla <DownOutlined className="kdn-ml-1" />
                </span>
            </Popover>
        </div>
    );
};

export default UserProfile;
