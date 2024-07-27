import tick from "../../../assets/svg/tick.svg"
import arrow1 from "../../../assets/svg/arrow1.svg"
import arrow2 from "../../../assets/svg/arrow2.svg"

export const MotorbikeTourMobile = () => {
    return (
        <>
            <div className="mtbBanner-mobile">
                <div className="contentCont-mobile">
                    <div className="smallTitleCon">
                        <p className="textTitle">Start with</p>
                    </div>
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
            </div>
        </>
    )
}