import beautifulText from "../../../assets/svg/BeautifulMobile.svg"
import backGrd from "../../../assets/img/0b8edecaf86b4c6abdbf6db2acac0aed.jpg"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";

export const WelcomeMobile = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null);
    const beautifulRef = useRef(null);
    const [isZoomed, setIsZoomed] = useState(false)

    useEffect(() => {
        const img = imageRef.current;
        const title = titleRef.current;
        const text = textRef.current;
        const beautiful = beautifulRef.current;

        const handleClick = () => {
            if (isZoomed) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power3.out'
                });
                gsap.to(text, {
                    duration: 2.5,
                    y: 0
                });
                gsap.to(title, {
                    duration: 2.5,
                    y: 0
                });
                gsap.to(beautiful, {
                    duration: 1.5,
                    scale: 1,
                    ease: 'power3.in',
                    y: 0
                });
            } else {
                gsap.to(img, {
                    scale: 4,
                    transformOrigin: 'bottom',
                    duration: 0.5,
                    ease: 'power3.in'
                });
                gsap.to(text, {
                    duration: 2.5,
                    y: 20
                });
                gsap.to(title, {
                    duration: 2.5,
                    y: 20
                });
                gsap.to(beautiful, {
                    duration: 1.5,
                    scale: 0.7,
                    ease: 'power3.out',
                    y: 15
                });
            }
            setIsZoomed(!isZoomed);
        };

        img.addEventListener('click', handleClick);

        return () => {
            img.removeEventListener('click', handleClick);
        };
    }, [isZoomed]);
    return (
        <>
            <div className="welcomeCon-mobile">
                <div className="hoverBackgroundCont-mobile">
                    <div className="title">
                        <div ref={titleRef} className="moreTitle-mobile">
                            <p>welcome to</p>
                        </div>
                        <div ref={textRef} className="titleCon-mobile">
                            <span className="textTitle">ha giang naturally</span>
                        </div>
                        <div ref={beautifulRef} className="textDecor-mobile">
                            <img src={beautifulText} alt="" />
                        </div>
                    </div>
                    <div className="hoverBackground-mobile">
                        <img ref={imageRef} src={backGrd} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}