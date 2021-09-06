/* eslint-disable */
import { Card, Col, Row, Table, TablePaginationConfig, TableProps } from 'antd';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';

import DynamicColumnSettings from './DynamicColumnSettings';

interface DynamicTableProps extends TableProps<any> {
    className?: string;
    primaryTitle?: string;
    actions?: React.ReactNode;
    rightActionCtn?: any;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
    children,
    className: pageClassName,
    primaryTitle,
    columns,
    rightActionCtn,
    actions,
    dataSource,
    onChange,
    ...rest
}) => {
    const [displayColumns, setDisplayColumns] = useState<any[]>(columns || []);
    const primaryClsName = classNames('kdn-dynamic-table', pageClassName);
    const [pagination, setPagination] = useState<TablePaginationConfig | false>();
    const [tableClsName, setTableClsName] = useState(classNames('kdn-table', pageClassName));

    const onDisplayColumnChange = useCallback(
        (keys: string[]) => {
            const updatedDisplayColumns = columns?.filter((c) => keys.some((k) => k === c.key));

            setDisplayColumns(updatedDisplayColumns || []);
        },
        [columns]
    );

    const onChangeExtend = (
        changedPagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<any> | SorterResult<any>[],
        extra: TableCurrentDataSource<any>
    ) => {
        setPagination(changedPagination);
        if (onChange != null) {
            onChange(changedPagination, filters, sorter, extra);
        }
    };

    useEffect(() => {
        if (dataSource == null || dataSource.length === 0) {
            return setTableClsName(classNames('kdn-table', pageClassName, 'kdn-table-no-paging'));
        }

        if (pagination != null && pagination != false) {
            if (pagination.total == null) {
                return setTableClsName(
                    classNames('kdn-table', pageClassName, {
                        'kdn-table-no-paging': pagination.pageSize != null && dataSource.length < pagination.pageSize,
                    })
                );
            } else {
                return setTableClsName(
                    classNames('kdn-table', pageClassName, {
                        'kdn-table-no-paging': dataSource.length < pagination.total,
                    })
                );
            }
        }
    }, [dataSource, pagination]);

    return (
        <Card
            className={primaryClsName}
            title={
                <Row>
                    <Col xs={24} md={16} lg={18}>
                        <h3>{primaryTitle}</h3>
                    </Col>
                    <Col xs={24} md={8} lg={6}>
                        <div className="kdn-dyn-actions kdn-d-flex kdn-align-items-center kdn-justify-content-end kdn-w-100 kdn-flex-1">
                            {actions && <div className="kdn-mr-4 kdn-w-100">{actions}</div>}
                            {rightActionCtn && rightActionCtn()}
                            <DynamicColumnSettings
                                columns={columns}
                                onSelectedChange={onDisplayColumnChange}
                            ></DynamicColumnSettings>
                        </div>
                    </Col>
                </Row>
            }
        >
            <Table
                className={tableClsName}
                columns={displayColumns}
                dataSource={dataSource}
                onChange={onChangeExtend}
                {...rest}
            />
        </Card>
    );
};

export default DynamicTable;
