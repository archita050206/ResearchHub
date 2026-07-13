import CollectionCard from "./CollectionCard";

const collections = [
  {
    title: "Artificial Intelligence",
    description:
      "Transformer models, LLMs and generative AI papers.",
    papers: 24,
    updated: "2 days ago",
  },
  {
    title: "Computer Vision",
    description:
      "Image classification and object detection research.",
    papers: 16,
    updated: "Yesterday",
  },
  {
    title: "Natural Language Processing",
    description:
      "Language models, embeddings and retrieval.",
    papers: 32,
    updated: "Today",
  },
  {
    title: "Distributed Systems",
    description:
      "Cloud computing, microservices and scalability.",
    papers: 12,
    updated: "4 days ago",
  },
];
const cardColors = [
  "bg-blue-500", 
  "bg-purple-500", 
  "bg-orange-500", 
  "bg-green-500", 
  "bg-yellow-500"
];
const iconBgColours = [
  "bg-blue-200", 
  "bg-purple-200", 
  "bg-orange-200", 
  "bg-green-200", 
  "bg-yellow-00"
];
const CollectionGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {collections.map((collection, index) => (
        <CollectionCard
          key={collection.title}
          {...collection}
          colorClass={cardColors[index%cardColors.length]}
          iconBgColour={iconBgColours[index%cardColors.length]}
        />
      ))}

    </div>
  );
};

export default CollectionGrid;