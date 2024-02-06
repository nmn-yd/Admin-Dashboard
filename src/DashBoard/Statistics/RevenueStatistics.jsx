function RevenueStatistics() {
  return (
    <div className="flex-1 rounded-md border-blue-700  bg-[#2962ff] p-4 text-white shadow-md">
      <h2 className="mb-2">Revenue Statistics</h2>
      <div className="mt-6 flex">
        <div className="flex-1">chart</div>
        <div className="flex-1">
          <div className="text-4xl">
            <span></span>
            <h3>$351</h3>
          </div>
          <p>Jan 10 - Jan 20</p>
        </div>
      </div>
    </div>
  );
}

export default RevenueStatistics;
