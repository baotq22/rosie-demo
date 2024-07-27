import circle from '../../assets/svg/circle.svg'
import map1 from '../../assets/img/map/map1.png'
import map2 from '../../assets/img/map/map2.png'
import map3 from '../../assets/img/map/map3.png'
import { ActionPopup, Slideshow, SSZoomedD } from '../../components'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const images = [
    map1, map2, map3
]

export const Banner = () => {
    const circle1Ref = useRef(null)
    const circle2Ref = useRef(null)
    const circle3Ref = useRef(null)
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const imgConRef = useRef(null)

    useEffect(() => {
        const circle1 = circle1Ref.current
        const circle2 = circle2Ref.current
        const circle3 = circle3Ref.current
        const container = containerRef.current
        const text = textRef.current
        const imgCon = imgConRef.current

        const handleMouseEnter = () => {
            gsap.to(circle1, {
                duration: 2.5,
                y: -120
            })
            gsap.to(circle2, {
                duration: 2.5,
                x: -120
            })
            gsap.to(circle3, {
                duration: 2.5,
                x: 120
            })
            gsap.to(text, {
                duration: 1,
                y: -700
            })
            gsap.to(imgCon, {
                duration: 1,
                y: -300,
            })
            gsap.to(imgCon, {
                scale: 2.5,
                duration: 3,
                ease: 'power3.in'
            })
        }

        const handleMouseClick = () => {
            gsap.to(circle1, {
                duration: 0.5,
                y: 0
            })
            gsap.to(circle2, {
                duration: 0.5,
                x: 0
            })
            gsap.to(circle3, {
                duration: 0.5,
                x: 0
            })
            gsap.to(text, {
                duration: 0.5,
                y: 0
            })
            gsap.to(imgCon, {
                duration: 0.5,
                y: 700,
            })
            gsap.to(imgCon, {
                scale: 1,
                duration: 0.5,
                ease: 'power3.out'
            })
        }

        if (container && imgCon) {
            container.addEventListener('mouseenter', handleMouseEnter);
            imgCon.addEventListener('mousedown', handleMouseClick);
        }

        return () => {
            if (container && imgCon) {
                container.removeEventListener('mouseenter', handleMouseEnter);
                imgCon.removeEventListener('mousedown', handleMouseClick);
            }
        };
    })

    return (
        <>
            <div className="background">
                <div className="outside" ref={containerRef}>
                    <div className="slideshow">
                        <Slideshow images={images} interval={3000} />
                    </div>
                    <div className="circles">
                        <div className="circle circle-1" ref={circle1Ref}><img src={circle} alt="" /></div>
                        <div className="circle circle-2" ref={circle2Ref}><img src={circle} alt="" /></div>
                        <div className="circle circle-3" ref={circle3Ref}><img src={circle} alt="" /></div>
                    </div>
                    <p className="miniText">Hong Hao Travel</p>
                    <div className="contents" ref={textRef}>
                        <div className="smallTitle">
                            <p>get ready</p>
                        </div>
                        <div className="bigContent">
                            <p>discover</p>
                            <p>ha giang loop</p>
                        </div>
                    </div>
                    <div className="infoContainer">
                        <div className="informations">
                            <div className="details">
                                <p className="title">Days</p>
                                <p className="time">5 days 4 night</p>
                            </div>
                            <div className="details">
                                <p className="title">Type Of Tour</p>
                                <p className="time">Best Budget</p>
                            </div>
                            <div className="details">
                                <p className="title">Self Driving</p>
                                <p className="time">5 pax</p>
                            </div>
                            <div className="details">
                                <p className="title">Private Driving</p>
                                <p className="time">5 pax</p>
                            </div>
                            <div className="btnContainer">
                                <div className="bookBtn">
                                    <p>$299</p>
                                    <p>Book Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slideshow-zoom" ref={imgConRef}>
                        <SSZoomedD />
                    </div>
                    <ActionPopup />
                </div>
            </div>

        </>
    )
}