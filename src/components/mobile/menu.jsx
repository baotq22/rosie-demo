import xIcon from '../../assets/svg/x.svg'
import useStore from "../../store/index.js"
import logo from '../../assets/img/2f6c863f75f4d6d1664c77b3e90d144e.png'

export const MenuMobile = () => {
    const { isShow, setIsShow } = useStore()
    return (
        <>
            <div className="menu-mobile" style={!isShow ? { display: 'none' } : { display: 'block' }}>
                <div className="gradient-mobile">
                    <div className="inside-mobile">
                        <div className="selection-mobile">
                            <img src={logo} alt="logo" className="logo-mobile" />
                            <div className="itemsSection-mobile">
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Tours</p>
                                <p>Activity</p>
                                <p>Destination</p>
                                <p>Blog</p>
                                <p>FAQ</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="close-mobile" onClick={() => setIsShow(false)}>
                            <img src={xIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}