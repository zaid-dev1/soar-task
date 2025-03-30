import MyCards from "../components/MyCards";
import RecentTransactions from "../components/RecentTransactions";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import ExpenseStatisticsChart from "../components/ExpenseStatisticsChart";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";
const Dashboard = () => {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:px-10 md:px-4 sm:px-1 py-4">
        <div className="md:col-span-2">
          <MyCards />
        </div>
        <div className="md:col-span-1">
          <RecentTransactions />
        </div>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-2 md:px-6 lg:px-10 py-4">
        <div className="lg:col-span-2 w-full">
          <MyCards />
        </div>
        <div className="lg:col-span-1 w-full">
          <RecentTransactions />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-10 md:px-4 sm:px-1 py-4"> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-2 md:px-6 lg:px-10 py-4">
        <div className="lg:col-span-2">
          <WeeklyActivityChart />
        </div>
        <div className="lg:col-span-1">
          <ExpenseStatisticsChart />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 lg:px-10 md:px-4 sm:px-1"> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-2 md:px-6 lg:px-10 py-4">
        <QuickTransfer />

        <BalanceHistory />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-4 sm:px-2 md:px-6 lg:px-10 py-4">
        <div className="md:col-span-2">
          <QuickTransfer />
        </div>
        <div className="md:col-span-3">
          <BalanceHistory />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
