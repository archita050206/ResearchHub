import type{ IconType } from "react-icons";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: IconType;
}

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white py-5 px-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-gray-500">
          {title}
        </h3>

        <div className="rounded-xl bg-blue-100 p-3">

          <Icon
            className="text-blue-600"
            size={20}
          />

        </div>

      </div>

      <h2 className="text-3xl font-bold text-slate-800">
        {value}
      </h2>

      <p className="mt-3 text-sm font-medium text-green-600">
        {change}
      </p>

    </div>
  );
};

export default StatCard;