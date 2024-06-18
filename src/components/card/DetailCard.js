import Card from "./Card";
import './card.css'
export default function DetailCard({title,children,src,style}){
    return(
        <Card src={src} style={style}>
            <h5 className="card__title">{title}</h5>
            <div className="card__body">{children}</div>
            <p className="card__detail-btn">Xem chi tiết &gt;&gt;</p>
        </Card>
    )
}