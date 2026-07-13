import FavouriteCard from "./FavouriteCard";

const papers = [
  {
    title: "Neural Networks in Theoretical Physics",
    authors: "Sarah Jenkins",
    year: 2023,
    type: "Journal",
  },
  {
    title: "Ethics of Large Language Models",
    authors: "Chen, Wu & Thompson",
    year: 2024,
    type: "Conference",
  },
  {
    title: "Socio-Economic Impacts of Urban Green Spaces",
    authors: "Elena Gomez",
    year: 2021,
    type: "Thesis",
  },
];



const FavouriteGrid = () => {
    const query="a";
  const filtered = papers.filter((paper) =>
    paper.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  if (!filtered.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      {filtered.map((paper) => (
        <FavouriteCard
          key={paper.title}
          {...paper}
        />
      ))}

    </div>
  );
};

export default FavouriteGrid;