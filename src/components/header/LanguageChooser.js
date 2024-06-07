import { useState } from "react"

export default function LanguageChooser(){
    const activeLanguageStyle = {
        color : '#00C2FF'
    }
    const inactiveLanguageStyle = {
        color : '#FFFFFFCC'
    }
    return (
       <span className="language-chooser">
            <a href="/VN" style={activeLanguageStyle} className="language-item__link">
                <p>VN</p>
            </a>
            <p>-</p>
            <a href="EN" style={inactiveLanguageStyle} className="language-item__link">
                <p>EN</p>
            </a>
       </span>
    )
}