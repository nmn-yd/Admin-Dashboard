function SectionHeader({ heading, content }) {
  return (
    <div className="mb-2 flex justify-between">
      <div className="">
        <h4 className=" mb-1 text-[18px] font-semibold text-[#1e2a35cf]">
          {heading}
        </h4>
        <p className=" text-[#1a1f23ba]">{content}</p>
      </div>
      <div>
        <select id="frequency" name="frequency">
          <option value="monthly">Monthly</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    </div>
  );
}

export default SectionHeader;
