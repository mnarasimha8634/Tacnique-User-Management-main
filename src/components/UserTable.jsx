import UserRow from "./UserRow";

function UserTable({
  users,
  startIndex,
  sortField,
  sortOrder,
  onSort,
  onEdit,
  onDelete,
}) {
  const getSortIcon = (field) => {
    if (sortField !== field) return "";
    return sortOrder === "asc" ? " Asc" : " Desc";
  };

  const headerClass =
    "cursor-pointer select-none px-5 py-4 text-left text-xs font-bold uppercase text-slate-500 transition duration-200 hover:bg-slate-100";

  return (
    <div className="mt-5 animate-table-popup overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm max-md:overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-slate-300">
      <table className="w-full min-w-[950px] border-collapse max-md:min-w-[900px]">
        <thead className="border-b border-slate-200 bg-slate-50">
          <tr>
            <th className="px-5 py-4 text-left text-xs font-bold uppercase text-slate-500">ID</th>
            <th className={headerClass} onClick={() => onSort("firstName")}>
              First Name{getSortIcon("firstName")}
            </th>
            <th className={headerClass} onClick={() => onSort("lastName")}>
              Last Name{getSortIcon("lastName")}
            </th>
            <th className={headerClass} onClick={() => onSort("email")}>
              Email{getSortIcon("email")}
            </th>
            <th className={headerClass} onClick={() => onSort("department")}>
              Department{getSortIcon("department")}
            </th>
            <th className="px-5 py-4 text-left text-xs font-bold uppercase text-slate-500" width="180">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {users.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="p-12 text-center text-base font-semibold text-slate-400"
              >
                No users found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <UserRow
                key={user.id}
                user={user}
                displayId={startIndex + index + 1}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
