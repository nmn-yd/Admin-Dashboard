function BounceRate() {
  return (
    <div className="min-w-96  rounded-md  border-blue-700 bg-[#ffffff] p-4 shadow-md">
      <div>
        <p className="text-4xl">56.33%</p>
        <h2 className="mb-2">Avg Bounce Rate</h2>
      </div>
      <div className="mb-4 flex">
        <div className="flex-1">
          <select id="frequency" name="frequency">
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="flex-1">Chart</div>
      </div>
    </div>
  );
}

export default BounceRate;
