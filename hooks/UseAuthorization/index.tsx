import { hasRole, UserRole } from 'data/models';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useAuthorization(acceptRoles: UserRole[]) {
    const { user } = useSelector((state: any) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (user == null) {
            router.push('/login');
        } else {
            const validRole = hasRole(user?.roles, acceptRoles);

            if (!validRole) {
                router.push('/403');
            }
        }
    }, [user]);

    return [user];
}
