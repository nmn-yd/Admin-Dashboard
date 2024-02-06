function Comment({ user }) {
  const statusColor = {
    backgroundColor:
      user.status === "Pending"
        ? "#2962ff"
        : user.status === "Approved"
          ? "#0bb7af"
          : "#f64e60",
  };

  return (
    <div className="mb-3 flex gap-5">
      <div>
        <img className="h-13 w-16 rounded-full" src={user.profile} alt="User" />
      </div>
      <div className="space-y-1">
        <h2 className="text-xl">{user.name}</h2>
        <p>{user.content}</p>
        <div className="flex items-center">
          <span
            style={statusColor}
            className={` inline-block rounded-lg  px-2 py-1 text-xs font-semibold leading-none text-white`}
          >
            {user.status}
          </span>
          <span className="ml-auto inline-block">{user.creationDate}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
