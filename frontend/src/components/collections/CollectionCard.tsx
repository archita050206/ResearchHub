import { FolderOpen, MoreVertical } from "lucide-react";

interface Props {
  title: string;
  description: string;
  papers: number;
  updated: string;
  colorClass:string;
  iconBgColour:string
}

const CollectionCard = ({
  title,
  description,
  papers,
  updated,
  colorClass,
  iconBgColour
}: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-400 bg-white  shadow-sm transition hover:shadow-lg">
        <div className={`h-2 ${colorClass} w-full`}></div>
        <div className="px-6 py-5">
      <div className="flex justify-between">

        <div className={`rounded-xl ${iconBgColour} p-3`}>

          <FolderOpen className="text-blue-600" />

        </div>

        <button>

          <MoreVertical size={20} />

        </button>

      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>

      <div className="mt-5 flex justify-between border-t pt-3 text-sm text-slate-500">

        <span>{papers} Papers</span>

        <span>{updated}</span>

      </div>
    </div>
    </div>
  );
};

export default CollectionCard;