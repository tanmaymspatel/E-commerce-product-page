import { useContext } from 'react'

import brandLogo from '../../assets/images/logo.svg'
import cartImage from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import hamburger from '../../assets/images/icon-menu.svg'
import CartContext from '../../context/cart-context/cartContext'

function Header() {

    const { count } = useContext(CartContext)

    return (
        <div className="h-100 container header-container">
            <div className="h-100 d-flex justify-content-between align-items-center">
                <div className='mobile-menu'>
                    <img src={hamburger} alt="hamburger-menu" />
                </div>
                <div className='logo-container'>
                    <img src={brandLogo} alt="sneakers-logo" />
                </div>
                <div className='main-nav h-100 flex-grow-1 d-flex align-items-center'>
                    <nav className='left-nav h-100 flex-grow-1 d-flex align-items-center'>
                        <ul className='h-100 d-flex align-items-center'>
                            <li className='nav-item'>
                                <span className='nav-link'>
                                    Collections
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'>
                                    Men
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'>
                                    Women
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'>
                                    About
                                </span>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'>
                                    Contact
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <nav className='right-nav'>
                        <div className='d-flex align-items-center'>
                            <div className='cart-image-container cursor-pointer'>
                                <figure className='position-relative'>
                                    <img src={cartImage} alt="cart-icon" />
                                    <small className='position-absolute cart-count'>{count}</small>
                                </figure>
                                <div className='cart-items-box d-flex flex-column'>
                                    <div className='cart-heading'>
                                        <h4 >Cart</h4>
                                    </div>
                                    <div className='cart-body flex-grow-1'>
                                        Your Cart is empty
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