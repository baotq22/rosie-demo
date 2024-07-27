import xIcon from '../../assets/svg/x.svg'
import useStore from "../../store/index.js"
import logo from '../../assets/img/2f6c863f75f4d6d1664c77b3e90d144e.png'

export const Menu = () => {
    const { isShow, setIsShow } = useStore()
    return (
        <>
            <div className="menu" style={!isShow ? { display: 'none' } : { display: 'block' }}>
                <div className="gradient">
                    <div className="inside">
                        <div className="selection">
                            <img src={logo} alt="logo" className="logo" />
                            <div className="itemsSection">
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
                        <div className="image">
                            <div className="close" onClick={() => setIsShow(false)}>
                                <img src={xIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}