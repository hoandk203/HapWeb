import MagnifyingGlass from "../../../assets/image/MagnifyingGlass.svg";
import MagnifyingGlassWhite from "../../../assets/image/MagnifyingGlassWhite.svg";
import MapPin from "../../../assets/image/MapPin.svg";
import CaretDown from "../../../assets/image/CaretDown.svg";
const SearchBar = ({showAdvancedSearch, setShowAdvancedSearch}) => {
    return (
        <div className="search-bar d-flex flex-column gap-3 border bg-neutral-0 spacing-md radius-xl">
            <div className="d-flex gap-2">
                <div className="position-relative col">
                    <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 spacing-xs">
                        <img src={MagnifyingGlass}/>
                    </button>
                    <input type="search" className="form-control search-input radius-lg fs-body-1" placeholder="Search"/>
                </div>
                <div className="position-relative">
                    <button type="button"
                        onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
                        className="btn radius-lg border h-100 fs-subtitle-2 fw-medium d-flex align-items-center gap-2 float-end"><img
                        src={MagnifyingGlass}/>Advanced Search</button>
                </div>
            </div>
            <div className="row m-0" style={{ gap: "12px" }}>
                <div className="col col-xl-3 m-0 border-end spacing-0 spacing-e-sm position-relative"
                    style={{ minWidth: "190px"}}
                >
                    <button type="button"
                            data-bs-toggle="dropdown"
                            className="btn fs-body-1 text-secondary radius-lg border w-100 d-flex align-items-center justify-content-between">
                        <span>Type of Service</span>
                        <img src={CaretDown} />
                    </button>
                    <div className="dropdown-menu position-absolute start-0 end-0" style={{maxHeight: "210px", overflowY: "auto"}} onClick={e => e.stopPropagation()}>
                        <div className="position-relative spacing-x-xs">
                            <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 spacing-xs">
                                <img src={MagnifyingGlass}/>
                            </button>
                            <input type="search" className="form-control search-input radius-lg" placeholder="Search of Service"/>
                        </div>
                        <div className="d-flex flex-column spacing-x-xs">
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type1" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type1" className="form-check-label fs-subtitle-2">Type 1</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type2" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type2" className="form-check-label fs-subtitle-2">Type 2</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type3" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type3" className="form-check-label fs-subtitle-2">Type 3</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type4" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type4" className="form-check-label fs-subtitle-2">Type 4</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type5" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type5" className="form-check-label fs-subtitle-2">Type 5</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-xl-3 m-0 border-end spacing-0 spacing-e-sm position-relative"
                    style={{ minWidth: "190px"}}
                >
                    <button type="button"
                            data-bs-toggle="dropdown"
                            className="btn fs-body-1 text-secondary radius-lg border w-100 d-flex align-items-center justify-content-between">
                        <span>Type of Provider</span>
                        <img src={CaretDown} />
                    </button>
                    <div className="dropdown-menu position-absolute start-0 end-0" style={{maxHeight: "210px", overflowY: "auto"}} onClick={e => e.stopPropagation()}>
                        <div className="position-relative spacing-x-xs">
                            <button className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 spacing-xs">
                                <img src={MagnifyingGlass}/>
                            </button>
                            <input type="search" className="form-control search-input radius-lg" placeholder="Search of Provider"/>
                        </div>
                        <div className="d-flex flex-column spacing-x-xs">
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type1" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type1" className="form-check-label fs-subtitle-2">Type 1</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type2" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type2" className="form-check-label fs-subtitle-2">Type 2</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type3" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type3" className="form-check-label fs-subtitle-2">Type 3</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type4" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type4" className="form-check-label fs-subtitle-2">Type 4</label>
                            </div>
                            <div className="d-flex gap-2 align-items-center spacing-x-sm spacing-y-xs">
                                <input id="type5" className="form-check-input spacing-x-xs spacing-y-xs m-0" type="checkbox"/>
                                <label htmlFor="type5" className="form-check-label fs-subtitle-2">Type 5</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl col-lg-3 spacing-0"
                >
                    <button type="button"
                            className="btn fs-body-1 text-secondary radius-lg border w-100 d-flex align-items-center justify-content-between"><span>Country</span><img src={MapPin} /></button>
                </div>
                <div className="col-xl col-lg-3 spacing-0">
                    <button type="button"
                            className="btn fs-body-1 text-secondary radius-lg border w-100 d-flex align-items-center justify-content-between"><span>State</span><img src={MapPin} /></button>
                </div>
                <div className="col-xl col-lg-3 spacing-0">
                    <button type="button"
                            className="btn fs-body-1 text-secondary radius-lg border w-100 d-flex align-items-center justify-content-between"><span>City</span><img src={MapPin} /></button>
                </div>
                <div style={{ width: "50px"}} className="spacing-0">
                    <button className="btn w-100 bg-brand-600 d-flex align-items-center justify-content-center h-100 float-end radius-lg"><img
                            src={MagnifyingGlassWhite}/></button>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;
