import React from "react";
import { Navbar } from "flowbite-react";

class Header extends React.Component {
    render() {
        return (
            <Navbar
                fluid={true}
                rounded={true}
                className="dark"
            >
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Resume Builder
                    </span>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;