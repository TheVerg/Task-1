import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {


    return ( 
            <nav className="navbar">
                <h1>My Diary</h1>
                <div className="links">

                <Link to="/">Home</Link>
                <Link to="/create">Add New</Link>

                </div>
            </nav>

     );
}
 
export default Navbar;