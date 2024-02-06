import SectionHeader from "../../UI/SectionHeader";

const emailStats = [
  { id: 1, color: "#3699ff", name: "Open", ratio: 45 },
  { id: 2, color: "#2962ff", name: "Clicked", ratio: 15 },
  { id: 3, color: "#ee9d01", name: "Un-Open", ratio: 25 },
  { id: 4, color: "#f64e60", name: "Bounced", ratio: 18 },
];

function EmailCampains() {
  return (
    <div className=" flex-1 rounded-md border-blue-700 bg-[#ffffff] p-6 shadow-md ">
      <SectionHeader
        heading="Email Campaigns"
        content="Overview of Lastest Month"
      />
      <div className="flex">
        <div className="flex-1">Graph</div>
        <div className="flex-1">
          <h1 className="text-4xl font-semibold">45%</h1>
          <p>Open Ratio for Campaigns</p>
          <ul className="mt-2 flex flex-col gap-3">
            {emailStats.map((stat) => (
              <EmailStatComponent key={stat.id} stat={stat} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmailCampains;

const EmailStatComponent = ({ stat }) => {
  const statStyle = {
    backgroundColor: stat.color,
  };
  return (
    <li className="flex gap-3">
      <span style={statStyle} className={`rounded-full p-3`}></span>
      <span>{stat.name}</span>
      <span className="ml-auto">{stat.ratio}%</span>
    </li>
  );
};
