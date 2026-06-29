function Pagination({
  currentPage,
  totalPages,
  pageSize,
  setCurrentPage,
  setPageSize,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const navButtonClass =
    "cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:not-disabled:border-teal-500 hover:not-disabled:text-teal-700 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-45";

  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm max-[992px]:flex-col max-[992px]:items-start">
      <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
        <label>Rows per page</label>

        <select
          className="cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition duration-200 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2 max-[992px]:w-full max-[992px]:justify-center">
        <button
          className={navButtonClass}
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={
              currentPage === page
                ? "h-10 w-10 cursor-pointer rounded-lg border border-teal-700 bg-teal-700 text-sm font-semibold text-white shadow-sm transition duration-200 active:scale-[.98]"
                : "h-10 w-10 cursor-pointer rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition duration-200 hover:border-teal-500 hover:text-teal-700 active:scale-[.98]"
            }
            onClick={() =>
              setCurrentPage(page)
            }
          >
            {page}
          </button>
        ))}

        <button
          className={navButtonClass}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
