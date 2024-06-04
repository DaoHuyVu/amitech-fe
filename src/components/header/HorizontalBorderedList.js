export default function HorizontalBorderedList({children}){
    return(
        <span className="contact-list-container">
            <ul className="contact-list">
                {children}
            </ul>
        </span>
    )
}