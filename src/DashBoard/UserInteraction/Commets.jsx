import PanelHeader from "../../UI/PanelHeader";
import Comment from "./Comment";
const CommentsCollection = [
  {
    id: 1,
    name: "James Anderson",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore fugit voluptatum?",
    status: "Pending",
    profile: "../../../public/user1.jpg",
    creationDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },
  {
    id: 2,
    name: "Johnathan Doeting",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore fugit voluptatum?",
    status: "Approved",
    profile: "../../../public/user2.jpg",
    creationDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },
  {
    id: 3,
    name: "Daniel Kristeen",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore fugit voluptatum?",
    status: "Approved",
    profile: "../../../public/user3.jpg",
    creationDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },
  {
    id: 4,
    name: "Jan Petrovic",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore fugit voluptatum?",
    status: "Rejected",
    profile: "../../../public/user4.jpg",
    creationDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },
  {
    id: 5,
    name: "Hanna Gover",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore fugit voluptatum?",
    status: "Pending",
    profile: "../../../public/user1.jpg",
    creationDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },

  {
    id: 6,
    name: "Michael Jorden",
    profile: "../../../public/user5.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore fugit voluptatum?",
    status: "Pending",
    creationDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  },
];

function Commets() {
  return (
    <div className="max-h-[748px] flex-1 overflow-scroll rounded-md border-blue-700 bg-[#ffffff] p-6 shadow-md">
      <PanelHeader
        heading="Recent Comments"
        content="Comments that needs to read"
      />
      <div className="px-4">
        {CommentsCollection.map((user) => (
          <Comment key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Commets;
