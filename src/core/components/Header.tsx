import { useContext } from 'react'

import brandLogo from '../../assets/images/logo.svg'
import cartImage from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import hamburger from '../../assets/images/icon-menu.svg'

import CartContext from '../../context/cart-context/cartContext'
import CartBody from './CartBody'
import NavLinks from './NavLinks'
/**
 * @returns Header of the page 
 */
function Header() {

    const { count } = useContext(CartContext);

    return (
        <div className="h-100 container header-container">
            <div className="h-100 d-flex justify-content-between align-items-center">
                <div className='mobile-menu'>
                    <label htmlFor="mobileMenu">
                        <img src={hamburger} alt="hamburger-menu" className='cursor-pointer' />

                    </label>
                </div>
                <div className='logo-container'>
                    <img src={brandLogo} alt="sneakers-logo" />
                </div>
                <div className='main-nav h-100 flex-grow-1 d-flex align-items-center'>
                    <nav className='left-nav h-100 flex-grow-1 d-flex align-items-center'>
                        <NavLinks />
                    </nav>
                    <nav className='right-nav'>
                        <div className='nav-action d-flex align-items-center'>
                            <div className='cart-image-container'>
                                <figure className='position-relative'>
                                    <img src={cartImage} alt="cart-icon" />
                                    {count > 0 && <small className='position-absolute cart-count'>{count}</small>}
                                </figure>
                                <div className='cart-items-box d-flex flex-column'>
                                    <div className='cart-heading'>
                                        <h4 >Cart</h4>
                                    </div>
                                    <div className={`cart-body flex-grow-1 d-flex flex-column justify-content-center ${count === 0 ? "align-items-center" : ""}`}>
                                        {count > 0 ? <CartBody /> : <p className='empty-cart-text'>Your cart is empty</p>}
                                    </div>
                                </div>
                            </div>
                            <figure className='avatar-container cursor-pointer'>
                                <img src={avatar} alt="user-avatar" className='img-fluid' />
                            </figure>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default Header;