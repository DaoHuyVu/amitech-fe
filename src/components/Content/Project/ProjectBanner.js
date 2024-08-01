import Banner from "../../common/BannerWrapper"
import { getNavigationImageCover } from "../../../services/util"
export default function ProjectBanner({navigation}){
    return(
        <Banner 
            imgSrc={getNavigationImageCover(navigation)}
            title={navigation.name}
            description={navigation.description}
        />
    )
}