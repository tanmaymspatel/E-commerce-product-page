import { useState } from 'react';
import { ProductImages } from './productImages';

function ProductImage() {
    const [prodIndex, setProdIndex] = useState(0);
    const { image } = ProductImages[prodIndex];
    return (
        <section>
            <figure>
                <img src={image} alt="product-1" className='product-image' />
            </figure>
            <div className='thumbnail-container'>
                <ul className='row justify-content-between'>
                    {ProductImages.map((img, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setProdIndex(index)}
                            >
                                <img src={img.thumbnail} alt={`product-thumbnail-${img.id}`} className={`${prodIndex === index ? "active-thumb" : ""} cursor-pointer product-thumbnail`} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
};

export default ProductImage;
