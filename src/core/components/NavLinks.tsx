/**
 * @returns navigation links
 */
function NavLinks() {
    return (
        <ul className='link-container h-100 d-flex'>
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
    )
};

export default NavLinks;
