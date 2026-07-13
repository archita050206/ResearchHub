import {
  FaBookmark,
  
} from "react-icons/fa";

interface PaperCardProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  tags: string[];
}

const RPaperCard = ({
  title,
  authors,
  journal,
  year,
  
  tags,
}: PaperCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <h3 className="text-lg font-semibold leading-7 text-slate-800">
          {title}
        </h3>
         <button className="rounded-lg p-2 transition hover:bg-slate-100 text-blue-700">
              <FaBookmark />
            </button>
            

      </div>
   
      <p className=" text-gray-500">
        {authors}
      </p>

      <p className="mt-1 text-sm text-gray-400">
        {journal} • {year}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">

        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
          >
            {tag}
          </span>
        ))}

      </div>

    </div>
  );
};

export default RPaperCard;