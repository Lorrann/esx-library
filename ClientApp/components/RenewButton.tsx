import * as React from 'react';

export interface RenewButtonProps {
    onClick(event: React.SyntheticEvent<HTMLButtonElement>): void
}

const RenewButton = (props: RenewButtonProps) => (<button type="button" onClick={props.onClick} className="mdl-button mdl-js-button mdl-button--primary mdl-js-ripple-effect">Renovar Empréstimo</button>);

export default RenewButton;