import DotsThreeVertical from "../../../assets/image/DotsThreeVertical.svg";
import India from "../../../assets/image/india.svg";
import UserList1 from "../../../assets/image/userList1.svg";
import ChatCircle from "../../../assets/image/ChatCircle.svg";
import WarningCircle from "../../../assets/image/WarningCircle.svg";

const ProviderListTable = () => {
    return (
        <>
            <div className="table-responsive">
                
                <div className="overflow-hidden rounded-4 border">
                    <table className="table providers-table m-0">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Provider</th>
                                <th>Gender</th>
                                <th>Type</th>
                                <th>Provider Type</th>
                                <th>Industry</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={UserList1} className="avatar" alt="Provider"/>
                                        <span>Cameron Williamson</span>
                                    </div>
                                </td>
                                <td>Female</td>
                                <td>Social</td>
                                <td>Auditor</td>
                                <td>Textile</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={India} className="flag-icon me-2" alt="Flag"/>
                                        <span>India</span>
                                    </div>
                                </td>
                                <td>July 17, 2024</td>
                                <td>
                                    <button data-bs-toggle="dropdown" className="btn btn-sm btn-link"><img src={DotsThreeVertical} alt="Three Dots Vertical"/></button>
                                    <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                                        <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#messageModal"><img src={ChatCircle} /> Message</button>
                                        <button className="dropdown-item"><img src={WarningCircle} /> Flag</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={UserList1} className="avatar" alt="Provider"/>
                                        <span>Cameron Williamson</span>
                                    </div>
                                </td>
                                <td>Female</td>
                                <td>Social</td>
                                <td>Auditor</td>
                                <td>Textile</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={India} className="flag-icon me-2" alt="Flag"/>
                                        <span>India</span>
                                    </div>
                                </td>
                                <td>July 17, 2024</td>
                                <td>
                                    <button data-bs-toggle="dropdown" className="btn btn-sm btn-link"><img src={DotsThreeVertical} alt="Three Dots Vertical"/></button>
                                    <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                                        <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#messageModal"><img src={ChatCircle} /> Message</button>
                                        <button className="dropdown-item"><img src={WarningCircle} /> Flag</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={UserList1} className="avatar" alt="Provider"/>
                                        <span>Cameron Williamson</span>
                                    </div>
                                </td>
                                <td>Female</td>
                                <td>Social</td>
                                <td>Auditor</td>
                                <td>Textile</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={India} className="flag-icon me-2" alt="Flag"/>
                                        <span>India</span>
                                    </div>
                                </td>
                                <td>July 17, 2024</td>
                                <td>
                                    <button data-bs-toggle="dropdown" className="btn btn-sm btn-link"><img src={DotsThreeVertical} alt="Three Dots Vertical"/></button>
                                    <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                                        <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#messageModal"><img src={ChatCircle} /> Message</button>
                                        <button className="dropdown-item"><img src={WarningCircle} /> Flag</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={UserList1} className="avatar" alt="Provider"/>
                                        <span>Cameron Williamson</span>
                                    </div>
                                </td>
                                <td>Female</td>
                                <td>Social</td>
                                <td>Auditor</td>
                                <td>Textile</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={India} className="flag-icon me-2" alt="Flag"/>
                                        <span>India</span>
                                    </div>
                                </td>
                                <td>July 17, 2024</td>
                                <td>
                                    <button data-bs-toggle="dropdown" className="btn btn-sm btn-link"><img src={DotsThreeVertical} alt="Three Dots Vertical"/></button>
                                    <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                                        <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#messageModal"><img src={ChatCircle} /> Message</button>
                                        <button className="dropdown-item"><img src={WarningCircle} /> Flag</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={UserList1} className="avatar" alt="Provider"/>
                                        <span>Cameron Williamson</span>
                                    </div>
                                </td>
                                <td>Female</td>
                                <td>Social</td>
                                <td>Auditor</td>
                                <td>Textile</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={India} className="flag-icon me-2" alt="Flag"/>
                                        <span>India</span>
                                    </div>
                                </td>
                                <td>July 17, 2024</td>
                                <td>
                                    <button data-bs-toggle="dropdown" className="btn btn-sm btn-link"><img src={DotsThreeVertical} alt="Three Dots Vertical"/></button>
                                    <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                                        <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#messageModal"><img src={ChatCircle} /> Message</button>
                                        <button className="dropdown-item"><img src={WarningCircle} /> Flag</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProviderListTable;