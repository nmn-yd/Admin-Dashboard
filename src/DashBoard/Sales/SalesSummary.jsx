import SalesDetail from "./SalesDetail";
import { BsWallet } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { BsArchive } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const salesData = [
  {
    id: 1,
    type: "Wallet Balance",
    amount: "$3,567.53",
    icon: <BsWallet size={24} color="pink" />,
    bgColor: "#d5f3f2",
  },
  {
    id: 2,
    type: "Referral Earnings",
    amount: "$769.08",
    icon: <CiLink size={24} color="red" />,
    bgColor: "#f8dddd",
  },
  {
    id: 3,
    type: "Estimate Sales",
    amount: "$5,489",
    icon: <BsArchive size={24} color="#3799ff" />,
    bgColor: "#f8ecdc",
  },
  {
    id: 4,
    type: "Carninqs",
    amount: "$23,568",
    icon: <HiOutlineCurrencyDollar size={24} color="blue" />,
    bgColor: "#d3edfa",
  },
];
function SalesSummary() {
  return (
    <div className="border-rgb(29, 41, 51)-500 flex items-center justify-start gap-4 border-t-2 p-4">
      {salesData.map((item) => (
        <SalesDetail
          type={item.type}
          key={item.id}
          amount={item.amount}
          icontype={item.icon}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
}

export default SalesSummary;
