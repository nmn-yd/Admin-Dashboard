import BounceRate from "./BounceRate";
import PageViews from "./PageViews";
import RevenueStatistics from "./RevenueStatistics";

function ProductStatistics() {
  return (
    <section className="mt-10 flex gap-10">
      <div className="flex flex-1 gap-10">
        <RevenueStatistics />
        <PageViews />
      </div>
      <BounceRate />
    </section>
  );
}

export default ProductStatistics;
