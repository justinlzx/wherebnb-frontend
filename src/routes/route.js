import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ListingsPage } from '../components/pages/ListingsPage';
import { LoginPage } from '../components/pages/LoginPage';
// import { Reviews } from '../components/pages/ReviewPage';
import { IndividualListingsPage } from '../components/pages/IndividualListingsPage';
import { ReservationsPage } from '../components/pages/ReservationsPage';
import { SignUpPage } from '../components/pages/SignUpPage';
import { Reviews } from '../components/pages/Reviews';

export const routes = [
    {
        name: 'home',
        path: '/',
        element: <App />,
        children: [
            {
                name: 'listings',
                path: '/listings',
                element: <ListingsPage/>
            }, 
            {
                name: 'individual-listings',
                path: 'listings/:id',
                element: <IndividualListingsPage />
            },
            {
                name: 'reservations',
                path: 'reservations',
                element: <ReservationsPage/>
            },
            {
                name: 'login',
                path: 'login',
                element: <LoginPage/>  
            }, 
            {
                name: 'Reviews',
                path: 'reviews',
                element: <Reviews/>
            }, 
            {
                name: 'signup',
                path: 'signup',
                element: <SignUpPage/>
            },
        ]
    }
]

export const router = createBrowserRouter(routes);
