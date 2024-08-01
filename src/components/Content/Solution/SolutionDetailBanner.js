import Banner from "../../common/BannerWrapper";
import { getNavigationImageCover } from "../../../services/util";
export default function SolutionBanner({navigation}){
    return(
        <Banner 
            imgSrc={getNavigationImageCover(navigation)}
            title={navigation.name}
            description={navigation.description}
        />
    )
}