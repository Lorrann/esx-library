import * as React from 'react';

export interface RatingStarProps {
    id: string,
    value: number,
    checked: boolean,
    type: string,
    readOnly: boolean;
    onChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

interface RatingStarState { }

class RatingStar extends React.Component<RatingStarProps, RatingStarState> {
    constructor(props: RatingStarProps) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <input type="radio" id={this.props.id} onChange={this.props.onChange} name="rating" readOnly={this.props.readOnly} value={this.props.value} checked={this.props.checked} />
            <label className={this.props.type} htmlFor={this.props.id}></label>
        </React.Fragment>);
    }
}

export default RatingStar;
