import RecentPapers from "./RecentPapers";
import StatsGrid from "./StatsGrid";
import TrendingPapers from "./TrendingPapers";
import WelcomeBanner from "./WelcomeBanner";



const Dashboard = () => {
  return (
    <div className="space-y-8">

      <WelcomeBanner />

      <StatsGrid />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        <div className="xl:col-span-8">

          <RecentPapers />

        </div>

        <div className="xl:col-span-4">

          <TrendingPapers />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;