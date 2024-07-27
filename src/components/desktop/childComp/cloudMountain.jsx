import mountain from "../../../assets/img/cloudAndMountain/a8abd8ef7a9fd6351663d4cfc4a2cad2.png"
import cloud_A from "../../../assets/img/cloudAndMountain/8a7b321b7b2711931456e9dcf3b56943.png"
import cloud_B from "../../../assets/img/cloudAndMountain/b723758d622f363d49561fc98ed19a73.png"
import cloud_C from "../../../assets/img/cloudAndMountain/306fe97d92a3898424e942c6855acdcd.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export const CloudAndMountain = () => {
    const cloud1Ref = useRef(null)
    const cloud2Ref = useRef(null)
    const cloud3Ref = useRef(null)
    const cloud4Ref = useRef(null)
    const cloud5Ref = useRef(null)

    useEffect(() => {
        const cloud1 = cloud1Ref.current
        const cloud2 = cloud2Ref.current
        const cloud3 = cloud3Ref.current
        const cloud4 = cloud4Ref.current
        const cloud5 = cloud5Ref.current

        gsap.to(cloud1, {
            y: 170,
            x: -150,
            duration: 1
        })
        gsap.to(cloud2, {
            x: -20,
            y: -20,
            duration: 1,
        })
        gsap.to(cloud3, {
            y: 60,
            x: 20,
            duration: 1
        })
        gsap.to(cloud4, {
            y: 230,
            x: -30,
            duration: 1,
        })
        gsap.to(cloud5, {
            y: -30,
            x: 260,
            duration: 1
        })

    }, [])

    return (
        <div className="cloudAndMountains">
            <div className="cloudSection">
                <img src={cloud_A} ref={cloud1Ref} alt="" className="cloudASection" />
                <img src={cloud_B} ref={cloud2Ref} alt="" className="cloudBSection" />
                <img src={cloud_C} ref={cloud3Ref} alt="" className="cloudCSection" />
                <img src={cloud_B} ref={cloud4Ref} alt="" className="cloudBSection opacityCould" />
                <img src={cloud_C} ref={cloud5Ref} alt="" className="cloudCSection" />
                <img src={mountain} alt="" className="mountainSection" />
            </div>
        </div>
    )
}