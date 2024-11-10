import { useRef } from "react";

import UserList1 from "../../../assets/image/userList1.svg";
import CornersOut from "../../../assets/image/CornersOut.svg";
import PaperPlaneTilt from "../../../assets/image/PaperPlaneTilt.svg";

const MessageModal = () => {
    const modalRef = useRef(null);
    return (
        <div className="modal fade" id="messageModal" aria-labelledby="messageModalLabel" aria-hidden="true">
            <div ref={modalRef} className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <img src={UserList1} className="avatar" alt="Provider"/>
                        <span>Cameron Williamson</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <button onClick={() => modalRef.current.classList.toggle("modal-fullscreen")} type="button" className="btn"><img src={CornersOut}/></button>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer d-flex justify-content-between align-items-center gap-1">
                    <input type="text" className="form-control w-auto flex-grow-1" placeholder="Enter your message" />
                    <button className="btn bg-surface-primary text-white d-flex align-items-center gap-2"><img src={PaperPlaneTilt} /><span>Send</span></button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MessageModal;