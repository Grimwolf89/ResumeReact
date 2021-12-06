import "./topbar.scss";
import {Person, Mail} from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active" )} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        genius.
                    </a>   
                    <div className="itemContainer">
                        <Person/>
                        <span>+2764 9057825</span>
                    </div>
                    <div className="itemContainer">
                        <Mail/>
                        <span>shaunlwc@gmail.com</span>
                    </div> 
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LogoDevIcon from '@mui/icons-material/LogoDev';