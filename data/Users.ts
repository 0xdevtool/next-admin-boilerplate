import { jsonFetcher } from 'libs';
import useSWR from 'swr';

export function useUsers(page: number, pageSize: number) {
    const { data, mutate, error } = useSWR(`/users?page=${page}&size=${pageSize}`, jsonFetcher);

    return {
        data,
        mutate,
        error,
    };
}
