import userAvatar from "../../assets/image/userAvatar.svg";
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    let pathname= location.pathname.split("/")[1];
    pathname= pathname.split("-");
    pathname = pathname.map((item)=>{
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    pathname = pathname.join(" ");
    
  return (
    <div className="header d-flex justify-content-between align-items-center border-bottom">
        <h4 className="mb-0 fs-4 fw-semibold">{pathname?pathname:"Home"}</h4>
        <div className="d-flex gap-2 ">
            <div className=""><img src={userAvatar} /></div>
        </div>
    </div>
  )
};

export default Header;
