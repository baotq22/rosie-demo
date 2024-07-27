import mountainMobile from '../../assets/svg/mountain.svg';
import logoCombine from '../../assets/svg/logo.svg';
import bike from '../../assets/svg/bike.svg';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export const DescriptionMobile = () => {
    const bikeRef = useRef(null);
    const circleRefs = useRef([]);

    useEffect(() => {
        const bike = bikeRef.current;

        const handleClick = () => {
            const timelineBike = gsap.timeline();
            timelineBike
                .to(bike, {
                    x: 120,
                    duration: 1,
                })
                .to(bike, {
                    x: 240,
                    y: 8,
                    duration: 1,
                })
                .to(bike, {
                    x: 390,
                    y: 12,
                    duration: 1,
                })
                .to(bike, {
                    x: 450,
                    y: 12,
                    duration: 1,
                });
        };

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

        if (bike) {
            bike.addEventListener('mousedown', handleClick);
        }

        circleRefs.current.forEach(circle => {
            if (circle) {
                circle.addEventListener('mouseenter', handleMouseEnter);
                circle.addEventListener('mouseleave', handleMouseLeave);
            }
        });

        return () => {
            if (bike) {
                bike.removeEventListener('mousedown', handleClick);
            }

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
            <div className="desc-mobile">
                <img src={mountainMobile} alt="" className="mountain-mobile" />
                <img src={bike} ref={bikeRef} alt="" className="bike-mobile" />
                <div className="logoAndText-mobile">
                    <img src={logoCombine} alt="" className="logo" />
                    <div className="textCon" style={{ marginTop: "4rem" }}>
                        <p>Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature.</p>
                    </div>
                </div>
                <div className="descCircle-mobile">
                    {['13 years experience', 'Personalization', 'Tour guide with good English', '10,000 customers', 'Unique Experiences'].map((text, index) => (
                        <div className="circleCon" key={index}>
                            <div className="circleBreakLine" ref={el => circleRefs.current[index] = el}>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
