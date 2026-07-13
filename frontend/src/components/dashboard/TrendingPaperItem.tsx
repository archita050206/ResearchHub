interface TrendingPaperItemProps {
  title: string;
  citations: number;
  tags: string[];
}

const TrendingPaperItem = ({
  title,
  citations,
  tags,
}: TrendingPaperItemProps) => {
  return (
    <div className="border-b py-4 last:border-none">

      <h3 className="font-semibold line-clamp-2">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {citations.toLocaleString()} citations
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
};

export default TrendingPaperItem;