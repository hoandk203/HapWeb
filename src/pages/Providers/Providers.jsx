import { useState } from "react";
import SearchBar from "./components/SearchBar";
import AnalyticsContent from "./components/AnalyticsContent";
import Location from "./components/Location";
import ProviderList from "./components/ProviderList";
import AdvancedSearch from "./components/AdvancedSearch";
import ConditionalSearch from "./components/ConditionalSearch";
import MessageModal from "./components/MessageModal";

const Providers = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  return (
    <div className="main-content position-relative d-flex flex-column gap-4 spacing-md bg-neutral-100">
      <MessageModal/>
      <ConditionalSearch/>
      {showAdvancedSearch && <AdvancedSearch setShowAdvancedSearch={setShowAdvancedSearch}/>}
      <SearchBar showAdvancedSearch={showAdvancedSearch} setShowAdvancedSearch={setShowAdvancedSearch}/>
      <div className="row ms-0 me-0 gap-3">
        <div className="col-12 col-xl bg-neutral-0 px-0 radius-xl">
            <AnalyticsContent/>
        </div>
        <div className="col-12 col-xl bg-neutral-0 px-0 radius-xl">
            <Location/>
        </div>
      </div>
      <ProviderList/>
    </div>
  );
};

export default Providers;
