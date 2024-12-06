import LocationList from "./LocationList";
import LocationMap from "./LocationMap";

const Location = () => {
    return (
        <div style={{height: "520px"}} className="spacing-md bg-white d-flex flex-column gap-3 border radius-xl">
            <div className="d-flex justify-content-between">
                <div className="spacing-y-xs">
                    <h3 className="fs-4 fw-semibold mb-0">Provider Locations</h3>
                </div>
                <ul className="nav nav-pills bg-neutral-50 radius-md p-1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button 
                            className="nav-link active radius-md spacing-x-sm spacing-y-6 text-neutral-500" 
                            data-bs-toggle="tab" 
                            data-bs-target="#map-tab" 
                            type="button" 
                            role="tab"
                        >
                            Map
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button 
                            className="nav-link radius-md spacing-x-sm spacing-y-6 text-neutral-500" 
                            data-bs-toggle="tab" 
                            data-bs-target="#list-tab" 
                            type="button" 
                            role="tab"
                        >
                            List
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content flex-grow-1 overflow-hidden">
                <div className="tab-pane fade show active h-100" id="map-tab" role="tabpanel">
                    <LocationMap />
                </div>
                <div className="tab-pane fade h-100 overflow-scroll" id="list-tab" role="tabpanel">
                    <LocationList />
                </div>
            </div>
        </div>
    )
}

export default Location;