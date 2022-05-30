import './NavPan.css';
import LogoBar from "../Logo_bar/Logo_bar";
import NavBox from "../Nav_box/Nav_box";
import LoginBox from "../Login_box/Login_box";

function NavPan(){
    return(
        <div className="nav">
            <LogoBar />
            <NavBox />
            <LoginBox />
        </div>
    );
}

export default NavPan;