import { useEffect, useRef, useState } from "react";
import clock from "../../../assets/svg/clock.svg";
import bus from "../../../assets/svg/card/bus.svg";
import location from "../../../assets/svg/card/location.svg";
import motorbike from "../../../assets/svg/card/motorbike.svg";
import personal from "../../../assets/svg/card/personal.svg";
import arrow1 from "../../../assets/svg/arrow1.svg";
import gsap from "gsap";

export const ExploreCard = () => {
    const contentRef = useRef(null);
    const cardRef = useRef(null);
    const buttonRef = useRef(null);
    const timeDetailsRef = useRef(null);
    const costDetailsConRef = useRef(null);
    const tripDetailsRef = useRef(null);
    const [isDisplay, setIsDisplay] = useState(false);

    useEffect(() => {
        const content = contentRef.current;
        const card = cardRef.current;
        const button = buttonRef.current;
        const timeDetails = timeDetailsRef.current;
        const costDetailsCon = costDetailsConRef.current;
        const tripDetails = tripDetailsRef.current;

        const handleClick = () => {
            if (isDisplay) {
                gsap.to(button, { autoAlpha: 0, duration: 0.5 });
                gsap.to(content, { autoAlpha: 0, duration: 0.5 });
                gsap.to(timeDetails, { autoAlpha: 1, duration: 0.5 });
            } else {
                gsap.to(button, { autoAlpha: 1, duration: 0.5 });
                gsap.to(content, { autoAlpha: 1, duration: 0.5 });
                gsap.to(timeDetails, { autoAlpha: 0, duration: 0.5 });
            }
            setIsDisplay(!isDisplay);
        };

        card.addEventListener('click', handleClick);

        return () => {
            card.removeEventListener('click', handleClick);
        };
    }, [isDisplay]);

    return (
        <div className="featuredCard" ref={cardRef}>
            <div className="fCardOverlay">
                <div className="fCardContent">
                    <div className="timeDetails" ref={timeDetailsRef}>
                        <img src={clock} alt="" />
                        <p>4 Days 5 Nights</p>
                    </div>
                    <div className="costDetailsCon" ref={costDetailsConRef}>
                        <div className="costDetails">
                            <span>$199</span>
                            <span>Self - Driving</span>
                        </div>
                        <div className="costDetails">
                            <span>$199</span>
                            <span>Local Driver</span>
                        </div>
                    </div>
                    <p className="tripDetails" ref={tripDetailsRef}>Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</p>
                    <div className="infoDetails" ref={contentRef} style={{ display: isDisplay ? "block" : "none" }}>
                        <div className="infoDetailsContent">
                            <img src={bus} alt="" />
                            <b><span>Accomodation:</span></b>
                            <span className="contents">Phòng Doom</span>
                        </div>
                        <div className="infoDetailsContent">
                            <img src={location} alt="" />
                            <b><span>Motorbike:</span></b>
                            <span className="contents">Xe Wave, Vision</span>
                        </div>
                        <div className="infoDetailsContent">
                            <img src={motorbike} alt="" />
                            <b><span>Tour guide:</span></b>
                            <span className="contents">01 local tour guide with good English</span>
                        </div>
                        <div className="infoDetailsContent">
                            <img src={personal} alt="" />
                            <b><span>Transport:</span></b>
                            <span className="contents">Xe VIP, có trung chuyển</span>
                        </div>
                    </div>
                </div>
                <div className="btnBookNow" ref={buttonRef} style={{ display: isDisplay ? "flex" : "none" }}>
                    <span>book now</span>
                    <img src={arrow1} alt="" />
                </div>
            </div>
        </div>
    );
};
