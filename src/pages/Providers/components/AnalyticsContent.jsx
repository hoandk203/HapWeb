import CaretDownPrimary from "../../../assets/image/CaretDownPrimary.svg";

const AnalyticsContent= ()=>{
    return(
        <>
            <div className="analytics-card max-height-520px d-flex flex-column gap-2 justify-content-between h-100 border rounded-4">
                <div className="py-2">
                    <h3 className="fs-5 fw-semibold mb-0">Analytics</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex gap-2 flex-column bg-surface-secondary p-2 rounded-4">
                            <span className="text-muted fs-14">Auditors</span>
                            <h2 className="mb-0 me-2 fs-4 fw-semibold">660</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex gap-2 flex-column bg-surface-secondary p-2 rounded-4">
                            <span className="text-muted fs-14">Countries</span>
                            <h2 className="mb-0 me-2 fs-4 fw-semibold">70</h2>
                        </div>
                    </div>
                </div>
                <div className="country-stats d-flex flex-column gap-3 fs-14">
                    <div className="d-flex justify-content-between">
                        <span className="col-4">India</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "100%"}} className="country-bar"></div>
                            <span>180</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Bangladesh</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "75%"}} className="country-bar"></div>
                            <span>142</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Malta</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "60%"}} className="country-bar"></div>
                            <span>98</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Brazil</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "50%"}} className="country-bar"></div>
                            <span>75</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Israel</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "40%"}} className="country-bar"></div>
                            <span>52</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Saudi Arabia</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "32%"}} className="country-bar"></div>
                            <span>32</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Greece</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "25%"}} className="country-bar"></div>
                            <span>24</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Serbia</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "22%"}} className="country-bar"></div>
                            <span>22</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="col-4">Central African Republic</span>
                        <div className="col d-flex gap-2">
                            <div style={{width: "18%"}} className="country-bar"></div>
                            <span>20</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="view-all-btn text-primary btn d-flex align-items-center gap-1 fs-14"><span>View
                            All</span><img src={CaretDownPrimary}/></button>
                </div>
            </div>
        </>
    )
}

export default AnalyticsContent