import * as React from 'react';
import NavItem from './NavItem';
import ItemMenu from '../Models/ItemMenu';

export interface DrawerProps {
}


const Drawer = (props: DrawerProps) => {

    let items: ItemMenu[] = [{
        icon: 'dashboard',
        text: 'Home',
        to: '/'
    },
    {
        icon: 'collections_bookmark',
        text: 'Meus Livros',
        to: '/my-books'
    }
    ];

    return (
        <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Biblioteca ESX</span>
            <nav className="mdl-navigation">
                <ul>
                    {items.map((item, index) => <NavItem key={index} {...item} />)}
                </ul>
            </nav>
        </div>);
}


export default Drawer;
