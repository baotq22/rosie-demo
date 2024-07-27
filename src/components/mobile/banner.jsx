import map1 from '../../assets/img/map/map1.png'
import map2 from '../../assets/img/map/mapSolid.png'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import {SlideshowMobile, SSZoomed} from '../../components'

//import react
//import 3rd party library
//import components
//import image
//import scss or css

//avoid export default

const images = [
    map1, map2
]

export const BannerMobile = () => {
    const imageRef = useRef(null)
    const slideshowRef = useRef(null)

    useEffect(() => {
        gsap.timeline()
            .to(imageRef.current, {
                y: 70,
                duration: 3,
            })
            .to(imageRef.current, {
                y: 120,
                x: 40,
                scale: 6,
                duration: 4.5,
                ease: 'power3.in',
            })

        gsap.timeline()
            .to(slideshowRef.current, {
                duration: 0.1,
                opacity: 0,
            })
            .to(slideshowRef.current, {
                duration: 6,
                opacity: 1,
                y: 20,
                scale: 2,
                ease: 'power3.in',
            })
    }, [])
    return (
        <div className="background-mobile">
            <div className="outside-mobile">
                <div ref={imageRef} className="slideshow-mobile">
                    <SlideshowMobile images={images} interval={3000} />
                </div>
                <div ref={slideshowRef} className="slideshow-mobile-zoom">
                    <SSZoomed />
                </div>
            </div>
        </div>
    )
}