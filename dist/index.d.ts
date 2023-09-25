import * as React from 'react';
interface Props extends RenderParameters {
    'load-callback'?: () => void;
    ref?: any;
    id?: string;
}
interface State {
    ready: boolean;
    id?: string;
    turnstile?: Turnstile;
    rendered: boolean;
}
interface RenderParameters {
    sitekey: string;
    action?: string;
    cData?: any;
    callback: (token: string) => void;
    'expired-callback'?: () => void;
    'error-callback'?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    tabindex?: number;
}
export interface Turnstile {
    render: (element: Turnstile, params: RenderParameters) => string;
    reset: (widgetId: string) => void;
    getResponse: (widgetId: string) => string;
    remove: (widgetId: string) => void;
}
declare global {
    interface Window {
        turnstile: Turnstile;
        onloadTurnstileCallback: () => void;
    }
}
declare class CFTurnstile extends React.Component<Props, State> {
    private readonly ref;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<Props>): void;
    renderTurnstile(): void;
    resetTurnstile(): void;
    removeTurnstile(): void;
    render(): JSX.Element;
}
export default CFTurnstile;
