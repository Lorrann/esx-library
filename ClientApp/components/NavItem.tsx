import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
    icon: string;
    text: string;
    to: string;
}

const NavItem = (props: NavItemProps) => (
    <li className="mdl-list__item">
        <NavLink to={props.to}>
            <span className="mdl-list__item-primary-content">
                {props.text} <i className="material-icons mdl-list__item-icon">{props.icon}</i>
            </span>
        </NavLink>
    </li>);

export default NavItem;