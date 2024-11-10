import PlusPrimary from "../../../assets/image/PlusPrimary.svg";
import Trash from "../../../assets/image/Trash.svg";


const ConditionalSearch = () => {
    return (
        <div className="modal fade" id="conditionalSearch" aria-labelledby="conditionalSearchLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 fw-semibold">Conditional Search</h6>
                    <div className="d-flex align-items-center">
                        <button className="btn text-primary fs-14">Clear all</button>
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                <div className="modal-body d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <select className="form-select">
                                <option>Gender</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option>is</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <button className="btn border">
                                <img src={Trash} />
                            </button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <select className="form-select">
                                <option>Country</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option>contains</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option>India, Bangladesh</option>
                            </select>
                        </div>
                        <div>
                            <button className="btn border">
                                <img src={Trash} />
                            </button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <select className="form-select">
                                <option>Type</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option>is</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option>Social</option>
                            </select>
                        </div>
                        <div>
                            <button className="btn border">
                                <img src={Trash} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="modal-footer d-flex justify-content-between align-items-center gap-1">
                    <button className="btn text-primary d-flex align-items-center gap-2 fs-14">
                        <img src={PlusPrimary} />
                        Add condition
                    </button>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary fs-14">Reset</button>
                        <button className="btn bg-surface-primary text-white fs-14">Apply</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ConditionalSearch;