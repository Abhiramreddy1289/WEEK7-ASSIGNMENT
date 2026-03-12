import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
      );
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError("Failed to fetch countries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl text-amber-900 mb-6 text-center">
      Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      {loading && (
        <p className="text-center text-blue-500 mt-6">Loading countries...</p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-6">{error}</p>
      )}

      {!loading && !error && (
        <CountryList countries={filtered} />
      )}

    </div>
  );
}

export default App;