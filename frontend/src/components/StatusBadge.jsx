
const StatusBadge = ({ status }) => {
  const statusStyles = {
    New: "bg-blue-100 text-blue-700",
    Contacted: "bg-orange-100 text-orange-700",
    Qualified: "bg-green-100 text-green-700",
    Lost: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
