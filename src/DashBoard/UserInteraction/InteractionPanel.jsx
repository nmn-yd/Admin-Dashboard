import ChatPanel from "./ChatPanel";
import Commets from "./Commets";

function InteractionPanel() {
  return (
    <section className="mt-10 flex gap-10">
      <Commets />
      <ChatPanel />
    </section>
  );
}

export default InteractionPanel;
