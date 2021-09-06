# Multiple languages

Because [i18next is too big](https://www.i18next.com/overview/comparison-to-others#i-18-next-is-to-big) and it's must a wrapper for ReactJs.

So We use a general internationalization library for ReactJs (pure ReactJs). It's `react-intl` from [`formatjs`](https://formatjs.io/)(origin from Yahoo).

Before using that should be read [official documents](https://formatjs.io/docs/getting-started/application-workflow).

## HOW IT WORKS

- Update lang messages into `locale/{YOUR_LANG}/*.json`

- Display this message with `JSX` template:

  ```javascript
  import IntlMessages from 'components/IntlMessages';

  <IntlMessages id="{MESSAGE_KEY}" />;
  ```

- Using directly `get message by id` (without `JSX` element) with `useIntlMessage(MESSAGE_ID)`

  Ex:

  ```javascript
  import useIntlMessage from 'hooks/UseIntlMessage';

  <AsyncRoute
    path="/"
    asyncComponent={HomePage}
    title={useIntlMessage('page.meta.title.home')}
    description={useIntlMessage('page.meta.title.home')}
  />;
  ```

- Using utils format functions:

  - FormattedDate
  - FormattedTime
  - FormattedNumber
  - FormattedList
  - FormattedDisplayName
  - FormattedDateParts
  - FormattedTimeParts
  - FormattedDateTimeRange
    ...
    See more from [official public interface](https://github.com/formatjs/formatjs/blob/main/packages/react-intl/index.ts)

  Ex:

  ```javascript
    import { useIntl } from 'react-intl';

    const intl = useIntl();

    intl.formatDate(new Date();
  ```

## UI component locale languages (Auto inject by AntDesign)

_Ant Design components support locale languages._
_*AUTO injected.*_
