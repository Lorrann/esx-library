import * as React from 'react';

export interface LendButtonProps {
    onClick(event: React.SyntheticEvent<HTMLButtonElement>): void,
    available: boolean
}

const LendButton = (props: LendButtonProps) => (<button type="button" onClick={props.onClick} disabled={!props.available} className="mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect">Pegar Emprestado</button>);

export default LendButton;