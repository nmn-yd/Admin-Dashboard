import EmailCampains from "./EmailCampains";
import SiteAnalysis from "./SiteAnalysis";

function ProductAnalytics() {
  return (
    <section className="flex gap-10 mt-10">
      <EmailCampains />
      <SiteAnalysis />
    </section>
  );
}

export default ProductAnalytics;
