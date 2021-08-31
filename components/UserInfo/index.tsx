import { Avatar, Popover } from 'antd';

import type { NextPage } from 'next';

const UserInfo: NextPage = () => {
    const userMenuOptions = (
        <ul className="kdn-user-popover">
            <li>My Account</li>
            <li>Connections</li>
        </ul>
    );

    return (
        <Popover
            overlayClassName="kdn-popover-horizantal"
            placement="bottomRight"
            content={userMenuOptions}
            trigger="click"
        >
            <Avatar src={'https://via.placeholder.com/150x150'} className="kdn-avatar kdn-pointer" alt="" />
        </Popover>
    );
};

export default UserInfo;
