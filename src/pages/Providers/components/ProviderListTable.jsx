import DotsThreeVertical from "../../../assets/image/DotsThreeVertical.svg";
import India from "../../../assets/image/india.svg";
import UserList1 from "../../../assets/image/userList1.svg";
import ChatCircle from "../../../assets/image/ChatCircle.svg";
import WarningCircle from "../../../assets/image/WarningCircle.svg";

const mockData = Array(80).fill(null).map((_, index) => ({
    id: index + 1,
    name: "Cameron Williamson",
    gender: "Female",
    type: "Social",
    providerType: "Auditor",
    industry: "Textile",
    location: "India",
    date: "July 17, 2024"
}));

const ProviderListTable = ({ currentPage, itemsPerPage }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div className="table-responsive">
                <div className="overflow-hidden radius-xl border">
                    <table className="table providers-table m-0">
                        <thead>
                            <tr className="align-middle">
                                <th className="bg-neutral-50"></th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Provider</th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Gender</th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Type</th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Provider Type</th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Industry</th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Location</th>
                                <th className="fs-caption-subtitle text-secondary bg-neutral-50">Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item) => (
                                <tr key={item.id} className="align-middle">
                                    <td className="spacing-sm text-center">
                                        <input className="form-check-input w-16px h-16px m-0" type="checkbox"/>
                                    </td>
                                    <td className="spacing-sm text-primary">
                                        <div className="d-flex align-items-center gap-2">
                                            <img src={UserList1} className="avatar" alt="Provider"/>
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="spacing-sm text-primary">{item.gender}</td>
                                    <td className="spacing-sm text-primary">{item.type}</td>
                                    <td className="spacing-sm text-primary">{item.providerType}</td>
                                    <td className="spacing-sm text-primary">{item.industry}</td>
                                    <td className="spacing-sm text-primary">
                                        <div className="d-flex align-items-center">
                                            <img src={India} className="flag-icon me-2" alt="Flag"/>
                                            <span>{item.location}</span>
                                        </div>
                                    </td>
                                    <td className="spacing-sm text-primary">{item.date}</td>
                                    <td className="spacing-sm text-end">
                                        <button data-bs-toggle="dropdown" className="btn btn-sm btn-link">
                                            <img src={DotsThreeVertical} alt="Three Dots Vertical"/>
                                        </button>
                                        <div className="three-dots-dropdown dropdown-menu spacing-xss radius-lg" onClick={e => e.stopPropagation()}>
                                            <button type="button" className="dropdown-item text-dark spacing-y-xs" data-bs-toggle="modal" data-bs-target="#messageModal">
                                                <img src={ChatCircle} /> Message
                                            </button>
                                            <button className="dropdown-item text-dark spacing-y-xs">
                                                <img src={WarningCircle} /> Flag
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProviderListTable;