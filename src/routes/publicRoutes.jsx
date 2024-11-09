import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import { Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Providers from "../pages/Providers/Providers";
import Chat from "../pages/Chat/Chat";
import Community from "../pages/Community/Community";
import ProjectTracking from "../pages/ProjectTracking/ProjectTracking";
import ProviderManagement from "../pages/ProviderManagement/ProviderManagement";
import RiskTarget from "../pages/RiskTarget/RiskTarget";
import ProviderNetwork from "../pages/ProviderNetwork/ProviderNetwork";

export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/community" element={<Community />} />
      <Route path="/project-tracking" element={<ProjectTracking />} />
      <Route path="/provider-management" element={<ProviderManagement />} />
      <Route path="/risk-target" element={<RiskTarget />} />
      <Route path="/provider-network" element={<ProviderNetwork />} />
    </Route>
  </>
);
