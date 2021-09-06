import { safeJsonFetcher } from 'libs';
import useSWR from 'swr';

export function useUsers(page: number = 0, pageSize: number = 20) {
    const { data, mutate, error } = useSWR(`/users?page=${page}&size=${pageSize}`, safeJsonFetcher);

    return {
        data,
        mutate,
        error,
    };
}
