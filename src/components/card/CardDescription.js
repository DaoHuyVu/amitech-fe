import Scroller from "../scroller/Scroller";

export default function CardDescription({className='',style,children}){
    return (
        <Scroller className={`card-content__description ${className}`} style={style}>
            {children}
        </Scroller>
        
    )
}