import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>   
                </div>
                <div className="itemContainer">
                    <Person/>
                    <span>+2764 9057825</span>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LogoDevIcon from '@mui/icons-material/LogoDev';