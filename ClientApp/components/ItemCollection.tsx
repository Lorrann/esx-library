import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LendButton from './LendButton';

export interface ItemCollectionProps {
    id: string;
    title: string;
    resume: string;
    available: boolean;
    coverPicture: string;
    onLending(itemId: string): void;
}

const ItemCollection = (props: ItemCollectionProps) => {

    return (<div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--6-col-tablet">
        <div className="mdl-card__title mdl-card--expand ">
            <img className="card-img-top" src={props.coverPicture} alt="Card image cap" style={{ width: '150px', margin: '0 auto' }} />
        </div>
        <div className="mdl-card__supporting-text">
            <h5 className="card-title"><NavLink to={"/books/" + props.id}>{props.title}</NavLink></h5>
            <p className="card-text">{props.resume}</p>
        </div>
        <div className="mdl-card__actions mdl-card--border">
            <LendButton available={props.available} onClick={(event)=> props.onLending(props.id)} /> 
        </div>
    </div>);
};

export default ItemCollection;