function SalesDetail({ type, amount, icontype, bgColor }) {
  const statStyle = {
    backgroundColor: bgColor,
  };
  return (
    <div className="mr-auto flex items-center gap-4 p-3 px-4">
      <div style={statStyle} className="rounded-full p-4">
        {icontype}
      </div>
      <div>
        <p className="text-[14px] text-slate-600">{type}</p>
        <h3 className="text-2xl font-semibold">{amount}</h3>
      </div>
    </div>
  );
}

export default SalesDetail;
