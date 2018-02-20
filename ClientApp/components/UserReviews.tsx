import * as React from 'react';
import Rating from './Rating';

import Review from '../Models/Review';

export interface UserReviewProps {
    reviews: Review[]
}

const UserReview = (props: UserReviewProps) => (
    <ul className="mdl-list mdl-grid">
        {props.reviews.map((review, index) => (
            <li key={index} className="mdl-list__item mdl-list__item--three-line mdl-cell mdl-cell--12-col">
                <div className="mdl-list__item-primary-content mdl-cell mdl-cell--7-col">
                    <img src={review.picture} className="mdl-list__item-avatar" />
                    <span>{review.name}</span>
                    <span className="mdl-list__item-text-body">{review.comment}</span>
                </div>
                <div className="mdl-list__item-secondary-content mdl-cell mdl-cell--3-col">
                    <Rating value={review.rating} readOnly={true} />
                </div>
            </li>)
        )}

    </ul>
);

export default UserReview;