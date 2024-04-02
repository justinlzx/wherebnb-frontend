import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ListingsPage } from '../components/pages/ListingsPage';
import { LoginPage } from '../components/pages/LoginPage';
import { IndividualListingsPage } from '../components/pages/IndividualListingsPage';
import { ReservationsPage } from '../components/pages/ReservationsPage';
import { SignUpPage } from '../components/pages/SignUpPage';
import { MyBookingsPage } from '../components/pages/MyBookings';
import { Review } from '../components/Reviews/Review';
import { CheckInPage } from '../components/pages/CheckInPage';
import { FormProvider } from '../components/Register/LoginBox.jsx';

export const routes = [
    {
        name: 'home',
        path: '/',
        element: <FormProvider>
            <App />
        </FormProvider>,
        children: [
            {
                name: 'listings',
                path: '/',
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
                path: 'listings/review/:id',
                element: <Review/>
            }, 
            {
                name: 'signup',
                path: 'signup',
                element: <SignUpPage/>
            },
            {
                name: 'mybookings',
                path: 'mybookings',
                element: <MyBookingsPage/>
            },
            {
                name: 'check-in',
                path: '/check-in',
                element: <CheckInPage/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes);
