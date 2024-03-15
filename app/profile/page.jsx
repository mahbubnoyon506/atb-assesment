import React from "react";
import Image from "next/image";

import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaCheckCircle,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

import Button from "@/components/shared/Button";
import DefaultLayout from "@/components/DefaultLayout";

function Profile() {
  const user = {
    id: 3,
    name: "Atb Lab",
    designation: "Atb Lab Test Account",
    email: "baseit.tanveer@gmail.com",
    contact_number: "+880123456789",
    nickname: "baseit-tanveer",
    image: "",
    user_role_id: 3,
    status: 0,
    email_verified_at: null,
  };
  return (
    <DefaultLayout>
      <div className="h-full bg-gray-200 p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8 relative">
          <div className="absolute right-12 mt-4 rounded">
            <Button
              className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
              title="Settings"
            >
              <BsThreeDotsVertical />
            </Button>
          </div>
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
              alt="Background"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <Image
              src={user.image || "/images/placeholder.jpg"}
              width={250}
              height={250}
              className="w-40 border-4 border-white rounded-full"
              alt="Profile"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl"> {user.name} </p>
              <FaCheckCircle className="text-blue-500" />
            </div>
            <p className="text-gray-700">
              {user.designation || "Senior Software Engineer"}
            </p>
            <p className="text-sm text-gray-500">New York, USA</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <Button
                variant="sky"
                extraClassName="flex items-center text-sm space-x-1 transition duration-100"
              >
                <IoIosPersonAdd />
                <span>Connect</span>
              </Button>
              <Button extraClassName="flex items-center text-sm space-x-2 transition duration-100">
                <RiMessage2Fill />
                <span>Message</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700"> {user.name} </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Birthday:</span>
                  <span className="text-gray-700">24 Jul, 1991</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Joined:</span>
                  <span className="text-gray-700">
                    10 Jan 2022 (25 days ago)
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="text-gray-700">{user.contact_number} </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700"> {user.email} </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="text-gray-700">New York, US</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Languages:</span>
                  <span className="text-gray-700">English, Spanish</span>
                </li>
                <li className="flex items-center border-b py-2 space-x-2">
                  <span className="font-bold w-24">Elsewhere:</span>
                  <a href="#" title="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" title="Twitter">
                    <AiFillTwitterCircle size={19} />
                  </a>
                  <a href="#" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" title="Github">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold mb-6">Bio</h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet libero auctor, varius nisl ut, viverra nunc. Praesent nec
                hendrerit tortor. Duis dignissim felis ut nulla sollicitudin
                elementum. Duis venenatis metus a auctor rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
