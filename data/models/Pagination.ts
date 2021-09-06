export interface IQueryItem {
    [key: string]: string;
}

export interface IArgument {
    [key: string]: string | number | boolean;
}

export class Pagination<T> {
    page = 0;

    pageSize = 10;

    query: IQueryItem | undefined;

    itemCount = 0;

    items: T[] = [];
}
