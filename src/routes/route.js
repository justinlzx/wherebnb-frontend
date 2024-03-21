import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ListingsPage } from '../components/pages/ListingsPage';
import { LoginPage } from '../components/pages/LoginPage';
import { Reviews } from '../components/pages/ReviewPage';
import { SignUpPage } from '../components/pages/SignUpPage';
import { SearchResultsPage } from '../components/pages/SearchResultsPage';


const routes = [
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
                name: 'login',
                path: '/login',
                element: <LoginPage/>  
            }, 
            {
                name: 'Reviews',
                path: '/reviews',
                element: <Reviews/>
            }, 
            {
                name: 'signup',
                path: '/signup',
                element: <SignUpPage/>
            },
            {
                name: 'results',
                path: '/results',
                element: <SearchResultsPage/>
            }
    ]
    }
]

export const router = createBrowserRouter(routes);
