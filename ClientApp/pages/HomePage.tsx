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
                available: true,
                coverPicture: 'https://martinfowler.com/books/duvall.jpg',
                resume: ''
            },
            {
                id: '1234-test-driven-developemtn',
                title: 'Test-Driven Development',
                available: false,
                coverPicture: 'https://images-na.ssl-images-amazon.com/images/I/511pSK9NsrL._SX404_BO1,204,203,200_.jpg',
                resume: ''
            },
            {
                id: '6521-domain-driven-design',
                title: 'Domain-Driven Design',
                available: false,
                coverPicture: 'https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL.jpg',
                resume: ''
            },
            {
                id: '9854-building-hybrid-clouds-with-azure-stack',
                title: 'Building Hybrid Clouds with Azure Stack',
                available: true,
                coverPicture: 'https://www.packtpub.com/sites/default/files/9781786466297.png',
                resume: ''
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
                <BookCollection books={this.state.books} onLending={this.onLending} />
            </div>
        </div >;
    }
}

export default HomePage;
