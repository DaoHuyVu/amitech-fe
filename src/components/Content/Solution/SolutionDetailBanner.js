import Banner from "../../common/BannerWrapper";
import { getNavigationIdImageCover } from "../../../services/util";
export default function SolutionBanner({navigation}){
    return(
        <Banner 
            imgSrc={getNavigationIdImageCover(navigation)}
            title={navigation.attributes.name}
            description={navigation.attributes.description}
        />
    )
}