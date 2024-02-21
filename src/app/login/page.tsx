"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { EmailForm, MobileForm, QRForm } from "./Forms";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
enum Options {
  EMAIL = "Email",
  MOBILE = "Mobile",
  QRCODE = "QR Code",
}
export default function Login() {
  const [selected, setSelected] = useState<Options>(Options.EMAIL);
  console.log("Selected", selected);
  return (
    <main className="flex flex-col text-sm lg:p-4 min-h-[100vh] sm:min-h-0 h-full">
      <div className="flex flex-row lg:space-x-16 justify-center">
        <div className="flex items-center">
          <Image
            src="/Home.webp"
            alt="Home Image"
            className="hidden lg:block"
            width={500}
            height={0}
            priority
          />
        </div>
        <div className="w-full h-full bg-white min-h-[100vh] sm:min-h-0 mt-14 sm:w-[464px] space-y-8 p-8 rounded-lg">
          <p className="text-2xl">Aurix Login</p>
          <br />
          <br />
          <Tabs selected={selected} setSelected={setSelected} />
          {selected === Options.EMAIL ? (
            <EmailForm handleSubmit={() => {}} />
          ) : selected === Options.MOBILE ? (
            <MobileForm handleSubmit={() => {}} />
          ) : (
            <QRForm handleSubmit={() => {}} />
          )}
          <div className="flex flex-row justify-content-center items-center">
            <hr className="h-[2px] w-7/12"></hr>
            <p className="text-xs px-6 text-gray-400">or</p>{" "}
            <hr className="h-[2px] w-7/12"></hr>
          </div>
          <div className="flex gap-y-4 sm:justify-between flex-col text-center sm:flex-row ">
            <button className="flex flex-row w-full sm:w-[190px] text-sm bg-themeGray px-2 py-4 rounded-md justify-center">
              <FcGoogle size={20} className="mr-1" />
              Continue with Google
            </button>
            <button className="flex flex-row w-full sm:w-[190px] text-sm bg-themeGray px-2 py-4 rounded-md justify-center">
              <GrApple size={20} className="mr-1" />
              Continue with Apple
            </button>
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row [&_a]:text-primary-dark">
            <a href={""} className="text-nowrap">
              Forgot Password?
            </a>
            <div className="w-fit sm:w-full flex flex-row-reverse">
              <a href="/register" className="ml-4">Sign Up Now</a>
               <p>Not an Aurix user yet?</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

type TabProps = {
  selected: Options;
  setSelected: Dispatch<SetStateAction<Options>>;
};
function Tabs(props: TabProps) {
  return (
    <div className="flex flex-row space-x-8 text-sm font-bold border-b-[2px] border-gray-200">
      {Object.values(Options).map((option, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props.setSelected(option);
            }}
            className={
              (props.selected === option
                ? "border-b-2 border-primary-dark"
                : "") + " py-2 hover:cursor-pointer"
            }
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}
