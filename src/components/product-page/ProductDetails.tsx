import minusImage from '../../assets/images/icon-minus.svg'
import plusImage from '../../assets/images/icon-plus.svg'
import cartImage from '../../assets/images/icon-cart-white.svg'

function ProductDetails() {
    return (
        <div className="p-3">
            <h6 className="product-subtitle">Sneaker Company</h6>
            <h2 className="product-title">Fall Limited Edition Sneakers</h2>
            <p className="product-description">
                These low profile sneakers are your perfect casual wear campanion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="row align-items-center">
                <h4 className="discount-price">$125.00</h4>
                <p className="discount-badge">50%</p>
            </div>
            <h6 className="original-price">$250.00</h6>
            <div className="cart-action row justify-content-between align-items-center">
                <div className="cart-counter-box d-flex align-items-center justify-content-between">
                    <img className='cursor-pointer' src={minusImage} alt="minus-icon" />
                    <span className='product-count'>0</span>
                    <img className='cursor-pointer' src={plusImage} alt="plus-icon" />
                </div>
                <div className="add-to-cart-box">
                    <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center'>
                        <img src={cartImage} alt="cart" className='cart-image' />
                        <span className='cart-btn-text'>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;
