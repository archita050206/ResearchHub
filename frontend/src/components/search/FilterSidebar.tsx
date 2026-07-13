const FilterSidebar = () => {
  return (
    <aside className="sticky top-6 rounded-2xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-lg font-bold">
          Filters
        </h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          Clear All
        </button>

      </div>

      {/* Author */}

      <div className="mb-6">

        <label className="mb-2 block text-sm font-semibold">
          Author
        </label>

        <input
          type="text"
          placeholder="Dr. Jane Doe"
          className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
        />

      </div>

      {/* Topic */}

      <div className="mb-6">

        <label className="mb-2 block text-sm font-semibold">
          Topic
        </label>

        <select
          className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
        >
          <option>All Topics</option>
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Computer Vision</option>
          <option>Natural Language Processing</option>
          <option>Data Science</option>
          <option>Cyber Security</option>
        </select>

      </div>

      {/* Publication Year */}

      <div className="mb-6">

        <label className="mb-2 block text-sm font-semibold">
          Publication Year
        </label>

        <div className="flex gap-3">

          <input
            type="number"
            placeholder="From"
            className="w-full rounded-xl border px-3 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="number"
            placeholder="To"
            className="w-full rounded-xl border px-3 py-3 outline-none focus:border-blue-600"
          />

        </div>

      </div>

      {/* Sort */}

      <div className="mb-6">

        <label className="mb-2 block text-sm font-semibold">
          Sort By
        </label>

        <select
          className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
        >
          <option>Relevance</option>
          <option>Newest First</option>
          <option>Most Cited</option>
          <option>Oldest First</option>
        </select>

      </div>

      {/* Checkbox */}

      <div className="mb-8 flex items-center gap-3">

        <input
          type="checkbox"
          id="peer"
          className="h-4 w-4 accent-blue-600"
        />

        <label
          htmlFor="peer"
          className="text-sm"
        >
          Peer Reviewed Only
        </label>

      </div>

      {/* Apply Button */}

      <button
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Apply Filters
      </button>

    </aside>
  );
};

export default FilterSidebar;