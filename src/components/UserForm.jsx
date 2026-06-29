import { useEffect, useState } from "react";
import { validateForm } from "../utils/validators";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

function UserForm({
  user,
  users,
  onSave,
  onClose,
}) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData(initialState);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    const emailExists = users.some((existingUser) => {
      return (
        existingUser.email.toLowerCase() ===
          formData.email.toLowerCase() &&
        existingUser.id !== formData.id
      );
    });

    if (emailExists) {
      validationErrors.email =
        "Email already exists.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave(formData);
  };

  const fieldClass =
    "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition duration-200 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-100";

  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full animate-fade-in items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm">
      <div className="w-full max-w-[520px] animate-popup rounded-lg border border-slate-200 bg-white p-7 shadow-xl max-[576px]:p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 max-[576px]:text-xl">
              {user ? "Edit User" : "Add New User"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {user ? "Update user profile details." : "Create a new dashboard user."}
            </p>
          </div>

          <button
            className="h-10 w-10 shrink-0 cursor-pointer rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-500 transition duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700 active:scale-[.98]"
            onClick={onClose}
            type="button"
            aria-label="Close form"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col">
            <label className="mb-2 text-sm font-semibold text-slate-700">First Name</label>
            <input
              className={fieldClass}
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <span className="mt-1.5 text-xs font-semibold text-red-600">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="mb-5 flex flex-col">
            <label className="mb-2 text-sm font-semibold text-slate-700">Last Name</label>
            <input
              className={fieldClass}
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
            />

            {errors.lastName && (
              <span className="mt-1.5 text-xs font-semibold text-red-600">
                {errors.lastName}
              </span>
            )}
          </div>

          <div className="mb-5 flex flex-col">
            <label className="mb-2 text-sm font-semibold text-slate-700">Email</label>
            <input
              className={fieldClass}
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="mt-1.5 text-xs font-semibold text-red-600">
                {errors.email}
              </span>
            )}
          </div>

          <div className="mb-5 flex flex-col">
            <label className="mb-2 text-sm font-semibold text-slate-700">Department</label>
            <select
              className={`${fieldClass} cursor-pointer`}
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
            </select>

            {errors.department && (
              <span className="mt-1.5 text-xs font-semibold text-red-600">
                {errors.department}
              </span>
            )}
          </div>

          <div className="mt-7 flex justify-end gap-3 max-md:flex-col">
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-50 active:scale-[.98] max-md:w-full"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-lg border border-teal-700 bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-teal-800 active:scale-[.98] max-md:w-full"
            >
              {user
                ? "Update User"
                : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
