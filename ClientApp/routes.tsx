import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLoansPage from './pages/MyLoansPage';


export const routes = <Layout>
    <Route exact path='/' component={HomePage} />
    <Route path='/books/:id' component={BookDetailsPage} />
    <Route path='/my-loans' component={MyLoansPage} />
</Layout>;
