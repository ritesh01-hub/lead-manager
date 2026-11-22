
import StatusBadge from "./StatusBadge.jsx";

const LeadTable = ({ leads, onEdit, onDelete }) => {
  if (leads.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-gray-500">
        No leads found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-sm text-gray-600">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Company</th>
            <th className="px-6 py-4">Source</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {leads.map((lead) => (
            <tr key={lead._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-800">
                {lead.name}
              </td>
              <td className="px-6 py-4 text-gray-600">{lead.email}</td>
              <td className="px-6 py-4 text-gray-600">{lead.phone}</td>
              <td className="px-6 py-4 text-gray-600">{lead.company}</td>
              <td className="px-6 py-4 text-gray-600">{lead.source}</td>
              <td className="px-6 py-4">
                <StatusBadge status={lead.status} />
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(lead)}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(lead)}
                    className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
