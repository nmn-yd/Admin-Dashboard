import { IoStatsChartSharp } from "react-icons/io5";

function SiteAnalysis() {
  return (
    <div className="min-w-96 rounded-md  border-blue-700 bg-[#ffffff] p-4 shadow-md">
      <div className="flex flex-col items-center gap-3 space-y-2 pt-4">
        <IoStatsChartSharp size={48} color="blue" />
        <span className="text-4xl">368</span>
        <span>Active Visitors on Site</span>
        <div>chart</div>
        <button className="font-nunito inline-blockd mb-2 rounded-md border border-blue-500 bg-blue-600 px-4 py-2 leading-6 text-white">
          View More Details
        </button>
      </div>
    </div>
  );
}

export default SiteAnalysis;
