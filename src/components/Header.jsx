function Header({ onAdd, onLogout }) {
  return (
    <header className="mb-6 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-8 py-6 shadow-sm max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5 max-md:px-5">
      <div>
        <h1 className="mb-2 text-[30px] font-bold text-slate-950 max-md:text-[26px] max-[576px]:text-2xl">
          User Management Dashboard
        </h1>

        <p className="text-sm font-medium text-slate-500 max-[576px]:text-[13px]">
          Manage users, departments, and account details.
        </p>
      </div>

      <div className="flex items-center gap-3 max-md:w-full max-md:flex-col">
        <button
          className="cursor-pointer rounded-lg border border-teal-700 bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-teal-800 active:scale-[.98] max-md:w-full"
          onClick={onAdd}
        >
          Add User
        </button>

        <button
          className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700 active:scale-[.98] max-md:w-full"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
