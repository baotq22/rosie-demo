import tick from "../../../assets/svg/tick.svg"
import arrow1 from "../../../assets/svg/arrow1.svg"
import arrow2 from "../../../assets/svg/arrow2.svg"
import { CloudAndMountain } from "../../../components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export const MotorbikeTour = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(".cloudSectionTrigger",
            {
                opacity: 1,
                ease: "power1",
                scrollTrigger: {
                    trigger: ".cloudSectionTrigger"
                }
            },
            {
                duration: 2,
                opacity: 1,
                x: -320
            }
        )
    })
    return (
        <>
            <div className="mtbBanner">
                <div className="contentCont">
                    <div className="titleCon">
                        <p className="textTitle">hong hao motorbike tour</p>
                    </div>
                    <div className="descCon">
                        <p className="textDesc">Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience. Explore remote villages.</p>
                    </div>
                    <div className="advantagesCon">
                        <div className="advContent">
                            <img src={tick} alt="" />
                            <span>Tours accommodate a maximum of 10 guests</span>
                        </div>
                        <div className="advContent">
                            <img src={tick} alt="" />
                            <span>Flexible cancellation policy</span>
                        </div>
                        <div className="advContent">
                            <img src={tick} alt="" />
                            <span>Book now, pay later</span>
                        </div>
                        <div className="advContent">
                            <img src={tick} alt="" />
                            <span>Fluent English-speaking guides</span>
                        </div>
                        <div className="advContent">
                            <img src={tick} alt="" />
                            <span>Creating job opportunities for the Vietnamese community</span>
                        </div>
                    </div>
                    <div className="btnCon">
                        <div className="btn1">
                            <span>MENU</span>
                            <img src={arrow1} alt="" />
                        </div>
                        <div className="btn2">
                            <span>MENU</span>
                            <img src={arrow2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="road"></div>
                <div className="cloudSectionTrigger">
                    <CloudAndMountain />
                </div>
            </div>
        </>
    )
}