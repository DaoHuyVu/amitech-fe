import Card from "./Card";
import './card.css'
export default function TitleCard({title,style,src,cardStyle}){
    return(
        <Card src={src} style={cardStyle}>
            <p style={style} className="card__title">{title}</p>
        </Card>
    )
}