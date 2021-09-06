import { safeJsonFetcher } from 'libs';
import useSWR from 'swr';

import { Post } from './models';

export function usePosts(page: number = 0, pageSize: number = 20) {
    const lstPostMapper = (url: string) =>
        safeJsonFetcher(url).then((payload: any) => {
            if (payload == null || payload.length === 0) {
                return [];
            }

            return payload.map((p: any) => new Post().fromJson(p));
        });

    const { data, mutate, error } = useSWR(`posts?page=${page}&size=${pageSize}`, lstPostMapper);

    return {
        data,
        mutate,
        error,
    };
}
