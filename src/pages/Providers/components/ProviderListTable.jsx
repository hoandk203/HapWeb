
import India from "../../../assets/image/india.svg";
import UserList1 from "../../../assets/image/userList1.svg";

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
                                    <div className="d-flex align-items-center">
                                        <img src={UserList1} className="avatar me-2" alt="Provider"/>
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
                                    <button className="btn btn-sm btn-link"><i
                                            className="bi bi-three-dots-vertical text-muted"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={UserList1} className="avatar me-2" alt="Provider"/>
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
                                    <button className="btn btn-sm btn-link t"><i
                                            className="bi bi-three-dots-vertical text-muted"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={UserList1} className="avatar me-2" alt="Provider"/>
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
                                    <button className="btn btn-sm btn-link"><i
                                            className="bi bi-three-dots-vertical text-muted"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={UserList1} className="avatar me-2" alt="Provider"/>
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
                                    <button className="btn btn-sm btn-link"><i
                                            className="bi bi-three-dots-vertical text-muted"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center"><input className="form-check-input px-2 py-2" type="checkbox"/>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={UserList1} className="avatar me-2" alt="Provider"/>
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
                                    <button className="btn btn-sm btn-link"><i
                                            className="bi bi-three-dots-vertical text-muted"></i></button>
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