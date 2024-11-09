import SearchBar from "./components/SearchBar";
import AnalyticsContent from "./components/AnalyticsContent";
import Location from "./components/Location";
import ProviderList from "./components/ProviderList";

const Providers = () => {
  return (
    <div className="main-content d-flex flex-column gap-4 p-3 bg-surface-secondary">
      <SearchBar />
      <div className="row ms-0 me-0 gap-3">
        <div className="col bg-white px-0">
            <AnalyticsContent/>
        </div>
        <div className="col bg-white px-0">
            <Location/>
        </div>
      </div>
      <ProviderList/>
    </div>
  );
};

export default Providers;
