import mountain from '../../assets/svg/mountain.svg'
import logoCombine from '../../assets/svg/logo.svg'
import more from '../../assets/svg/more.svg'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Description = () => {
    const circleRefs = useRef([]);

    useEffect(() => {
        const handleMouseEnter = (event) => {
            gsap.to(event.currentTarget, {
                backgroundColor: '#da4b19',
                scale: 1.2,
                duration: 0.3,
            });
        };

        const handleMouseLeave = (event) => {
            gsap.to(event.currentTarget, {
                backgroundColor: '',
                scale: 1,
                duration: 0.3,
            });
        };

        circleRefs.current.forEach(circle => {
            if (circle) {
                circle.addEventListener('mouseenter', handleMouseEnter);
                circle.addEventListener('mouseleave', handleMouseLeave);
            }
        });

        return () => {
            circleRefs.current.forEach(circle => {
                if (circle) {
                    circle.removeEventListener('mouseenter', handleMouseEnter);
                    circle.removeEventListener('mouseleave', handleMouseLeave);
                }
            });
        };
    }, []);

    return (
        <>
            <div className="desc">
                <img src={mountain} alt="" className="mountain" />
                <div className="logoAndText">
                    <img src={logoCombine} alt="" />
                </div>
                <div className="textCon">
                    <p>Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature.</p>
                </div>
                <div className="descCircle">
                    {['13 years experience', 'Personalization', 'Tour guide with good English', '10,000 customers', 'Unique Experiences'].map((text, index) => (
                        <div className="circleCon" key={index}>
                            <div className="circleBreakLine" ref={el => circleRefs.current[index] = el}>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="moreTitle">
                    <span>explore your journey with us</span>
                    <img src={more} alt="" />
                </div>
            </div>
        </>
    )
}