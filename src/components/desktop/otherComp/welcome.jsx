import beautifulText from "../../../assets/svg/Beautiful.svg"
import backGrd from "../../../assets/img/0b8edecaf86b4c6abdbf6db2acac0aed.jpg"
import { useEffect, useRef } from "react"
import gsap from "gsap";

export const Welcome = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null);
    const beautifulRef = useRef(null);

    useEffect(() => {
        const img = imageRef.current;
        const title = titleRef.current;
        const text = textRef.current;
        const beautiful = beautifulRef.current;

        const handleMouseEnter = () => {
            gsap.to(img, {
                scale: 3,
                transformOrigin: 'bottom',
                duration: 0.5,
                ease: 'power3.in'
            })
            gsap.to(text, {
                duration: 2.5,
                y: 70
            })
            gsap.to(title, {
                duration: 2.5,
                y: 70
            })
            gsap.to(beautiful, {
                duration: 1.5,
                scale: 0.7,
                ease: 'power3.out',
                y: 60
            })
        };

        const handleMouseLeave = () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.5,
                ease: 'power3.out'
            })
            gsap.to(text, {
                duration: 2.5,
                y: 0
            })
            gsap.to(title, {
                duration: 2.5,
                y: 0
            })
            gsap.to(beautiful, {
                duration: 1.5,
                scale: 1,
                ease: 'power3.in',
                y: 0
            })
        };

        img.addEventListener('mouseenter', handleMouseEnter);
        img.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            img.removeEventListener('mouseenter', handleMouseEnter);
            img.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div className="welcomeCon">
                <div className="hoverBackgroundCont">
                    <div className="title">
                        <div ref={titleRef} className="moreTitle">
                            <p>welcome to</p>
                        </div>
                        <div ref={textRef} className="titleCon">
                            <span className="textTitle">ha giang naturally</span>
                        </div>
                        <div ref={beautifulRef} className="textDecor">
                            <img src={beautifulText} alt="" />
                        </div>
                    </div>
                    <div className="hoverBackground">
                        <img ref={imageRef} src={backGrd} alt="" className="zoomImage" />
                    </div>
                </div>
            </div>
        </>
    )
}