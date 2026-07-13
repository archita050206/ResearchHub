import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 transition hover:text-blue-600"
        >
          <ArrowLeft size={22} />

          <h1 className="text-2xl font-bold text-blue-600">
            ResearchHub
          </h1>
        </button>

      </div>

    </header>
  );
};

export default SearchHeader;