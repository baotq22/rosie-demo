import {ExploreCard} from "../../components"

export const ExploreMobile = () => {
    return (
        <>
            <div className="explore-mobile">
                <div className="smallTitleCon">
                    <span className="textTitle">explore</span>
                </div>
                <div className="titleCon">
                    <span className="textTitle">BEST TRIPS FOR YOU</span>
                </div>
                <div className="featured">
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </div>
            </div>
        </>
    )
}