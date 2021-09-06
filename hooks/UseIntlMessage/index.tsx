import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

export default function useIntlMessage(
    id: string,
    defaultMessage?: string
): string {
    const intl = useIntl();
    const [message, setMessage] = useState<string>(defaultMessage || '');

    useEffect(() => {
        setMessage(
            intl.formatMessage({
                id,
                defaultMessage,
            })
        );
    }, [intl]);

    return message;
}
