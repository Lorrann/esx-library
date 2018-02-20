import * as React from 'react';
import AppHeader from '../components/AppHeader';
import Drawer from '../components/Drawer';

export interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => (<div className='mdl-layout mdl-js-layout'>
    <AppHeader />
    <Drawer />
    <main className="mdl-layout__content">
        {props.children}
    </main>
</div>);

export default Layout;