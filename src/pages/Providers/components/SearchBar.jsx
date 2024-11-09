import MagnifyingGlass from "../../../assets/image/MagnifyingGlass.svg";
import MagnifyingGlassWhite from "../../../assets/image/MagnifyingGlassWhite.svg";

const SearchBar = () => {
    return (
        <div className="search-bar d-flex flex-column gap-3 border bg-white p-3 rounded-4">
                <div className="d-flex gap-3">
                    <div className="position-relative col"><button
                            className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 p-2"><img
                                src={MagnifyingGlass}/></button><input type="search"
                            className="form-control search-input rounded-3" placeholder="Search"/></div>
                    <div className="position-relative col-2"><button
                            className="position-absolute h-100 d-flex align-items-center bg-transparent border-0 p-2"><img
                                src={MagnifyingGlass}/></button><input type="search"
                            className="form-control search-input rounded-3" placeholder="Advanced Search"/></div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-2">
                        <select className="form-select">
                            <option>Type of Service</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select className="form-select">
                            <option>Type of Provider</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select className="form-select">
                            <option>Country</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select className="form-select">
                            <option>State</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <select className="form-select">
                            <option>City</option>
                        </select>
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
