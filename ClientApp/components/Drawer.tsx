import * as React from 'react';
import NavItem from './NavItem';
import ItemMenu from '../Models/ItemMenu';

export interface DrawerProps {
}


const Drawer = (props: DrawerProps) => {

    let items: ItemMenu[] = [{
        icon: 'library_books',
        text: 'Home',
        to: '/'
    },
    {
        icon: 'collections_bookmark',
        text: 'Meus Empréstimos',
        to: '/my-loans'
    }
    ];

    return (
        <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Biblioteca ESX</span>
            <nav className="mdl-navigation">
                {items.map((item, index) => <NavItem key={index} {...item} />)}
            </nav>
        </div>);
}


export default Drawer;
