import './hero-image.css'
export default function HeroImage({children,style,src,bg}){
    const bgStyle = {
        backgroundImage : `url("${src}")`,
        backgroundColor : bg
    }
    return(
        <div className="hero-image" style = {{...bgStyle,...style}}>
            {children}
        </div>
    )
}