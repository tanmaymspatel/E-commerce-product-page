import { useState } from "react";

import close from '../../assets/images/icon-close-white.svg'
/**
 * @returns lightbox when the image is clicked 
 */
function LightBox({
    ProductImages,
    leftArrow,
    rightArrow,
    setShoeLightbox
}: any) {
    //index of product images array
    const [prodIndex, setProdIndex] = useState(0);
    //destructuring the image from the image object of product images array
    const { image } = ProductImages[prodIndex];
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
            <div className="cursor-pointer back-drop h-100 d-flex align-items-center justify-content-center">
                <div className="model-content">
                    <figure className='main-image position-relative'>
                        <img src={image} alt="product-1" className='product-image' />
                        <img src={leftArrow} alt="left-slide-arrow" className='position-absolute slider-arrow cursor-pointer left-arrow'
                            onClick={() => prevSlide()}
                        />
                        <img src={rightArrow} alt="right-slide-arrow" className='position-absolute slider-arrow cursor-pointer right-arrow'
                            onClick={() => nextslide()}
                        />
                        <p className="cursor-pointer lightbox-close position-absolute" onClick={() => setShoeLightbox(false)}>
                            <img src={close} alt="close-btn" className="close-icon" />
                        </p>
                    </figure>
                    <div className='thumbnail-container'>
                        <ul className='row justify-content-between'>
                            {ProductImages.map((img: any, index: number) => {
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
                </div>
            </div>
        </>
    )
};

export default LightBox;
