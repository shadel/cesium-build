import * as React from 'react';
import { models, Embed, IEmbedConfiguration } from 'powerbi-client';
export interface IProps extends IEmbedConfiguration {
    id: string;
    accessToken: string;
    embedUrl: string;
    pageName?: string;
    filters?: models.IFilter[];
    filterPaneEnabled?: boolean;
    navContentPaneEnabled?: boolean;
    onEmbedded?: (embed: Embed) => any;
}
export declare class Report extends React.Component<IProps, {}> {
    component: Embed;
    rootElement: HTMLElement;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IProps): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    embed(config: IEmbedConfiguration): Embed;
    reset(): void;
    updateState(props: IProps): void;
    validateConfig(config: IEmbedConfiguration): boolean;
    render(): JSX.Element;
}
export default Report;
