import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import BookItem from '../Models/BookItem';
import BookCollection from '../components/BookCollection';

interface MyLoansPageState {
    books: BookItem[]
}

class MyLoansPage extends React.Component<RouteComponentProps<{}>, MyLoansPageState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        this.state = {
            books: [
                {
                    id: '1234-test-driven-developemtn',
                    title: 'Test-Driven Development',
                    coverPicture: 'https://images-na.ssl-images-amazon.com/images/I/511pSK9NsrL._SX404_BO1,204,203,200_.jpg',
                    returnDate: '13/03/2018'
                },
                {
                    id: '9854-building-hybrid-clouds-with-azure-stack',
                    title: 'Building Hybrid Clouds with Azure Stack',
                    coverPicture: 'https://www.packtpub.com/sites/default/files/9781786466297.png',
                    returnDate: '15/03/2018'
                }]
        }
    }

    render() {
        return <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
                <h3>Meus Empréstimos</h3>
                <BookCollection books={this.state.books} showReturnDate={true} />
            </div>
        </div >
    }
}

export default MyLoansPage;
