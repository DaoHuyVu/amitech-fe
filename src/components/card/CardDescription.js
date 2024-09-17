import Scroller from "../scroller/Scroller";

export default function CardDescription({className='',style,children,coverRemain='true'}){
    //Whether card description should occupy the rest of the card content
    const flexGrow = coverRemain === 'true' ? {flexGrow : '1'} : {}
    return (
        <Scroller className={`card-content__description ${className}`} style={{...style,...flexGrow}}>
            {children}
        </Scroller>
    )
}