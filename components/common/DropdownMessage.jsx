import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-[#E2E8F0] bg-[#EFF4FB] hover:text-[#3C50E0]   "
        href="#"
      >
        <span
          className={`absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-[#DC3545] ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-[#DC3545] opacity-75"></span>
        </span>
        <AiOutlineMessage className="fill-current duration-300 ease-in-out" />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-[#E2E8F0] bg-white shadow   sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {messages.map((message) => (
            <li key={""}>
              <Link
                className="flex gap-4.5 border-t border-[#E2E8F0] px-4.5 py-3 hover:bg-[#F7F9FC]  "
                href="#"
              >
                <div className="h-12.5 w-12.5 rounded-full">
                  <IoPersonCircleOutline color="#316DCA" size={45} />
                </div>

                <div>
                  <h6 className="text-sm font-medium text-black ">
                    {message.name}
                  </h6>
                  <p className="text-sm">{message.message}</p>
                  <p className="text-xs">{message.time}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownMessage;

const messages = [
  {
    profile: IoPersonCircleOutline,
    name: "Mariya Desoja",
    message: "I like your confidence 💪",
    time: "2min ago",
  },
  {
    profile: IoPersonCircleOutline,
    name: "Cody Fisher",
    message: "I’m waiting for you response!",
    time: "2min ago",
  },
  {
    profile: IoPersonCircleOutline,
    name: "Henry Dholi",
    message: "I cam across your profile and...",
    time: "2min ago",
  },
  {
    profile: IoPersonCircleOutline,
    name: "Cody Fisher",
    message: "I’m waiting for you response!",
    time: "2min ago",
  },
  {
    profile: IoPersonCircleOutline,
    name: "Mariya Desoja",
    message: "I like your confidence 💪",
    time: "2min ago",
  },
];
