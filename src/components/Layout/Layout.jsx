import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="p-4">
            <Header/>
            <Outlet/>
        </div>
    );
}