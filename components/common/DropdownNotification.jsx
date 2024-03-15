import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { FaRegBell } from "react-icons/fa";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef(null);
  const dropdown = useRef(null);

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
        href="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-[#E2E8F0] bg-[#EFF4FB] hover:text-[#3C50E0]   "
      >
        <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-[#DC3545] ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-[#DC3545] opacity-75"></span>
        </span>
        <FaRegBell className="fill-current duration-300 ease-in-out" />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-[#E2E8F0] bg-white shadow sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {notifications.map((notification, index) => (
            <li key={index}>
              <Link
                className="flex flex-col gap-2.5 border-t border-[#E2E8F0] px-4.5 py-3 hover:bg-[#F7F9FC]  "
                href="#"
              >
                <p className="text-sm">{notification.content}</p>

                <p className="text-xs"> {notification.time} </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;

const notifications = [
  {
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    time: "01 Dec, 2024",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    time: "01 Dec, 2024",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    time: "01 Dec, 2024",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    time: "01 Dec, 2024",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    time: "01 Dec, 2024",
  },
];
