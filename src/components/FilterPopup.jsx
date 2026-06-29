import { useState } from "react";

function FilterPopup({ filters, setFilters }) {
  const [showFilter, setShowFilter] = useState(false);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  const fieldClass =
    "rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 transition duration-200 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-100";

  return (
    <div className="relative max-[992px]:w-full">
      <button
        className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:border-teal-500 hover:text-teal-700 active:scale-[.98] max-[992px]:w-full"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? "Close Filters" : "Filters"}
      </button>

      {showFilter && (
        <div className="mt-3 w-full animate-popup rounded-lg border border-slate-200 bg-white p-6 shadow-sm max-[576px]:p-5">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 max-[576px]:grid-cols-1">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-slate-700">First Name</label>
              <input
                className={fieldClass}
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={filters.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-slate-700">Last Name</label>
              <input
                className={fieldClass}
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={filters.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-slate-700">Email</label>
              <input
                className={fieldClass}
                type="text"
                name="email"
                placeholder="Enter email"
                value={filters.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-slate-700">Department</label>
              <select
                className={`${fieldClass} cursor-pointer`}
                name="department"
                value={filters.department}
                onChange={handleChange}
              >
                <option value="">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700 active:scale-[.98]"
              onClick={clearFilters}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterPopup;
