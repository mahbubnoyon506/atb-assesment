import { FaPlayCircle } from "react-icons/fa";

import Button from "@/components/shared/Button";
import DefaultLayout from "@/components/DefaultLayout";
import InputField from "@/components/forms/InputField";
import Image from "next/image";


export default function Home() {
  return (
    <DefaultLayout >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-12">
        <div className="flex flex-col justify-center">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Find Your Career <br />to Make a Better Life</h1>
              <p className="text-lg">Creating a beautiful job website is not easy <br /> always. To make your life easier, we are <br /> introducing Jobcamp template.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <form action="#" className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-1/2">
                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">What</label>
                    <InputField id="keyword" className="w-full" type="text" placeholder="What jobs you want?" />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Where</label>
                    <InputField id="location" className="w-full sm:text-sm" type="text" placeholder="Location" />
                  </div>
                </div>
                <div>
                  <Button variant="sky" extraClassName="w-full text-center flex justify-center">Search</Button>
                </div>
              </form>
              <div className="mt-4 flex items-center gap-2 space-y-2">
                <p className="text-sm font-medium text-gray-700">Popular Keywords:</p>
                <ul className="flex flex-wrap gap-2">
                  <li className="outline outline-1 outline-slate-300 p-1 "><a href="#" className="text-blue-600 hover:text-blue-500">Administrative</a></li>
                  <li className="outline outline-1 outline-slate-300 p-1 "><a href="#" className="text-blue-600 hover:text-blue-500">Android</a></li>
                  <li className="outline outline-1 outline-slate-300 p-1 "><a href="#" className="text-blue-600 hover:text-blue-500">app</a></li>
                  <li className="outline outline-1 outline-slate-300 p-1 "><a href="#" className="text-blue-600 hover:text-blue-500">ASP.NET</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-lg">
            <div className="relative">
              <Image width={500} height={500} src="/images/hero-image.png" alt="Hero Image" className="w-full rounded-lg" />
              <div className="absolute inset-0 flex justify-center items-center">
                <FaPlayCircle className="absolute text-white cursor-pointer" size={50} />
                <div className="w-24 h-24 bg-blue-600 opacity-25 animate-ping rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
