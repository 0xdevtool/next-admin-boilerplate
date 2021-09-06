import { useRouter } from 'next/router';
import { useEffect } from 'react';

import type { NextPage } from 'next';
const Home: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/portal/posts');
    }, [router]);

    return <></>;
};

export default Home;
