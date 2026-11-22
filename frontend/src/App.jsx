
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Leads from "./pages/Leads.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <Navbar />

        <div className="flex">
          {/* Sidebar Navigation */}
          <Sidebar />

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
