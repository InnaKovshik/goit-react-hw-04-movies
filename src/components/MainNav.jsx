import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <ul className="Main-nav">
            <li><NavLink to="/" className="Main-nav-list" activeClassName="active" exact>Home</NavLink></li>
            <li><NavLink to="/movies" activeClassName="active" exact>Movies</NavLink></li>
        </ul>
    );
}

export default MainNav;