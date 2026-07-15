import { FolderOpen, MoreVertical } from "lucide-react";

interface Props {
  title: string;
  description: string;
  papers: number;
  updated: string;
  colorClass:string;
  iconBgColour:string;
  iconTextColours:string;
}

const CollectionCard = ({
  title,
  description,
  papers,
  updated,
  colorClass,
  iconBgColour,
  iconTextColours
}: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-400 bg-white  shadow-sm transition hover:shadow-lg">
        <div className={`h-2 ${colorClass} w-full`}></div>
        <div className="px-6 py-5">
      <div className="flex justify-between">

        <div className={`rounded-xl ${iconBgColour} p-3`}>

          <FolderOpen className={`${iconTextColours}`} size={20}/>

        </div>

        <button>

          <MoreVertical size={20} className={`${iconTextColours}`}/>

        </button>

      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>

      <div className="mt-5 flex justify-between border-t border-gray-400 pt-3 text-sm text-slate-500">

        <span>{papers} Papers</span>

        <span>{updated}</span>

      </div>
    </div>
    </div>
  );
};

export default CollectionCard;