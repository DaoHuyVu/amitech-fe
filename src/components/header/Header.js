import './header.css'
import HeaderMain from './HeaderMain'
import HeaderTop from './HeaderTop'
export default function Header(){
    return(
        <header id="header">
            <HeaderTop/>
            <HeaderMain/>
        </header>
    )
}