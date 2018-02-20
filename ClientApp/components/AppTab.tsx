import * as React from 'react';

declare var componentHandler: any;

export interface TabHeader {
    id: string;
    text: string;
}

export interface AppTabProps {
    headers: TabHeader[]
}

interface AppTabState {
    activeTab: string;
    activeTabIndex: number;
}

class AppTab extends React.Component<AppTabProps, AppTabState> {

    headerContainer?: HTMLDivElement;

    constructor(props: AppTabProps) {
        super(props);

        this.state = { activeTab: this.props.headers[0].id, activeTabIndex: 0 }
        this.onTabClick = this.onTabClick.bind(this);
    }


    componentDidMount() {
        if (componentHandler){
            componentHandler.upgradeDom();
        }
    }

    onTabClick(event: React.SyntheticEvent<HTMLAnchorElement>) {
        event.preventDefault();

        const element = event.currentTarget;
        this.setState((prevState, props) => ({ activeTab: element.href.substring(element.href.indexOf('#') + 1), activeTabIndex: parseInt(element.dataset.index || '0') }));
    }

    render() {
        return <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
            <div className="mdl-tabs__tab-bar">
                {
                    this.props.headers.map((header, index) => {
                        let isActive = this.state.activeTab === header.id ? 'is-active' : '';
                        return <a key={index} href={'#' + header.id} data-index={index} className={`mdl-tabs__tab ${isActive}`} onClick={this.onTabClick}  >{header.text}</a>
                    })
                }
            </div>
            {React.Children.map(this.props.children, (child, index) => (React.cloneElement(child as React.ReactElement<any>, { isActive: index === this.state.activeTabIndex })))}
        </div>
    }
}

export default AppTab;
