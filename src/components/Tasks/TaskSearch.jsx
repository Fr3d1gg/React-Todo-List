import { Search, X } from "lucide-react";

export const TaskSearch = ({ search, setSearch, resultsCount }) => {
  return (
    <div className="mt-3">
      <div className="relative">
        <Search
          size={20}
          className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-gray-400 pointer-events-none
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="
            w-full bg-gray-800
            border border-gray-600
            rounded-lg pl-12 pr-12 py-3
            text-sm sm:text-base text-white
            placeholder:text-gray-500
            outline-none focus:border-slate-400
            transition
          "
        />

        {search && (
          <button
            type="button"
            title="Clear search"
            onClick={() => setSearch("")}
            className="
              absolute right-4 top-1/2
              -translate-y-1/2
              text-gray-400 hover:text-white
              cursor-pointer transition
            "
          >
            <X size={19} />
          </button>
        )}
      </div>

      {search.trim() && (
        <p className="mt-3 text-sm text-gray-400 text-left">
          {resultsCount} {resultsCount === 1 ? "task found" : "tasks found"}
        </p>
      )}
    </div>
  );
};
