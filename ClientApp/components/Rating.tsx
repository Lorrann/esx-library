import * as React from 'react';
import RatingStar from './ratingstar';

export interface RatingProps {
    value: number;
    readOnly: boolean;
    onVoted?(value: number): void
}

interface RatingState {
    value: number;
}

class Rating extends React.Component<RatingProps, RatingState> {
    constructor(props: RatingProps) {
        super(props);

        this.state = { value: this.props.value };
        this.vote = this.vote.bind(this);
    }

    allowedRatings = [
        { value: 5, type: 'full' },
        { value: 4.5, type: 'half' },
        { value: 4, type: 'full' },
        { value: 3.5, type: 'half' },
        { value: 3, type: 'full' },
        { value: 2.5, type: 'half' },
        { value: 2, type: 'full' },
        { value: 1.5, type: 'half' },
        { value: 1, type: 'full' }
    ];

    vote(event: React.SyntheticEvent<HTMLInputElement>) {

        if (this.props.readOnly) {
            return;
        }

        let value = parseFloat(event.currentTarget.value);
        this.setState((prevState: RatingState, props: RatingProps) => ({ value }));

        if (this.props.onVoted) {
            this.props.onVoted(value);
        }
    }

    render() {
        return <fieldset className="rating mb-3">

            {
                this.allowedRatings.map((rating, index) =>
                    <RatingStar key={index} checked={rating.value === this.state.value} id={`star_${rating.value}`} readOnly={true} type={rating.type} value={rating.value} onChange={this.vote} />
                )
            }

        </fieldset>
    }
}

export default Rating;
