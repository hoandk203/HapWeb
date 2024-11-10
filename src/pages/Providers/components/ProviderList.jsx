import CaretLeft from "../../../assets/image/CaretLeft.svg";
import CaretRight from "../../../assets/image/CaretRight.svg";
import Export from "../../../assets/image/Export.svg";
import ProviderListTable from "./ProviderListTable";

const ProviderList = () => {
    return (
        <div className="analytics-card d-flex flex-column gap-3 border rounded-4">
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="py-2">
                        <h3 className="fs-5 fw-semibold mb-0">Providers</h3>
                    </div>
                    <div className="me-auto fs-14 align-content-center">Found 80 Results</div>
                    <div className="col-2">
                        <select className="form-select">
                            <option>Sort by</option>
                        </select>
                    </div>
                    <div><button className="btn border fw-semibold"><img src={Export}/> Export</button></div>
                </div>

                <ProviderListTable/>
                
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <select className="form-select me-2 rounded-3" style={{width: "70px"}}>
                            <option>10</option>
                        </select>
                        <span className="text-muted fs-14">1 - 10 of 80 Results</span>
                    </div>
                    <div>
                        <ul className="pagination mb-0 d-flex gap-2">
                            <li className="page-item"><a className="page-link" href="#"><img src={CaretLeft}/></a></li>
                            <li className="page-item"><a className="page-link selected" href="">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#"><img src={CaretRight}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default ProviderList;