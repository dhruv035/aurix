"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

enum Options {
  EMAIL = "Email",
  MOBILE = "Mobile",
  QRCODE = "QR Code",
}
export default function Home() {
  const [selected, setSelected] = useState<Options>(Options.EMAIL);
  console.log("Selected", selected);
  return (
    <main className="flex flex-col lg:p-4 text-2xl min-h-[100vh] sm:min-h-0 h-full">
      <div className="flex flex-row justify-center">
        <Image
          src="/Home.webp"
          alt="Home Image"
          className="hidden lg:flex"
          width={600}
          height={400}
          priority
        />

        <LoginForm handleSubmit={() => {}} />
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
                ? "border-b-2 border-yellow-400"
                : "") + " py-2 "
            }
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}

type LoginFormProps = {
  handleSubmit: () => void;
};
function LoginForm(props: LoginFormProps) {
  const [selected, setSelected] = useState<Options>(Options.EMAIL);
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <div className="w-full h-full bg-white min-h-[100vh] sm:min-h-0 mt-14 lg:max-w-[30vw] p-8 rounded-lg">
      Aurix Login
      <br />
      <br />
      <Tabs selected={selected} setSelected={setSelected} />
      <div className="w-full">
        <form>
          <label>Email</label>
          <br />
          <input
            className="w-full bg-gray-200 rounded-md p-2 text-sm outline-yellow-200 hover:outline"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
            placeholder="Enter Email"
            type="email"
          />
          <label>Password</label>
          <br />
          <input
            className="w-full bg-gray-200 rounded-md p-2 text-sm outline-yellow-200 hover:outline"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
            placeholder="Enter Email"
            type="password"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 my-4 py-2 rounded-full text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
