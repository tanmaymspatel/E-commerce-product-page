import { useContext } from 'react'

import productThumb from '../../assets/images/image-product-1-thumbnail.jpg'
import iconDelete from '../../assets/images/icon-delete.svg'
import CartContext from '../../context/cart-context/cartContext'

function CartBody() {
    const { count } = useContext(CartContext);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <figure>
                    <img src={productThumb} alt="product-thumbnail" className='cart-product-thumbnail' />
                </figure>
                <div>
                    <p className='cart-product'>Fall Limited Edition Sneakers</p>
                    <p className='cart-calculation'><span>{`$125.00 x ${count}`} </span><span className='cart-total'>{`$${(125.00 * count).toFixed(2)}`}</span></p>
                </div>
                <figure >
                    <img src={iconDelete} alt="delete-cart-item" className='cursor-pointer' />
                </figure>
            </div>
            <div className='checkout-container'>
                <button className='btn btn-primary w-100'>
                    <span className='btn-text'>Checkout</span>
                </button>
            </div>
        </div>
    )
}

export default CartBody
