import {
    CheckCircleFilled,
    CloseCircleFilled,
    ExclamationCircleFilled,
    InfoCircleFilled,
} from '@ant-design/icons';
import { notification } from 'antd';
import { ReactNode } from 'react';

export function notifyInfo(message: string | ReactNode) {
    notification.info({
        message: '',
        icon: <InfoCircleFilled />,
        description: message,
        duration: 3,
    });
}

export function notifyError(message: string | ReactNode) {
    notification.error({
        message: '',
        icon: <CloseCircleFilled />,
        description: message,
        duration: 3,
    });
}

export function notifySuccess(message: string | ReactNode) {
    notification.success({
        message: '',
        icon: <CheckCircleFilled />,
        description: message,
        duration: 3,
    });
}

export function notifyWarning(message: string | ReactNode) {
    notification.warning({
        message: '',
        icon: <ExclamationCircleFilled />,
        description: message,
        duration: 3,
    });
}
