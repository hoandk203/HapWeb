import BasicDatePicker from "./BasicDatePicker";

import X from "../../../assets/image/X.svg";
import X16 from "../../../assets/image/X16.svg";
import TreeStructure from "../../../assets/image/TreeStructure.svg";
import StarYellow from "../../../assets/image/StarYellow.svg";
import StarGray from "../../../assets/image/StarGray.svg";


const AdvancedSearch = ({setShowAdvancedSearch}) => {
    return (
        <div style={{width: "260px", left: "0px", height: "calc(100vh - 64px)"}} className="position-absolute z-1001 fs-body-2 top-0 bg-neutral-0 border d-flex flex-column">
            <div className="spacing-md border">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="mb-0 fs-subtitle-1">Advanced Search</p>
                    <button onClick={() => setShowAdvancedSearch(false)} style={{marginRight: "-8px"}} className="btn spacing-x-xs spacing-y-xss"><img src={X}/></button>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#conditionalSearch" className="btn w-100 border conditional-search d-flex align-items-center justify-content-center gap-2">
                    <img src={TreeStructure} alt="Tree Structure" />
                    <span className="fs-subtitle-2">Conditional Search</span>
                </button>
            </div>

            <div className="accordion overflow-y-scroll" id="searchAccordion">
                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#budgetCollapse">
                            Budget
                        </button>
                    </div>
                    <div id="budgetCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="row g-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="From"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="To"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#ratingCollapse">
                            Rating
                        </button>
                    </div>
                    <div id="ratingCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="rating d-flex justify-content-between">
                                <img src={StarYellow} alt="Star Yellow" />
                                <img src={StarYellow} alt="Star Yellow" />
                                <img src={StarYellow} alt="Star Yellow" />
                                <img src={StarGray} alt="Star Gray" />
                                <img src={StarGray} alt="Star Gray" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#availabilityCollapse">
                            Availability
                        </button>
                    </div>
                    <div id="availabilityCollapse" className="accordion-collapse collapse show border-bottom border-bottom">
                        <div className="accordion-body spacing-md spacing-t-0">
                            <BasicDatePicker />
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#providerCollapse">
                            Provider type
                        </button>
                    </div>
                    <div id="providerCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="provider" id="auditor"/>
                                <label className="form-check-label" htmlFor="auditor">Auditor</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="provider" id="consultant"/>
                                <label className="form-check-label" htmlFor="consultant">Consultant</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#serviceCollapse">
                            Service types
                        </button>
                    </div>
                    <div id="serviceCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <select className="form-select mb-2 fs-body-2">
                                <option>Select service type(s)</option>
                            </select>
                            <div className="tags d-flex flex-wrap gap-2">
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 1 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 2 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 3 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 4 <img src={X16}/></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#serviceCollapse">
                            Sub-Service types
                        </button>
                    </div>
                    <div id="serviceCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <select className="form-select mb-2 fs-body-2">
                                <option>Select sub-service(s)</option>
                            </select>
                            <div className="tags d-flex flex-wrap gap-2">
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 1 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 2 <img src={X16}/></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#genderCollapse">
                            Gender
                        </button>
                    </div>
                    <div id="genderCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="male"/>
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="female"/>
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#shiftCollapse">
                            Work shift
                        </button>
                    </div>
                    <div id="shiftCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="day"/>
                                <label className="form-check-label" htmlFor="day">Day</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="night"/>
                                <label className="form-check-label" htmlFor="night">Night</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#modeCollapse">
                            Service Mode
                        </button>
                    </div>
                    <div id="modeCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="mode" id="onsite"/>
                                <label className="form-check-label" htmlFor="onsite">On-Site</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="mode" id="remote"/>
                                <label className="form-check-label" htmlFor="remote">Remote</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#trainingCollapse">
                            Training & Certification
                        </button>
                    </div>
                    <div id="trainingCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <select className="form-select mb-2 fs-body-2">
                                <option>Select training(s)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#proficiencyCollapse">
                            Language proficiency
                        </button>
                    </div>
                    <div id="proficiencyCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <select className="form-select mb-2 fs-body-2">
                                <option>Select proficiency</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#skillsCollapse">
                            Skills
                        </button>
                    </div>
                    <div id="skillsCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <select className="form-select mb-2 fs-body-2">
                                <option>Select skills</option>
                            </select>
                            <div className="tags d-flex flex-wrap gap-2">
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 1 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 2 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 3 <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 fs-subtitle-2 spacing-x-xs py-1 radius-sm">Option 4 <img src={X16}/></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#experienceCollapse">
                            Professional experience
                        </button>
                    </div>
                    <div id="experienceCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="provider" id="entry"/>
                                <label className="form-check-label" htmlFor="entry">Entry level</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="provider" id="intermediate"/>
                                <label className="form-check-label" htmlFor="intermediate">Intermediate</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="provider" id="expert"/>
                                <label className="form-check-label" htmlFor="expert">Expert</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <div className="accordion-header">
                        <button className="accordion-button bg-neutral-0 fs-subtitle-2 fw-semibold shadow-none spacing-md spacing-b-sm" type="button" data-bs-toggle="collapse" data-bs-target="#industryCollapse">
                            Industries served
                        </button>
                    </div>
                    <div id="industryCollapse" className="accordion-collapse collapse show border-bottom">
                        <div className="accordion-body spacing-md spacing-t-xss">
                            <select className="form-select mb-2 fs-body-2">
                                <option>Select industry(s)</option>
                            </select>
                            <div className="tags d-flex flex-wrap gap-2">
                                <span className="tag bg-blue-50 text-blue-700 spacing-x-xs py-1 radius-xs">Textile <img src={X16}/></span>
                                <span className="tag bg-blue-50 text-blue-700 spacing-x-xs py-1 radius-xs">Agriculture <img src={X16}/></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="form-actions spacing-md d-flex gap-2 border-top">
                <button className="btn radius-md fs-subtitle-2 text-primary btn-outline-secondary fw-semibold w-50">Reset</button>
                <button className="btn radius-md fs-subtitle-2 bg-brand-600 text-neutral-0 fw-semibold w-50">Apply</button>
            </div>
        </div>
    )
}

export default AdvancedSearch;