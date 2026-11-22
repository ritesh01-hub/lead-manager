
import { useEffect, useState } from "react";

import LeadTable from "../components/LeadTable.jsx";
import LeadForm from "../components/LeadForm.jsx";

import {
  getAllLeads,
  createLead,
  updateLead,
  deleteLead,
} from "../services/leadService.js";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  // Fetch all leads
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getAllLeads();
      setLeads(response.data);
    } catch (err) {
      setError("Unable to fetch leads. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Create a new lead
  const handleCreateLead = async (formData) => {
    await createLead(formData);

    setShowForm(false);
    await fetchLeads();
  };

  // Open form with selected lead
  const handleEditLead = (lead) => {
    setSelectedLead(lead);
    setShowForm(true);
  };

  // Update existing lead
  const handleUpdateLead = async (formData) => {
    await updateLead(selectedLead._id, formData);

    setShowForm(false);
    setSelectedLead(null);

    await fetchLeads();
  };

  // Delete a lead with confirmation
  const handleDeleteLead = async (lead) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${lead.name}?`
    );

    if (!confirmed) return;

    try {
      await deleteLead(lead._id);
      await fetchLeads();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to delete lead."
      );
    }
  };

  // Close form
  const handleCancel = () => {
    setShowForm(false);
    setSelectedLead(null);
  };

  // Search and filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "" || lead.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="p-8">

      {/* Page Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manage Leads
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and manage all your leads.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedLead(null);
            setShowForm(true);
          }}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Add Lead
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-5 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search by lead name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setStatus("");
          }}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm hover:bg-gray-50"
        >
          Clear Filters
        </button>
      </div>

      {/* Lead Count */}
      <p className="mb-3 text-sm text-gray-500">
        Showing {filteredLeads.length} of {leads.length} leads
      </p>

      {/* Lead Table */}
      {loading ? (
        <p className="py-8 text-center text-gray-500">
          Loading leads...
        </p>
      ) : error ? (
        <p className="rounded-lg bg-red-50 p-4 text-red-600">
          {error}
        </p>
      ) : (
        <LeadTable
          leads={filteredLeads}
          onEdit={handleEditLead}
          onDelete={handleDeleteLead}
        />
      )}

      {/* Add / Edit Lead Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {selectedLead ? "Edit Lead" : "Add New Lead"}
              </h2>

              <button
                onClick={handleCancel}
                className="text-2xl text-gray-400 hover:text-gray-700"
                aria-label="Close form"
              >
                &times;
              </button>
            </div>

            <LeadForm
              key={selectedLead?._id || "new"}
              initialData={selectedLead}
              onSubmit={
                selectedLead
                  ? handleUpdateLead
                  : handleCreateLead
              }
              onCancel={handleCancel}
            />

          </div>
        </div>
      )}

    </section>
  );
};

export default Leads;
