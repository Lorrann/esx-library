import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import LendButton from '../components/LendButton';
import AppTab from '../components/AppTab';
import AppTabContent from '../components/AppTabContent';
import AppReview from '../components/AppReview';

import Review from '../Models/Review';

interface BookDetailsPageState {
    id: string
    title: string
    available: boolean
    description: string
    rating: number
    coverPicture: string,
    reviews: Review[]
}

class BookDetailsPage extends React.Component<RouteComponentProps<{}>, BookDetailsPageState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        this.state = {
            id: '2345-continuos-integration',
            title: 'Continuous Integration',
            available: true,
            rating: 4,
            coverPicture: 'https://martinfowler.com/books/duvall.jpg',
            description: 'For any software developer who has spent days in "integration hell", cobbling together myriad software components, Continuous Integration: Improving Software Quality and Reducing Risk illustrates how to transform integration from a necessary evil into an everyday part of the development process. The key, as the authors show, is to integrate regularly and often using continuous integration (CI) practices and techniques.<br /><br />The authors first examine the concept of CI and its practices from the ground up and then move on to explore other effective processes performed by CI systems, such as database integration, testing, inspection, deployment, and feedback. Through more than forty CI-related practices using application examples in different languages, readers learn that CI leads to more rapid software development, produces deployable software at every step in the development lifecycle, and reduces the time between defect introduction and detection, saving time and lowering costs. With successful implementation of CI, developers reduce risks and repetitive manual processes, and teams receive better project visibility.<br /><br />The book covers<br /><ul><li>How to make integration a "non-event" on your software development projects</li><li>How to reduce the amount of repetitive processes you perform when building your software</li><li>Practices and techniques for using CI effectively with your </li><li>Reducing the risks of late defect discovery, low-quality software, lack of visibility, and lack of deployable software</li><li>Assessments of different CI servers and related tools on the market</li><br />The book’s companion Web site, www.integratebutton.com, provides updates and code examples',
            reviews: [
                { picture: 'https://static.cineclick.com.br/sites/adm/uploads/banco_imagens/31/602x0_519ee210134cf.jpg', rating: 5, name: 'Chuck Norris', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra.' },
                { picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/1200px-Steve_Jobs_Headshot_2010-CROP2.jpg', rating: 4, name: 'Steve Jobs', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mauris feugiat, facilisis massa sit amet, fringilla nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dui fermentum, ullamcorper tellus vestibulum, volutpat mi. Vestibulum nunc ligula, dignissim non elit id, bibendum lobortis lorem. Quisque ac magna porta ipsum suscipit porta a sit amet nibh. Suspendisse pulvinar eros vel orci venenatis varius. Integer vehicula metus id mauris pellentesque tincidunt. Phasellus vehicula lectus vel mauris imperdiet posuere. Morbi eget ligula non sapien malesuada imperdiet nec at velit. Sed laoreet vestibulum ipsum, a placerat nulla tempus non. Integer sagittis semper posuere. Quisque convallis scelerisque lorem sit amet dictum.' },
                { picture: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg', rating: 3.5, name: 'Elon Musk', comment:'Morbi maximus nec odio vitae convallis. Mauris rutrum ex sit amet dapibus gravida. Curabitur posuere tellus a lacus malesuada pretium. Donec ornare, lorem at sagittis feugiat, erat odio blandit sapien, at tempus lectus justo in tortor. Ut ut libero ut dolor luctus porttitor. Aliquam ac purus quis mauris vulputate venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
                { picture: 'https://catracalivre.com.br/wp-content/uploads/2017/10/b_4.jpg', rating: 5, name: 'Pennywise', comment:'' }
            ]
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
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--top">
                        <AppTab headers={[{ id: 'description', text: 'Descrição' }, { id: 'reviews', text: 'Avalicações' }]}>
                            <AppTabContent id='description'>
                                <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
                            </AppTabContent>
                            <AppTabContent id='reviews'>
                                <AppReview avaregeRating={3.5} reviews={this.state.reviews} />
                            </AppTabContent>
                        </AppTab>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <LendButton available={this.state.available} onClick={(event) => this.onLending(this.state.id)} />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default BookDetailsPage;
