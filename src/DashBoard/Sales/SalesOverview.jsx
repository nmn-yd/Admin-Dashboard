import SectionHeader from "../../UI/SectionHeader";
import SalesPricing from "./SalesPricing";
import SalesSummary from "./SalesSummary";

export default function SalesOverview() {
  return (
    <section className="rounded-md border-blue-700 bg-[#ffffff] p-6 shadow-md ">
      <SectionHeader
        heading="Sales Overview"
        content="Overview of Lastest Month"
      />
      <SalesPricing />
      <SalesSummary />
    </section>
  );
}
