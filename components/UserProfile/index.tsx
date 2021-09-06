import { Avatar, Popover } from 'antd';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/actions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useSelector((state: any) => state.auth);

    const onLogOut = useCallback(() => {
        dispatch(logOut());
        router.push('/login');
    }, [dispatch]);

    const userMenuOptions = (
        <ul className="kdn-user-popover">
            <li>My Account</li>
            <li>Connections</li>
            <li onClick={onLogOut}>Logout</li>
        </ul>
    );

    const parseUserRole = (user: any) => {
        if (user == null || user.roles == null || user.roles.length === 0) {
            return '';
        }

        const firstRole = user.roles.split(',')[0] || '';
        return firstRole.replace(/[_,-]/gi, ' ');
    };

    return (
        <div className="kdn-user-profile kdn-flex-row kdn-align-items-center kdn-avatar-row kdn-justify-content-center">
            <Popover
                placement="bottomRight"
                content={userMenuOptions}
                trigger="click"
                className="kdn-align-items-center kdn-flex-row kdn-justify-content-center"
            >
                <div className="userName kdn-flex-column kdn-align-items-end kdn-justify-content-center kdn-pr-2">
                    <span className="kdn-user-account kdn-fs-lg kdn-text-capitalize">{user?.name}</span>
                    <span className="kdn-user-account kdn-text-capitalize kdn-fs-sm">{parseUserRole(user)}</span>
                </div>

                <Avatar
                    src="https://via.placeholder.com/150x150"
                    className="kdn-size-40 kdn-pointer"
                    alt={user?.name}
                />
            </Popover>
        </div>
    );
};

export default UserProfile;
