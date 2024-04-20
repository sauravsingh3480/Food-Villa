import logo from './image_head/logo.png';

const Logo = () => {
    return (
        <div id='logo-cotain'>
            <a href='/'>
                <img src={logo}
                    alt="logo" id="swiggylogo"/>
            </a>
        </div>
    );
}

export default Logo;