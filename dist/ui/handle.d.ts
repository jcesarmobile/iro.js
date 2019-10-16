import { h } from 'preact';
declare function IroHandle(props: any): h.JSX.Element;
declare namespace IroHandle {
    var defaultProps: {
        x: number;
        y: number;
        r: number;
        url: any;
        origin: {
            x: number;
            y: number;
        };
    };
}
export default IroHandle;
