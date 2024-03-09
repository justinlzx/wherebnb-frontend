import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ListingsPage } from '../components/pages/ListingsPage';
import { LoginPage } from '../components/pages/LoginPage';
import { Results } from '../components/pages/Results';


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
            
    ]
    }
]

export const router = createBrowserRouter(routes);
