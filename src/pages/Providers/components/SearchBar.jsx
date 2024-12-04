import MagnifyingGlass from "../../../assets/image/MagnifyingGlass.svg";
import MagnifyingGlassWhite from "../../../assets/image/MagnifyingGlassWhite.svg";
import MapPin from "../../../assets/image/MapPin.svg";
import CaretDown from "../../../assets/image/CaretDown.svg";
const SearchBar = ({showAdvancedSearch, setShowAdvancedSearch}) => {
    return (
        <div className="search-bar d-flex flex-column gap-3 border bg-neutral-0 spacing-md radius-xl">
                <div className="d-flex gap-1">
                    <div className="position-relative col">
                        <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 spacing-xs">
                            <img src={MagnifyingGlass}/>
                        </button>
                        <input type="search" className="form-control search-input radius-lg" placeholder="Search"/>
                    </div>
                    <div style={{ width: "194px" }} className="position-relative">
                        <button type="button"
                            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                            className="btn radius-lg border fw-semibold d-flex align-items-center gap-2 float-end"><img
                            src={MagnifyingGlass}/>Advanced Search</button>
                    </div>
                </div>
                <div className="row justify-content-between gy-3">
                    <div style={{ minWidth: "382px" }} className="col-5 d-flex p-0">
                        <div className="col spacing-x-sm border-end">
                            <button type="button"
                                    data-bs-toggle="dropdown"
                                    className="btn radius-lg border w-100 d-flex align-items-center justify-content-between">
                                <span>Type of Service</span>
                                <img src={CaretDown} />
                            </button>
                            <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                                <div className="position-relative spacing-x-md">
                                    <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 spacing-xs">
                                        <img src={MagnifyingGlass}/>
                                    </button>
                                    <input type="search" className="form-control search-input radius-lg" placeholder="Search"/>
                                </div>
                                <div className="d-flex flex-column gap-2 spacing-x-md spacing-y-xs">
                                    <div className="d-flex gap-2">
                                        <input id="type1" className="form-check-input spacing-x-xs spacing-y-xs" type="checkbox"/>
                                        <label htmlFor="type1" className="form-check-label">Type 1</label>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <input id="type2" className="form-check-input spacing-x-xs spacing-y-xs" type="checkbox"/>
                                        <label htmlFor="type2" className="form-check-label">Type 2</label>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <input id="type3" className="form-check-input spacing-x-xs spacing-y-xs" type="checkbox"/>
                                        <label htmlFor="type3" className="form-check-label">Type 3</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col spacing-x-sm border-end border-end-lg-0">
                            <button type="button"
                                    className="btn radius-lg border w-100 d-flex align-items-center justify-content-between">
                                <span>Type of Provider</span>
                                <img src={CaretDown} />
                            </button>
                        </div>
                    </div>
                    <div className="col d-flex gap-2">
                        <div className="col">
                            <button type="button"
                                    style={{minWidth: "140px"}}
                                    className="btn radius-lg border w-100 d-flex align-items-center justify-content-between"><span>Country</span><img src={MapPin} /></button>
                        </div>
                        <div className="col">
                            <button type="button"
                                    style={{minWidth: "140px"}}
                                    className="btn radius-lg border w-100 d-flex align-items-center justify-content-between"><span>State</span><img src={MapPin} /></button>
                        </div>
                        <div className="col">
                            <button type="button"
                                    style={{minWidth: "140px"}}
                                    className="btn radius-lg border w-100 d-flex align-items-center justify-content-between"><span>City</span><img src={MapPin} /></button>
                        </div>
                        <div style={{ width: "38px" }} className="">
                            <button className="btn w-100 bg-brand-600 d-flex align-items-center justify-content-center h-100 float-end radius-lg"><img
                                    src={MagnifyingGlassWhite}/></button>
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default SearchBar;
