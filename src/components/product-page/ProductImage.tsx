import { useState } from 'react';

import { ProductImages } from './productImages';
import leftArrow from '../../assets/images/icon-previous.svg'
import rightArrow from '../../assets/images/icon-next.svg'
import LightBox from './LightBox';
/**
 * @returns Product Image 
 */
function ProductImage() {

    //index of product images array
    const [prodIndex, setProdIndex] = useState(0);
    //destructuring the image from the image object of product images array
    const { image } = ProductImages[prodIndex];
    // state for toggling lightbox
    const [showLightbox, setShoeLightbox] = useState(false);
    // for going to previous slide
    const prevSlide = () => {
        setProdIndex(prev => prev > 0 ? prev - 1 : 3)
    }
    // for going to next slide
    const nextslide = () => {
        setProdIndex(prev => prev < 3 ? prev + 1 : 0)
    }
    return (
        <>
            {showLightbox && <LightBox
                ProductImages={ProductImages}
                prevSlide={prevSlide}
                nextslide={nextslide}
                leftArrow={leftArrow}
                rightArrow={rightArrow}
                setShoeLightbox={setShoeLightbox}
            />}
            <section>
                <figure className='position-relative'>
                    <img src={image} alt="product-1" className='product-image cursor-pointer' onClick={() => setShoeLightbox(true)} />
                    <img src={leftArrow} alt="left-slide-arrow" className='position-absolute slider-arrow cursor-pointer left-arrow'
                        onClick={() => prevSlide()}
                    />
                    <img src={rightArrow} alt="right-slide-arrow" className='position-absolute slider-arrow cursor-pointer right-arrow'
                        onClick={() => nextslide()}
                    />
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
        </>
    )
};

export default ProductImage;
