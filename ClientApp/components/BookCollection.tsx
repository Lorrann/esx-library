import * as React from 'react';
import ItemCollection from './ItemCollection';
import BookItem from '../Models/BookItem';

export interface BookCollectionProps {
    books: BookItem[];
    showReturnDate: boolean;
    onLending?(bookId: string): void;
}

const BookCollection = (props: BookCollectionProps) => (
    <div className="mdl-grid">
        {props.books.map((book, index) =>
            <div key={index} className="mdl-cell mdl-cell--2-col">
                <ItemCollection {...book} onLending={props.onLending} showReturnDate={props.showReturnDate} />
            </div>
        )}
    </div>
);

export default BookCollection;