
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface PaperCardProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  abstract: string;
  tags: string[];
}

const PaperCard = ({
  title,
  authors,
  journal,
  year,
  citations,
  abstract,
  tags,
}: PaperCardProps) => {
  return (
    
    <div className="rounded-lg  items-center justify-evenly border border-gray-200 bg-white py-6 shadow-sm transition hover:shadow-md">

      {/* Header */}
      <div className="flex">
      <div className="w-4/5 px-7">

      <div className=" flex items-start justify-between gap-4">

        <div>

          <h2 className="text-xl font-semibold text-slate-900 hover:text-blue-600 cursor-pointer transition">

            {title}

          </h2>

          <p className="mt-2 text-sm text-slate-500 font-semibold">

            {authors}

          </p>

          <p className="mt-1 text-sm text-slate-500 font-semibold">

            {journal} • {year}

          </p>

        </div>

        

      </div>

      {/* Abstract */}

      <p className="mt-4 text-md leading-6 text-slate-600 ">

        {abstract}

      </p>

      {/* Tags */}

      <div className="mt-5 flex flex-wrap gap-2">

        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {tag}
          </span>
        ))}

      </div>

      {/* Footer */}

      <div className="text-sm text-slate-500 pt-5">

          ⭐ {citations.toLocaleString()} Citations

        </div>
      
        </div>
        <div className="border-l-2  border-gray-300 w-1/5 flex flex-col gap-y-4 justify-center">
          <button className="py-2 border border-gray-400 rounded-lg mx-5 bg-blue-600 text-white">View Details</button>
          <button className="py-2 border border-gray-400 rounded-lg px-3 flex items-center justify-center mx-5"><FaRegBookmark size={20}/></button>
          <button className="py-2 border border-gray-400 rounded-lg px-3 flex items-center justify-center mx-5"><FaRegHeart size={20}/></button>
        </div>
        </div>
    </div>
  );
};

export default PaperCard;