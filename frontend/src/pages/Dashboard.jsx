
import { useEffect, useState } from "react";
import StatCard from "../components/StatCard.jsx";
import { getAllLeads } from "../services/leadService.js";

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllLeads();
        setLeads(response.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Failed to fetch leads. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const stats = [
    {
      title: "Total Leads",
      value: leads.length,
      description: "All registered leads",
      color: "text-blue-600",
    },
    {
      title: "New Leads",
      value: leads.filter((lead) => lead.status === "New").length,
      description: "Recently added leads",
      color: "text-indigo-600",
    },
    {
      title: "Contacted Leads",
      value: leads.filter((lead) => lead.status === "Contacted").length,
      description: "Leads contacted",
      color: "text-orange-600",
    },
    {
      title: "Qualified Leads",
      value: leads.filter((lead) => lead.status === "Qualified").length,
      description: "Potential customers",
      color: "text-green-600",
    },
    {
      title: "Lost Leads",
      value: leads.filter((lead) => lead.status === "Lost").length,
      description: "Leads marked as lost",
      color: "text-red-600",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's what's happening with your leads.
        </p>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading dashboard...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
