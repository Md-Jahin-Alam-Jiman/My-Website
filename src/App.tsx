/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OSDashboard from "./pages/OSDashboard";
import ClientLogin from "./pages/ClientLogin";
import AdminLogin from "./pages/AdminLogin";
import ClientDashboard from "./pages/ClientDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/client/*" element={<ClientDashboard />} />
        <Route path="/os/*" element={<OSDashboard />} />
      </Routes>
    </Router>
  );
}
