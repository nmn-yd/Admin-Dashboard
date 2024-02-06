import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <header className="sticky top-0 bg-[#2962ff] py-1">
      <nav className="px-[14px]">
        <ul className="flex items-center">
          <li className="flex items-center justify-center">
            <a
              className="inline-block px-3 py-2.5 hover:rounded-[4.8px] hover:border-[#214ecc] hover:bg-[#2353d9]"
              href="#"
            >
              <GiHamburgerMenu size={16} color="#fff" />
            </a>
          </li>
          <li>
            <a className="inline-block px-3 py-2.5 text-[#ffffffa5]  " href="#">
              About
            </a>
          </li>
          <li className="ml-auto ">
            <a className="inline-block px-3 py-2.5" href="#">
              <svg
                className=" block"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </a>
          </li>
          <li className="">
            <a
              className="inline-block px-3 py-2.5 hover:rounded-[4.8px] hover:border-[#214ecc] hover:bg-[#2353d9]"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              className="inline-block px-3 py-2.5 hover:rounded-[4.8px] hover:border-[#214ecc] hover:bg-[#2353d9]"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a
              className="inline-block px-3 py-2.5 hover:rounded-[4.8px] hover:border-[#214ecc] hover:bg-[#2353d9]"
              href="#"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="../../public/user1.jpg"
                alt="User"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
