import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function Search() {
  const placeholders = [
    "Get a Quote",
    "Shop Now",
    "Explore Our Collection",
    "Search...",
  ];

  const handleChange = (e) => {
    console.log(e.target.value); // Log the input value on change
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    console.log("submitted"); // Log submission event
  };

  return (
    <>
      {/* Search Input Container */}
      <div className="relative w-full max-w-xs">
        {/* Search Icon */}
        <svg
          className="absolute top-1/2 left-3 w-5 h-5 text-gray-500 transform -translate-y-1/2 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0v4m0 4v4"
          />
        </svg>

        {/* Search Input */}
        <form onSubmit={onSubmit} className="w-full">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
