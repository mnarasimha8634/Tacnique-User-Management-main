function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="min-w-80 flex-1 max-[992px]:w-full">
      <input
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-100"
        type="text"
        placeholder="Search by name, email, or department"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;
