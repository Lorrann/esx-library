import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Rating from '../components/Rating';
import LendButton from '../components/LendButton';

interface BookDetailsPageState {
    id: string
    title: string
    available: boolean
    description: string
    rating: number
    coverPicture: string
}

class BookDetailsPage extends React.Component<RouteComponentProps<{}>, BookDetailsPageState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        this.state = {
            id: '2345-continuos-integration',
            title: 'Continuous Integration',
            available: true,
            rating: 3.5,
            coverPicture: 'https://martinfowler.com/books/duvall.jpg',
            description: 'For any software developer who has spent days in "integration hell", cobbling together myriad software components, Continuous Integration: Improving Software Quality and Reducing Risk illustrates how to transform integration from a necessary evil into an everyday part of the development process. The key, as the authors show, is to integrate regularly and often using continuous integration (CI) practices and techniques.<br /><br />The authors first examine the concept of CI and its practices from the ground up and then move on to explore other effective processes performed by CI systems, such as database integration, testing, inspection, deployment, and feedback. Through more than forty CI-related practices using application examples in different languages, readers learn that CI leads to more rapid software development, produces deployable software at every step in the development lifecycle, and reduces the time between defect introduction and detection, saving time and lowering costs. With successful implementation of CI, developers reduce risks and repetitive manual processes, and teams receive better project visibility.<br /><br />The book covers<br /><ul><li>How to make integration a "non-event" on your software development projects</li><li>How to reduce the amount of repetitive processes you perform when building your software</li><li>Practices and techniques for using CI effectively with your </li><li>Reducing the risks of late defect discovery, low-quality software, lack of visibility, and lack of deployable software</li><li>Assessments of different CI servers and related tools on the market</li><br />The book’s companion Web site, www.integratebutton.com, provides updates and code examples'
        }
    }


    onLending(id: string) {

    }

    render() {
        return <div className='mdl-grid'>
            <div className='mdl-cell mdl-cell--12-col mdl-grid'>
                <div className="mdl-cell mdl-cell--3-col">
                    <img src={this.state.coverPicture} width="100%" alt="" />
                </div>
                <div className="mdl-cell mdl-cell--7-col mdl-cell--1-offset mdl-grid">
                    <h3>{this.state.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
                    <div className="mdl-cell mdl-cell--12-col">
                        <Rating value={this.state.rating} readOnly={true} />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                    <LendButton available={this.state.available} onClick={(event)=> this.onLending(this.state.id)} /> 
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default BookDetailsPage;
