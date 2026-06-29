function ConfirmLogout({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full animate-fade-in items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm">
      <div className="w-full max-w-[430px] animate-popup rounded-lg border border-slate-200 bg-white p-7 text-center shadow-xl max-[576px]:p-6">
        <h2 className="mb-3 text-2xl font-bold text-slate-950">
          Logout
        </h2>

        <p className="mb-7 text-sm leading-6 text-slate-500">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-3 max-[576px]:flex-col">
          <button
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-50 active:scale-[.98] max-[576px]:w-full"
            onClick={onCancel}
          >
            No
          </button>

          <button
            className="cursor-pointer rounded-lg border border-teal-700 bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-teal-800 active:scale-[.98] max-[576px]:w-full"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmLogout;
