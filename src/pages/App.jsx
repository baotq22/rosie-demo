import { useEffect } from 'react';
import { Menu, Banner, Description, Other, MenuMobile, BannerMobile, DescriptionMobile, OtherMobile, ExploreMobile } from "../components"
import '../scss/home.scss';
import '../scss/home-mobile.scss';
import useStore from '../store/index'

export default function App() {
  const { isShow, width, setWidth } = useStore()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {width >= 576 &&
        <>
          <Menu />
          <div className="home" style={isShow ? { filter: 'brightness(80%)' } : {}}>
            <Banner />
            <Description />
            <Other />
          </div>
        </>
      }
      {width < 576 &&
        <>
          <MenuMobile />
          <div className="home-mobile" style={isShow ? { filter: 'brightness(80%)' } : {}}>
            <BannerMobile />
            <DescriptionMobile />
            <OtherMobile />
            <ExploreMobile />
          </div>
        </>
      }
    </>
  );
}
