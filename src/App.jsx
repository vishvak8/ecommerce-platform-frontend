import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5001/products");
      setProducts(res.data);
      setAllProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setProducts(allProducts);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/semantic-search", {
        query,
        products: allProducts,
      });
      setProducts(res.data.results);
    } catch (err) {
      console.error("Search failed:", err.response?.data || err.message);
    }
  };

  const handleProductSubmit = async (product) => {
    try {
      await axios.post("http://localhost:5001/products", product);
      fetchProducts();
    } catch (err) {
      console.error("Error submitting product:", err);
    }
  };

  const handleTranslate = async (description, productName) => {
    try {
      const res = await axios.post("http://localhost:5001/translate", {
        text: description,
      });

      // ✅ Clean, remove quotes, capitalize first letter, no full stop
      let translatedText = res.data.translatedText
        .replace(/[\u200E\u200F\u202A-\u202E]/g, "")
        .replace(/<[^>]*>?/gm, "")
        .replace(/^"(.*)"$/, "$1")
        .trim();

      if (translatedText.length > 0) {
        translatedText = translatedText[0].toUpperCase() + translatedText.slice(1);
      }

      const updated = products.map((p) =>
        p.name === productName ? { ...p, translated: translatedText } : p
      );
      setProducts(updated);
    } catch (err) {
      console.error("Translation failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white py-10 px-4">
      {/* Product Form */}
      <div className="bg-white/90 shadow-lg rounded-xl p-6 max-w-xl mx-auto">
        <ProductForm onSubmit={handleProductSubmit} />
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mt-10">
        <input
          type="text"
          placeholder="🔍 Search products smartly..."
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
            handleSearch(value);
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Cards */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-5"
          >
            {p.image_url && (
              <img
                src={p.image_url}
                alt={p.name}
                className="w-full h-48 object-contain rounded-md bg-gray-50 mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{p.description}</p>
            <p className="mt-2 font-bold text-green-600 text-lg">₹{p.price}</p>

            <button
              onClick={() => handleTranslate(p.description, p.name)}
              className="mt-3 inline-block px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Translate to Hindi
            </button>

            {p.translated && (
              <p className="mt-3 text-sm font-medium translated-hindi">
                🌐 {p.translated}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
