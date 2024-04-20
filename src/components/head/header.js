import NavBar from "./navbar";
import Logo from "./logo";
const Header = () => {
    return (
        <header>
            <div id="header">
                <Logo />
                <NavBar />
            </div>
        </header>
    );
}

export default Header;