import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ListingsPage } from '../components/pages/ListingsPage';
import { LoginPage } from '../components/pages/LoginPage';
import { Results } from '../components/pages/Results';
import { SignUpPage } from '../components/pages/SignUpPage';


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
                name: 'results',
                path: '/results',
                element: <Results/>
            }, 
            {
                name: 'signup',
                path: '/signup',
                element: <SignUpPage/>
            }
            
    ]
    }
]

export const router = createBrowserRouter(routes);
