import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MdOutlinePerson, MdSettings } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-[#1C2434] ">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/placeholder.jpg"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>
        <FaChevronDown className="hidden fill-current sm:block" />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow   ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 ">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <MdOutlinePerson size={25} className="inline" />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <TiContacts size={25} className="inline" />
              My Contacts
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <MdSettings size={25} className="inline" />
              Account Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <CiLogout size={25} className="inline" />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
