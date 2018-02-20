import * as React from 'react';

export interface AppTabContentProps {
    id: string,
    isActive?: boolean
    children: React.ReactNode
}

const AppTabContent = (props: AppTabContentProps) => {
    let activeClass = props.isActive ? 'is-active' : '';
    return <div className={`mdl-tabs__panel ${activeClass}`} id={props.id}>{props.children}</div>
};

export default AppTabContent;