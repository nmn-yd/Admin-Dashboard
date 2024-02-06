function SalesPricing() {
  return (
    <div className="mb-10 mt-4 flex items-start justify-between">
      <div>
        <h2 className="text-[30px] font-semibold">$6,890.68</h2>
        <p className=" text-[14px] text-[#1a1f23ba]">Current Month Earnings</p>
        <h3 className="mt-6 text-2xl">1,540</h3>
        <p className=" mb-5 text-[14px] text-[#1a1f23ba]">
          Current Month Sales
        </p>
        <button className="font-nunito inline-block rounded-md border border-blue-500 bg-blue-600 p-4 leading-6 text-white">
          Last Month Summary
        </button>
      </div>
      <div>
        <h1>React Chart</h1>
      </div>
    </div>
  );
}

export default SalesPricing;
