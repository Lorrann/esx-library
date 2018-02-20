import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LendButton from './LendButton';
import RenewButton from './RenewButton';

export interface ItemCollectionProps {
    id: string;
    title: string;
    coverPicture: string;
    returnDate?: string;
    showReturnDate?: boolean;
    showRenewButton?: boolean;
    onLending?(itemId: string): void;
    onRenew?(itemId: string): void;
}

const ItemCollection = (props: ItemCollectionProps) => {

    const emptyFunc = () => { };
    const hasReturnDate = props.returnDate !== undefined && props.returnDate.trim() !== '';

    let footer = <LendButton available={!hasReturnDate} onClick={(event) => props.onRenew ? props.onRenew(props.id) : emptyFunc} />;

    if (props.showReturnDate && hasReturnDate) {
        footer = <small className="mdl-color-text--red">Data de devolução: <strong>{props.returnDate}</strong> <RenewButton onClick={(event) => props.onRenew ? props.onRenew(props.id) : emptyFunc} /></small>
    }


    return (<div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--6-col-tablet">
        <div className="mdl-card__title mdl-card--expand ">
            <img className="card-img-top" src={props.coverPicture} alt="Card image cap" style={{ width: '150px', margin: '0 auto' }} />
        </div>
        <div className="mdl-card__supporting-text">
            <h5 className="card-title"><NavLink className="mdl-navigation__link" to={"/books/" + props.id}>{props.title}</NavLink></h5>
        </div>
        <div className="mdl-card__actions mdl-card--border">
            {footer}
        </div>
    </div>);
};

export default ItemCollection;