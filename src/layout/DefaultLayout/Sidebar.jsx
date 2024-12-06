import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/image/logo.png";
import house from "../../assets/image/House.svg";
import userListBlack from "../../assets/image/UserListBlack.svg";
import chartBar from "../../assets/image/ChartBar.svg";
import clipboardText from "../../assets/image/ClipboardText.svg";
import gridFour from "../../assets/image/GridFour.svg";
import caretDown from "../../assets/image/CaretDown.svg";
import checkSquareOffset from "../../assets/image/CheckSquareOffset.svg";
import usersThree from "../../assets/image/UsersThree.svg";
import chatsCircle from "../../assets/image/ChatsCircle.svg";

const Sidebar = () => {
  return (
    <div className="sidebar spacing-md d-flex flex-column align-items-center gap-2">
        <div className="mb-4">
            <img src={logo} alt="logo"/>
        </div>
        <ul className="nav flex-column gap-2">
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/"><img src={house}/>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/providers"><img src={userListBlack}/>Providers</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/provider-network-health"><img src={chartBar}/>Provider Network Health</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/risk-targeting-rules"><img src={clipboardText}/>Risk Targeting Rules</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/provider-management"><img src={gridFour}/>Provider Management<img
                        src={caretDown} /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/project-tracking"><img src={checkSquareOffset}/>Project Tracking</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/community"><img src={usersThree}/>Community</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-primary fs-subtitle-2 spacing-x-sm spacing-y-xs" to="/chat"><img src={chatsCircle}/>Chat</NavLink>
            </li>
        </ul>
    </div>
  )
};

export default Sidebar;
