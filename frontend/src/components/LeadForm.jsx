
import { useState } from "react";

const LeadForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState(() => ({
    name: initialData?.name || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    company: initialData?.company || "",
    source: initialData?.source || "",
    status: initialData?.status || "New",
  }));

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      return "Name must contain at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
      return "Please enter a valid phone number.";
    }

    if (!formData.company.trim()) {
      return "Company name is required.";
    }

    if (!formData.source) {
      return "Please select a lead source.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await onSubmit({
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div>
        <label className="mb-1 block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter full name"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter email"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter phone number"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
          placeholder="Enter company"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Source</label>
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          className={inputClass}
          required
        >
          <option value="">Select source</option>
          <option value="Website">Website</option>
          <option value="Referral">Referral</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Cold Call">Cold Call</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={submitting}
          className="rounded-lg border px-5 py-2.5 hover:bg-gray-50 disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {submitting
            ? "Saving..."
            : initialData
              ? "Update Lead"
              : "Save Lead"}
        </button>
      </div>
    </form>
  );
};

export default LeadForm;
