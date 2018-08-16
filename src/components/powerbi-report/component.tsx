import * as React from 'react';
import {service, models, Embed, IEmbedConfiguration} from 'powerbi-client';
import * as util from '../../util';
declare var powerbi: service.Service;

export interface IProps {
  id: string;
  accessToken: string;
  embedUrl: string;
  pageName?: string;
  filters?: models.IFilter[];
  filterPaneEnabled?: boolean;
  navContentPaneEnabled?: boolean;
  onEmbedded?: (embed: Embed) => any;
}

export class Report extends React.Component<IProps, {}> {
  component: Embed;
  rootElement: HTMLElement;
  
  constructor(props: IProps) {
    super(props);
    this.component = null;
    this.state = {
      type: 'report'
    };
  }

  componentDidMount() {
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps: IProps) {
    this.updateState(nextProps);
  }

  componentDidUpdate() {
    if (this.validateConfig(this.state)) {
      this.embed(this.state);
    }
  }

  componentWillUnmount() {
    this.reset();
  }

  embed(config: IEmbedConfiguration): Embed {
    this.component = powerbi.embed(this.rootElement, config);
    if (this.props.onEmbedded) {
      this.props.onEmbedded(this.component);
    }
    return this.component;
  }

  reset() {
    powerbi.reset(this.rootElement);
    this.component = null;
  }

  updateState(props: IProps) {
    const nextState = util.assign({}, this.state, props, {
      settings: {
        filterPaneEnabled: this.props.filterPaneEnabled,
        navContentPaneEnabled: this.props.navContentPaneEnabled
      }
    });
    /**
     * This property must be removed from the state object so that it doesn't get used in the embedConfig.
     * This would be passed to `powerbi.embed(element, embedConfig)` and attempted to be sent over postMessage;
     * however, functions cannot be cloned and it will fail.
     */
    delete nextState.onEmbedded;
    this.setState(nextState);
  }

  validateConfig(config: IEmbedConfiguration) {
    const errors = models.validateReportLoad(config);
    return (errors === undefined);
  }

  render() {
    return (
      <div className="powerbi-frame" ref={(ref) => this.rootElement = ref}></div>
    )
  }
}

// Report.propTypes = {
//   accessToken: React.PropTypes.string,
//   embedUrl: React.PropTypes.string
// }

export default Report;