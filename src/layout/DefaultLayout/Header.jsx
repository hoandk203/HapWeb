import { useLocation } from 'react-router-dom';
import userAvatar from "../../assets/image/userAvatar.svg";
import logo from "../../assets/image/logo.png";

const Header = ({ showSidebar, setShowSidebar }) => {
    const location = useLocation();
    let pathname = location.pathname.split("/")[1];
    pathname = pathname.split("-");
    pathname = pathname.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    })
    pathname = pathname.join(" ");
    
    return (
        <div className="header position-sticky top-0 z-1001 bg-white spacing-x-md spacing-y-sm d-flex justify-content-between align-items-center border-bottom">
            <div className="d-flex align-items-center gap-3">
                <button 
                    className="d-lg-none btn border-0 p-0" 
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <img src={logo} alt="logo"/>
                </button>
                <h4 className="mb-0 fs-3 fw-semibold">{pathname || "Home"}</h4>
            </div>
            <div className="d-flex gap-2">
                <div><img src={userAvatar} /></div>
            </div>
        </div>
    )
};

export default Header;
