import { useState } from "react"
export default function LanguageChooser({style}){
    const activeLanguageStyle = {
        color : '#00C2FF'
    }
    return (
       <span className="language-chooser" style={style}>
            <a href="/VN" style={activeLanguageStyle} className="language-item__link">
                <p>VN</p>
            </a>
            <p>-</p>
            <a href="/EN" style={style} className="language-item__link">
                <p>EN</p>
            </a>
            <p>|</p>
       </span>
    )
}