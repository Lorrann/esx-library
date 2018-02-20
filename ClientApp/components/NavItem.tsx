import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
    icon: string;
    text: string;
    to: string;
}

const NavItem = (props: NavItemProps) => (
        <NavLink to={props.to} className="mdl-navigation__link"><i className="material-icons mdl-list__item-icon">{props.icon}</i> &nbsp; {props.text}</NavLink>
);

export default NavItem;