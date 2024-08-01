import Banner from "../../common/BannerWrapper"
import { getImageCover } from "../../../services/util"
export default function ProjectBanner({navigation}){
    return(
        <Banner 
            imgSrc={getImageCover(navigation)}
            title={navigation.name}
            description={navigation.description}
        />
    )
}