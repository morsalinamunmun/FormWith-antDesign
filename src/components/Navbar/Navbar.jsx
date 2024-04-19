import
{ Menu }
from
"antd"

const Navbar = () => {
    return (
        <div  style={{height: '100vh', marginLeft: '400px'}}>
            <Menu
            mode="horizontal"
            const items ={[
                {
                    label: 'Home',
                    key: "home"
                },
                {
                    label: "Table",
                    key: "table"
                },
                {
                    label: "Login",
                    key: "login"
                }
            ]}
            ></Menu>
        </div>
    );
};

export default Navbar;