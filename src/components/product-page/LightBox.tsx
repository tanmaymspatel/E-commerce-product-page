import { useState } from "react";

import close from '../../assets/images/icon-close.svg'

function LightBox({
    ProductImages,
    leftArrow,
    rightArrow,
    setShoeLightbox
}: any) {

    const [prodIndex, setProdIndex] = useState(0);
    const { image } = ProductImages[prodIndex];

    const prevSlide = () => {
        setProdIndex(prev => prev > 0 ? prev - 1 : 3)
    }

    const nextslide = () => {
        setProdIndex(prev => prev < 3 ? prev + 1 : 0)
    }
    return (
        <>
            <div className="cursor-pointer back-drop h-100 d-flex align-items-center justify-content-center"
                onClick={() => setShoeLightbox(false)}>
                <div className="model-content">
                    <figure className='position-relative'>
                        <img src={image} alt="product-1" className='product-image' />
                        <img src={leftArrow} alt="left-slide-arrow" className='position-absolute slider-arrow cursor-pointer left-arrow'
                            onClick={() => prevSlide()}
                        />
                        <img src={rightArrow} alt="right-slide-arrow" className='position-absolute slider-arrow cursor-pointer right-arrow'
                            onClick={() => nextslide()}
                        />
                        <img src={close} alt="close-btn" className="cursor-pointer lightbox-close position-absolute" onClick={() => setShoeLightbox(false)} />
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
