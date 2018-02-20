import * as React from 'react';
import ItemCollection from './ItemCollection';
import BookItem from '../Models/BookItem';

export interface BookCollectionProps {
    books: BookItem[],
    onLending(bookId: string): void
}

const BookCollection = (props: BookCollectionProps) => (
    <div className="mdl-grid">
        {props.books.map((book, index) =>
            <div className="mdl-cell mdl-cell--2-col">
                <ItemCollection key={index} {...book} onLending={props.onLending} />
            </div>
        )}
    </div>
);

export default BookCollection;