import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ListingsPage } from '../components/pages/ListingsPage';

const routes = [
    {
        name: 'home',
        path: '/',
        element: <App />,
        children: [{
            name: 'listings',
            path: '/listings',
            element: <ListingsPage />
        }]
    }
]

export const router = createBrowserRouter(routes);