import Card from "./Card";
import './card.css'
export default function TitleImageCard({title,style,src}){
    return(
        <Card style = {style} src={src} className='title-image-card'>
            <p className="card__title">{title}</p>
        </Card>
    )
}