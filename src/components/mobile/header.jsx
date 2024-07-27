import logo from '../../assets/img/2f6c863f75f4d6d1664c77b3e90d144e.png'
import menuSVG from '../../assets/svg/menu.svg'
import useStore from "../../store/index.js"

export const HeaderMobile = () => {
    const { setIsShow } = useStore()

    return (
        <>
            <div className="navbar-mobile">
                <div className="container-mobile">
                    <img src={logo} alt="logo" className="logo-mobile" />
                    <div className="btnMenu-mobile" onClick={() => setIsShow(true)}>
                        <img src={menuSVG} alt="" />
                        <span>MENU</span>
                    </div>
                </div>
            </div>
        </>
    )
}