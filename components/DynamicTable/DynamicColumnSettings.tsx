import { ControlOutlined } from '@ant-design/icons';
import { Button, Checkbox, Popover } from 'antd';
import IntlMessages from 'components/IntlMessages';
import useIntlMessage from 'hooks/UseIntlMessage';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const CheckboxGroup = Checkbox.Group;

interface DynamicColumnSettingsProps {
    columns?: any[];
    defaultSelectedKeys?: string[];
    onSelectedChange?: (selectedKeys: string[]) => void;
}

const DynamicColumnSettings: React.FC<DynamicColumnSettingsProps> = ({
    columns,
    defaultSelectedKeys,
    onSelectedChange,
}) => {
    const [columnOptions, setColumnOptions] = useState<any[]>([]);
    const [selectedColumns, setSelectedColumns] = useState<any[]>([]);
    const [defaultSelectedColumns, setDefaultSelectedColumns] = useState<
        string[]
    >(defaultSelectedKeys || []);
    const [applyDisable, setApplyDisable] = useState(true);
    const modalRef = useRef();

    useEffect(() => {
        if (columns != null && columns.length > 0) {
            const options = columns.map((c) => {
                if (typeof c.title === 'string') {
                    return {
                        label: (
                            <span className="kdn-text-capitalize">
                                {c.title}
                            </span>
                        ),
                        value: c.key,
                    };
                }

                return {
                    label: (
                        <span
                          className="kdn-text-warning kdn-text-capitalize"
                          title={useIntlMessage(
                                'component.dynamictable.setting.column.defaultname'
                            )}
                        >
                            {c.label}
                        </span>
                    ),
                    value: c.key,
                };
            });

            if (
                defaultSelectedColumns === null ||
                defaultSelectedColumns.length === 0
            ) {
                setDefaultSelectedColumns(options.map((o) => o.value));
            }

            setColumnOptions(options);
            setSelectedColumns(defaultSelectedColumns);
            setApplyDisable(false);
        }
    }, [columns, defaultSelectedColumns]);

    const onSelectedColumnChanged = (e: any) => {
        setSelectedColumns(e.slice());
        setApplyDisable(e.length <= 0);
    };

    const onSubmit = useCallback(() => {
        if (onSelectedChange != null) {
            onSelectedChange(selectedColumns);
        }

        if (modalRef != null && modalRef.current != null) {
            const popOverElm: any = modalRef.current;
            popOverElm.setPopupVisible(false);
        }
    }, [modalRef, selectedColumns, onSelectedChange]);

    const getPopupContainer = (triggerNode: any) =>
        // eslint-disable-next-line no-undef
        document.querySelector('.kdn-dynamic-table') || triggerNode;

    return (
        <div className="dyn-table-column-select">
            <Popover
              ref={modalRef}
              getPopupContainer={getPopupContainer}
              placement="leftBottom"
              title={useIntlMessage(
                    'component.dynamictable.setting.column.title'
                )}
              trigger="click"
              content={
                    <div className="selecting kdn-flex-column">
                        <CheckboxGroup
                          className="kdn-flex-column"
                          options={columnOptions}
                          defaultValue={defaultSelectedColumns}
                          onChange={onSelectedColumnChanged}
                        />

                        <hr />

                        <Button
                          type="primary"
                          size="small"
                          onClick={onSubmit}
                          disabled={applyDisable}
                        >
                            <IntlMessages id="component.dynamictable.setting.column.submit" />
                        </Button>
                    </div>
                }
            >
                <ControlOutlined style={{ fontSize: '1.25rem' }} />
            </Popover>
        </div>
    );
};

export default DynamicColumnSettings;
