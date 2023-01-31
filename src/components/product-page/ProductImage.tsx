import productImage from '../../assets/images/image-product-1.jpg'
function ProductImage() {
    return (
        <figure>
            <img src={productImage} alt="product-1" className='product-image' />
        </figure>
    )
}

export default ProductImage;
