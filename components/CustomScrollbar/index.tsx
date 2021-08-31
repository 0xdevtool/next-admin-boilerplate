import type { NextPage } from 'next';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars: NextPage<any> = (props) => (
    <Scrollbars
        {...props}
        autoHide
        renderTrackHorizontal={(props: any) => (
            <div {...props} style={{ display: 'none' }} className="track-horizontal" />
        )}
    />
);

export default CustomScrollbars;
