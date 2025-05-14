import { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description) {
      alert("Please fill all required fields.");
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", price: "", description: "", imageUrl: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        📦 Submit a Product
      </h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        min="0"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Product Description"
        rows="4"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />

      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL (optional)"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
      >
        🚀 Submit Product
      </button>
    </form>
  );
};

export default ProductForm;
