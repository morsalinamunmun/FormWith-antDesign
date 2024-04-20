import { Menu }
    from
    "antd"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="table">
                    <Link to="/table">Table</Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar;