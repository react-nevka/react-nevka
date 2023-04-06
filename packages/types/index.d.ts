/**
 * Модель стандартных ответов бэка
 */
export interface IResponse<ResponseData> {
    data: ResponseData;
}

/**
 * Модель любых автозаполняемых данных
 */
export interface IAutocompleteValue<Type extends string | number, Label extends string = string> {
    key: Type;
    value: Type;
    label: Label;
}

/**
 * Строки с сортировкой
 */
export type TSort<SortColumn extends string> = `${SortColumn},${'ASC' | 'DESC'}`;

/**
 * Набор стандартных данных пагинации с бэка
 */
export interface IPagination<SortColumn extends string = string> {
    /**
     * Номер текущей страницы
     */
    number: number;
    /**
     * Кол-во элементов на одной странице реестра
     */
    size: number;
    sort: TSort<SortColumn>;
    /**
     * Общее число элементов реестра
     */
    totalElements: number;
    /**
     * Число элементов на текущей странице
     */
    numberOfElements: number;
    /**
     * Общее число страниц
     */
    totalPages: number;
    /**
     * Присланные данные относятся к первой странице
     */
    first: boolean;
    /**
     * Присланные данные относятся к последней странице
     */
    last: boolean;
}

export type TPaginationSelectsContent<Content extends unknown> = Omit<IPagination, 'sort'> & {
    content: Content[];
};

/**
 * Модель данных для пагинации с самими пагинируемыми данными
 */
export type TPaginationContent<
    Content,
    SortColumn extends string = string
> = IPagination<SortColumn> & {
    content: Content[];
};

export type TPageableParams<Pageable extends boolean> = Pageable extends true
    ? TSearchingPaginationParams
    : ISearchingParams;

/**
 * Набор параметров для поиска
 */
export interface ISearchingParams extends Record<string, unknown> {
    label?: string;
}

/**
 * Набор стандартных параметров для пагинируемых запросов
 */
export interface IPaginationParams extends Record<string, unknown> {
    page: number;
    size: number;
}

/**
 * Набор параметров для пагинируемых запросов с поиском
 */
export type TSearchingPaginationParams = IPaginationParams & ISearchingParams;

/**
 * Набор параметров для пагинируемых запросов реестра
 */
export interface IRegistryPaginationParams<SortColumn extends string, Microservice extends string> extends IPaginationParams {
    system: Microservice;
    sort: TSort<SortColumn>;
}

export interface ISortablePaginationParams<SortColumn extends string> extends IPaginationParams {
    sort: TSort<SortColumn>;
}

export type TAutocompleteMultiValue<T extends string> = IAutocompleteValue<T>[] | null | undefined;
export type TAutocompleteSingleValue<T extends string> = IAutocompleteValue<T> | null | undefined;

export type TUuid = string;
