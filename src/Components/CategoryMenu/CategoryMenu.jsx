import { Link } from "react-router";

const CategoryMenu = () => {
    return (
        <div>
            <div className="navbar flex items-center justify-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/home/chicken">Chicken</Link>
                    </li>
                    <li>
                        <Link to='/home/seafood'>Seafood</Link>
                    </li>
                    <li>
                        <Link to='/home/beef'>Beef</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryMenu;
