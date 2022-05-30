import './NavPan.css';
import LogoBar from "../Logo_bar/Logo_bar";
import LoginBox from "../Login_box/Login_box";
import NavBox from "../Nav_box/Nav_box";

function NavPan(){
    return(
        <div className="nav">
            <LogoBar />
            <LoginBox />
            <NavBox />
        </div>
    );
}

export default NavPan;