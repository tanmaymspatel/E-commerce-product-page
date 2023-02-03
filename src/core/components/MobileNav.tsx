import closeMenu from '../../assets/images/icon-close.svg'
import NavLinks from './NavLinks'
/**
 * @returns mobile navigation links which toggles on clicking hamburger menu 
 */
function MobileNav() {
    return (
        <nav className='mobile-nav h-100 flex-grow-1 d-flex align-items-center'>
            <label htmlFor="mobileMenu">
                <img src={closeMenu} alt="close-mobile-menu" className='cursor-pointer close-menu' />
            </label>
            <NavLinks />
        </nav>
    )
};

export default MobileNav;
