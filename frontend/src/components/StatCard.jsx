
const StatCard = ({ title, value, description, color }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-800">
        {value}
      </h2>

      <p className={`mt-2 text-sm ${color}`}>
        {description}
      </p>
    </div>
  );
};

export default StatCard;
