import * as React from 'react';

export interface RatingStarProps {
    id: string,
    value: number,
    checked: boolean,
    type: string,
    readOnly: boolean;
    onChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const RatingStar = (props: RatingStarProps) => {
    const componentName: string = Math.random().toString(36).substring(7);
    return (<React.Fragment>
        <input type="radio" id={props.id} onChange={props.onChange} name={`rating_${componentName}`} readOnly={props.readOnly} value={props.value} checked={props.checked} />
        <label className={props.type} htmlFor={props.id}></label>
    </React.Fragment>);

};

export default RatingStar;