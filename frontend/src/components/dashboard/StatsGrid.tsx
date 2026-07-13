import {
  FaBook,
  FaBookmark,
  FaPen
} from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Saved Papers"
        value="1,284"
        change="+18% this month"
        icon={FaBookmark}
      />

      <StatCard
        title="Collections"
        value="328"
        change="+7% this week"
        icon={FaBook}
      />

      <StatCard
        title="Total Notes"
        value="54"
        change="+12 new"
        icon={FaPen}
      />

      <StatCard
        title="Reading Time"
        value="8,742"
        change="+21% growth"
        icon={FaClock}
      />

    </section>
  );
};

export default StatsGrid;