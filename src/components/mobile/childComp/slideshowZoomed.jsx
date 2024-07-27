import { useEffect, useState } from "react";
import img1 from '../../../assets/img/imgZoomMobile/1.jpg'
import img2 from '../../../assets/img/imgZoomMobile/2.png'
import img3 from '../../../assets/img/imgZoomMobile/3.jpg'
import img4 from '../../../assets/img/imgZoomMobile/4.jpg'
import img5 from '../../../assets/img/imgZoomMobile/5.jpg'

const images = [img1, img2, img3, img4, img5]

export const SSZoomed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === images.length - 1) {
                    clearInterval(timer);
                    return prevIndex;
                }
                return prevIndex + 1;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length, 5000]);
    return (
        <>
            <div className="slideshow-container-zoom">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide-zoom ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={image} alt={`Slide ${index}`} className="img-zoom"/>
                    </div>
                ))}
            </div>
        </>
    )
}