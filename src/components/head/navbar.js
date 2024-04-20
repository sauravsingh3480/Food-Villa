import search_icon from './image_head/search_icon.png';
import offer_icon from './image_head/offer_icon.png';
import help_icon from './image_head/help_icon.png';
import signin_icon from './image_head/signin_icon.png';
import cart_icon from './image_head/cart_icon.png';

import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div id="search" className='li'>
            <Link to='/search'><img src={search_icon} alt='search-img' /></Link>
            <Link to='/search'><span>Search</span></Link>
        </div>
    );
}
const Offer = () => {
    return (
        <div id="offer" className='li'>
            <Link to='/offers'><img src={offer_icon} alt='offer-img' /></Link>
            <Link to='/offers'><span>offers<sup>New</sup></span></Link>
        </div>
    );
}
const Help = () => {
    return (
        <div id="help" className='li'>
            <Link to='/help'><img src={help_icon} alt='help-img' /></Link>
            <Link to='/help'><span>Help</span></Link>
        </div>
    );
}
const SignIn = () => {
    return (
        <div id="signin" className='li'>
            <Link to='/signin'><img src={signin_icon} alt='signin-img' /></Link>
            <Link to='/signin'><span>Sign In</span></Link>
        </div>
    );
}
const Cart = () => {
    return (
        <div id="cart" className='li'>
            <Link to='/signin'><img src={cart_icon} alt='cart-img' /></Link>
            <Link to='/signin'><span>Cart</span></Link>
        </div>
    );
}
const NavBar = () => {
    return (
        <div id="navbar">
            <ul>
                <li><Search /></li>
                <li><Offer /></li>
                <li><Help /></li>
                <li><SignIn /></li>
                <li><Cart/></li>
            </ul>
        </div>
    );
}

export default NavBar;