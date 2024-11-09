import { useState, useRef, useEffect } from "react";

import LocationList from "./LocationList";
import LocationMap from "./LocationMap";

const Location = () => {
    const [isMap, setIsMap] = useState(true);
    const mapButtonRef = useRef(null);
    const listButtonRef = useRef(null);

    useEffect(() => {
        if (isMap) {
            mapButtonRef.current.classList.add("active");
            listButtonRef.current.classList.remove("active");
        } else {
            listButtonRef.current.classList.add("active");
            mapButtonRef.current.classList.remove("active");
        }
    }, [isMap]);

    return (
        <div className="analytics-card max-height-520px h-100 d-flex flex-column gap-3 border rounded-4">
            <div className="d-flex justify-content-between">
                <div className="py-2">
                    <h3 className="fs-5 fw-semibold mb-0">Provider Locations</h3>
                </div>
                <div className="btn-group bg-surface-secondary rounded-3 p-1">
                    <button ref={mapButtonRef} className="border-0 bg-transparent rounded-3 px-3" onClick={() => setIsMap(true)}>Map</button>
                    <button ref={listButtonRef} className="border-0 bg-transparent rounded-3 px-3" onClick={() => setIsMap(false)}>List</button>
                </div>
            </div>
            {isMap ? <LocationMap /> : <LocationList/>}
        </div>
    )
}

export default Location;