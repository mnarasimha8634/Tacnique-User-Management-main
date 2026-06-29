const departmentClasses = {
  IT: "bg-blue-50 text-blue-700 ring-blue-200",
  HR: "bg-pink-50 text-pink-700 ring-pink-200",
  Finance: "bg-amber-50 text-amber-700 ring-amber-200",
  Sales: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Marketing: "bg-violet-50 text-violet-700 ring-violet-200",
};

function UserRow({ user, displayId, onEdit, onDelete }) {
  return (
    <tr className="transition duration-200 hover:bg-teal-50/50">
      <td className="px-5 py-4 text-left text-sm font-semibold text-slate-600">{displayId}</td>
      <td className="px-5 py-4 text-left text-sm font-medium text-slate-900">{user.firstName}</td>
      <td className="px-5 py-4 text-left text-sm text-slate-700">{user.lastName}</td>
      <td className="px-5 py-4 text-left text-sm text-slate-600">{user.email}</td>

      <td className="px-5 py-4 text-left text-sm">
        <span className={`inline-flex min-w-[92px] items-center justify-center rounded-md px-3 py-1.5 text-xs font-bold ring-1 ${departmentClasses[user.department] || "bg-slate-50 text-slate-700 ring-slate-200"}`}>
          {user.department}
        </span>
      </td>

      <td className="px-5 py-4 text-left text-sm">
        <div className="flex items-center gap-2 max-md:flex-col">
          <button
            className="cursor-pointer rounded-md border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition duration-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 active:scale-[.98] max-md:w-full"
            onClick={() => onEdit(user)}
            title="Edit User"
          >
            Edit
          </button>

          <button
            className="cursor-pointer rounded-md border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700 transition duration-200 hover:border-red-300 hover:bg-red-100 active:scale-[.98] max-md:w-full"
            onClick={() => onDelete(user.id)}
            title="Delete User"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
