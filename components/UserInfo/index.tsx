import { Avatar, Popover } from 'antd';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/actions';

const UserInfo = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const onLogOut = useCallback(() => {
        dispatch(logOut());
        router.push('/login');
    }, [dispatch, router]);

    const userMenuOptions = (
        <ul className="kdn-user-popover">
            <li>My Account</li>
            <li>Connections</li>
            <li onClick={onLogOut}>Logout</li>
        </ul>
    );

    return (
        <Popover
            overlayClassName="kdn-popover-horizantal"
            placement="bottomRight"
            content={userMenuOptions}
            trigger="click"
        >
            <Avatar src="https://via.placeholder.com/150x150" className="kdn-avatar kdn-pointer" alt="" />
        </Popover>
    );
};

export default UserInfo;
