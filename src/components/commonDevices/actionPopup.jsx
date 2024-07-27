import call from "../../assets/svg/popupbottom/call.svg"
import up from "../../assets/svg/popupbottom/up.svg"

export const ActionPopup = () => {
    return (
        <>
            <div className="actionCon">
                <div className="actionPopup">
                    <div className="bookNow">
                        <p>book now</p>
                    </div>
                    <div className="call">
                        <img src={call} alt="" />
                    </div>
                    <div className="up">
                        <img src={up} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}