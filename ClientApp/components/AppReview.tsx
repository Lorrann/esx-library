import * as React from 'react';

import Rating from '../components/Rating';
import UserReviews from './UserReviews';

import Review from '../Models/Review';

export interface AppReviewProps {
    avaregeRating: number;
    reviews: Review[]
}

const AppReview = (props: AppReviewProps) => (
    <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--2-col'>
            <p>Média de Avalicação:</p>
        </div>
        <div className='mdl-cell mdl-cell--10-col'>
            <Rating value={props.avaregeRating} readOnly={true} />
        </div>
        <div className='mdl-cell mdl-cell--12-col'>
            <UserReviews reviews={props.reviews} />
        </div>
    </div>
);

export default AppReview;