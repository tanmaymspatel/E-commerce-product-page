import { useState, useContext } from 'react'

import minusImage from '../../assets/images/icon-minus.svg'
import plusImage from '../../assets/images/icon-plus.svg'
import cartImage from '../../assets/images/icon-cart-white.svg'
import CartContext from '../../context/cart-context/cartContext'
/**
 * @returns A component showing the information of the product 
 */
function ProductDetails() {

    const { setCount } = useContext(CartContext);
    // state for increasing cart items for this component only
    const [prodCount, setProdCount] = useState(0);

    return (
        <>
            <h6 className="product-subtitle">Sneaker Company</h6>
            <h2 className="product-title">Fall Limited Edition Sneakers</h2>
            <p className="product-description">
                These low profile sneakers are your perfect casual wear campanion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="row align-items-center justify-content-between">
                <div className='d-flex align-items-center'>
                    <h4 className="discount-price">$125.00</h4>
                    <p className="discount-badge">50%</p>
                </div>
                <h6 className="original-price">$250.00</h6>
            </div>
            <div className="cart-action row justify-content-between align-items-center">
                <div className="cart-counter-box d-flex align-items-center justify-content-between">
                    <img className='cursor-pointer' src={minusImage} alt="minus-icon" onClick={() => setProdCount(prev => prev > 0 ? prev - 1 : 0)} />
                    <span className='product-count'>{prodCount}</span>
                    <img className='cursor-pointer' src={plusImage} alt="plus-icon" onClick={() => setProdCount(prev => prev + 1)} />
                </div>
                <div className="add-to-cart-box">
                    <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center' onClick={() => setCount(prodCount)}>
                        <img src={cartImage} alt="cart" className='cart-image' />
                        <span className='cart-btn-text'>Add to cart</span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default ProductDetails;
