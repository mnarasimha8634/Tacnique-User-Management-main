function ConfirmDelete({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full animate-fade-in items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm">
      <div className="w-full max-w-[460px] animate-popup rounded-lg border border-slate-200 bg-white p-7 text-center shadow-xl max-[576px]:p-6">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl font-bold text-red-700">
          !
        </div>

        <h2 className="mb-3 text-2xl font-bold text-slate-950">Delete User</h2>

        <p className="mb-7 text-sm leading-6 text-slate-500">
          Are you sure you want to delete this user? This action cannot be undone.
        </p>

        <div className="flex justify-center gap-3 max-md:flex-col">
          <button
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-50 active:scale-[.98] max-md:w-full"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="cursor-pointer rounded-lg border border-red-700 bg-red-700 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-red-800 active:scale-[.98] max-md:w-full"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
