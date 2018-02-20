import * as React from 'react';

export interface AppHeaderProps { }

const AppHeader = (props: AppHeaderProps) => (
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Biblioteca ESX</span>
            <div className="mdl-layout-spacer"></div>
        </div>
    </header>
);

export default AppHeader;