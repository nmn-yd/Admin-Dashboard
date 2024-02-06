function PanelHeader({ heading, content }) {
  return (
    <div className="mb-4">
      <h1 className=" mb-1 text-[18px] font-semibold text-[#1e2a35cf]">
        {heading}
      </h1>
      <p className=" text-[#1a1f23ba]">{content}</p>
    </div>
  );
}

export default PanelHeader;
