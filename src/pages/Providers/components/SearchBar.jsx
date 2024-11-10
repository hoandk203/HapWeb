import MagnifyingGlass from "../../../assets/image/MagnifyingGlass.svg";
import MagnifyingGlassWhite from "../../../assets/image/MagnifyingGlassWhite.svg";
import MapPin from "../../../assets/image/MapPin.svg";
import CaretDown from "../../../assets/image/CaretDown.svg";
const SearchBar = ({showAdvancedSearch, setShowAdvancedSearch}) => {
    return (
        <div className="search-bar d-flex flex-column gap-3 border bg-white p-3 rounded-4">
                <div className="d-flex gap-3">
                    <div className="position-relative col">
                        <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 p-2">
                            <img src={MagnifyingGlass}/>
                        </button>
                        <input type="search" className="form-control search-input rounded-3" placeholder="Search"/>
                    </div>
                    <div className="position-relative col-2">
                        <button type="button"
                            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                            className="btn rounded-3 border fw-semibold d-flex align-items-center gap-2"><img
                            src={MagnifyingGlass}/>Advanced Search</button>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-2">
                        <button type="button"
                                data-bs-toggle="dropdown"
                                className="btn rounded-3 border w-100 d-flex align-items-center justify-content-between"><span>Type of Service</span><img src={CaretDown} /></button>
                        <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                            <div className="position-relative px-3">
                                <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 p-2">
                                    <img src={MagnifyingGlass}/>
                                </button>
                                <input type="search" className="form-control search-input rounded-3" placeholder="Search"/>
                            </div>
                            <div className="d-flex flex-column gap-2 px-3 py-2">
                                <div className="d-flex gap-2">
                                    <input id="type1" className="form-check-input px-2 py-2" type="checkbox"/>
                                    <label htmlFor="type1" className="form-check-label">Type 1</label>
                                </div>
                                <div className="d-flex gap-2">
                                    <input id="type2" className="form-check-input px-2 py-2" type="checkbox"/>
                                    <label htmlFor="type2" className="form-check-label">Type 2</label>
                                </div>
                                <div className="d-flex gap-2">
                                    <input id="type3" className="form-check-input px-2 py-2" type="checkbox"/>
                                    <label htmlFor="type3" className="form-check-label">Type 3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <button type="button"
                                className="btn rounded-3 border w-100 d-flex align-items-center justify-content-between"><span>Type of Provider</span><img src={CaretDown} /></button>
                    </div>
                    <div className="col-2">
                        <button type="button"
                                className="btn rounded-3 border w-100 d-flex align-items-center justify-content-between"><span>Country</span><img src={MapPin} /></button>
                    </div>
                    <div className="col-2">
                        <button type="button"
                                className="btn rounded-3 border w-100 d-flex align-items-center justify-content-between"><span>State</span><img src={MapPin} /></button>
                    </div>
                    <div className="col-2">
                        <button type="button"
                                className="btn rounded-3 border w-100 d-flex align-items-center justify-content-between"><span>City</span><img src={MapPin} /></button>
                    </div>
                    <div className="col-1">
                        <button className="btn bg-surface-primary d-flex align-items-center h-100"><img
                                src={MagnifyingGlassWhite}/></button>
                    </div>
            </div>
        </div>
    )
};

export default SearchBar;
