function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-lg p-4 ">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className=" w-full "
      />

      <h2 className="  mt-3 justify-center">
        {country.name.common}
      </h2>

      <p className="text-sm">
        <span className="font-semibold">Capital:</span>{" "}
        {country.capital?.[0] || "N/A"}
      </p>

      

      <p className="text-sm">
        <span className="font-semibold">Region:</span>{" "}
        {country.region}
      </p>

    </div>
  );
}

export default CountryCard;