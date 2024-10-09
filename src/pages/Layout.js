import { Outlet, Link } from 'react-router-dom';
const Layout = () => {
    return (

        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link> |&nbsp;
                    <Link to="/blogs">Blogs</Link> |&nbsp;
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
};
export default Layout;