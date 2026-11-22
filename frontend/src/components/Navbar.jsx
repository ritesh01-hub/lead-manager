
const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-bold text-blue-600">
        Lead Manager
      </h1>

      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
          A
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800">
            Admin
          </p>
          <p className="text-xs text-gray-500">
            Administrator
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
