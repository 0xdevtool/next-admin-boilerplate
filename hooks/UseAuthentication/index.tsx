import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useAuthenticated() {
    const { user } = useSelector((state: any) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (user == null) {
            router.push('/login');
        }
    }, [user]);

    return [user];
}
