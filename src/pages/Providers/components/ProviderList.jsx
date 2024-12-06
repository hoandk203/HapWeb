import { useState } from 'react';
import CaretLeft from "../../../assets/image/CaretLeft.svg";
import CaretRight from "../../../assets/image/CaretRight.svg";
import Export from "../../../assets/image/Export.svg";
import ProviderListTable from "./ProviderListTable";

const ProviderList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalItems = 80;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="spacing-md bg-white d-flex flex-column gap-3 border radius-xl">
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="spacing-y-xs">
                    <h4 className="fs-4 fw-semibold mb-0">Providers</h4>
                </div>
                <div className="me-auto align-content-center text-secondary">Found {totalItems} Results</div>
                <div className="col-2">
                    <select className="form-select fs-body-1 text-secondary radius-lg">
                        <option>Sort by</option>
                    </select>
                </div>
                <div><button className="btn border fs-subtitle-2 radius-lg"><img src={Export}/> Export</button></div>
            </div>

            <ProviderListTable 
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />
            
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <select 
                        className="form-select me-2 radius-lg" 
                        style={{width: "70px"}}
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                    <span className="text-secondary">
                        {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} Results
                    </span>
                </div>
                <div>
                    <ul className="pagination mb-0 d-flex gap-2">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <img src={CaretLeft} alt="Previous"/>
                            </button>
                        </li>
                        
                        {getPageNumbers().map(number => (
                            <li key={number} className="page-item">
                                <button
                                    className={`page-link ${currentPage === number ? 'bg-brand-600 text-white' : 'text-primary'}`}
                                    onClick={() => handlePageChange(number)}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button 
                                className="page-link"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <img src={CaretRight} alt="Next"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProviderList;