const tableData = [
  {
    id: 1,
    teamLead: "Hanna Govert",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "#f64e60",
    weeks: 35,
    budget: "95k",
    profile: "user1.jpg",
  },
  {
    id: 2,
    teamLead: "Daniel Kristeent",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "#0bb7af",
    weeks: 35,
    budget: "95k",
    profile: "user2.jpg",
  },
  {
    id: 3,
    teamLead: "Hanna Govert",
    email: "hgover@gmail.com",
    project: "	Elite React",
    status: "#ee9d01",
    weeks: 35,
    budget: "95k",
    profile: "user3.jpg",
  },
  {
    id: 4,
    teamLead: "Hanna Govert",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "#f64e60",
    weeks: 35,
    budget: "95k",
    profile: "user4.jpg",
  },
  {
    id: 5,
    teamLead: "Hanna Govert",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "#0bb7af",
    weeks: 35,
    budget: "95k",
    profile: "user5.jpg",
  },
];

export default function ProjectsInformation() {
  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Team Lead
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Project
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Weeks
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Budget
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {tableData.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ row }) {
  const projectstatus = {
    backgroundColor: row.status,
  };
  return (
    <tr>
      <td className="2 whitespace-nowrap px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <img
              className="h-8 w-8 rounded-full"
              src={row.profile}
              alt="User"
            />
          </div>
          <div>
            {row.teamLead}
            <br></br>
            {row.email}
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">{row.project}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <span
          style={projectstatus}
          className="inline-block rounded-full p-2 "
        ></span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">{row.weeks}</td>
      <td className="whitespace-nowrap px-6 py-4">{row.budget}</td>
    </tr>
  );
}
