import Banner from "../../common/BannerWrapper";
import { getImageCover } from "../../../services/util";
export default function SolutionBanner({navigation}){
    return(
        <Banner 
            imgSrc={getImageCover(navigation)}
            title={navigation.name}
            description={navigation.description}
        />
    )
}