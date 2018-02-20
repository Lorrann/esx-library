import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import BookCollection from '../components/BookCollection';
import BookItem from '../Models/BookItem';
interface HomePageState {
    books: BookItem[];
}

class HomePage extends React.Component<RouteComponentProps<{}>, HomePageState> {

    constructor(props: RouteComponentProps<{}>) {
        super(props);

        this.state = {
            books: [{
                id: '2345-continuos-integration',
                title: 'Continuous Integration',
                coverPicture: 'https://martinfowler.com/books/duvall.jpg',
                returnDate: '',
            },
            {
                id: '1234-test-driven-developemtn',
                title: 'Test-Driven Development',
                coverPicture: 'https://images-na.ssl-images-amazon.com/images/I/511pSK9NsrL._SX404_BO1,204,203,200_.jpg',
                returnDate: '13/03/2018'
            },
            {
                id: '6521-domain-driven-design',
                title: 'Domain-Driven Design',
                coverPicture: 'https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL.jpg',
                returnDate: ''
            },
            {
                id: '9854-building-hybrid-clouds-with-azure-stack',
                title: 'Building Hybrid Clouds with Azure Stack',
                coverPicture: 'https://www.packtpub.com/sites/default/files/9781786466297.png',
                returnDate: '15/03/2018'
            }
            ]
        };

        this.onLending = this.onLending.bind(this);
    }

    onLending(bookId: string) {

    }

    render() {
        return <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
                <h3>Livros</h3>
                <BookCollection books={this.state.books} onLending={this.onLending} showReturnDate={false} />
            </div>
        </div >;
    }
}

export default HomePage;
