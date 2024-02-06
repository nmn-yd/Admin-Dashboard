import ProjectsOverview from "./DashBoard/ProjectsDetail/ProjectsOverview";
import SalesOverview from "./DashBoard/Sales/SalesOverview";
import ProductStatistics from "./DashBoard/Statistics/ProductStatistics";
import ProductAnalytics from "./DashBoard/Analysis/ProductAnalytics";
import Header from "./UI/Header";
import InteractionPanel from "./DashBoard/UserInteraction/InteractionPanel";

function App() {
  return (
    <>
      <Header />
      <main className=" text-sans mx-auto my-10 max-w-7xl px-4">
        <SalesOverview />
        <ProductAnalytics />
        <ProductStatistics />
        <ProjectsOverview />
        <InteractionPanel />
      </main>
    </>
  );
}

export default App;
