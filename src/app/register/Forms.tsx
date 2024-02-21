import { useFormik } from "formik";
import { useState } from "react";
import countryCodes from "@/utils/countryCodes.json";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
type FormProps = {
  handleSubmit: () => void;
};
export function EmailForm(props: FormProps) {
  const [show, setShow] = useState<boolean>(true);
  const emailForm = useFormik({
    initialValues: {
      email: "",
      emailCode: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <div className="w-full">
      <form
        className="flex flex-col [&>label]:text-sm [&>label]:font-bold space-y-4"
        onSubmit={emailForm.handleSubmit}
      >
        <label className="mb-2">Email</label>
        <input
          id="email"
          name="email"
          className="w-full bg-gray-100 rounded-md p-4 text-sm outline-primary-light hover:outline"
          onChange={emailForm.handleChange}
          value={emailForm.values.email}
          placeholder="Enter Email"
          type="text"
          required
          autoComplete="off"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <label className="mt-8 mb-2">Email Verification Code</label>

        <div className="flex flex-row w-full bg-themeGray items-center rounded-md">
          <input
            id="emailCode"
            name="emailCode"
            className="bg-themeGray p-4 w-full text-sm outline-primary-light hover:outline"
            onChange={emailForm.handleChange}
            value={emailForm.values.emailCode}
            placeholder="Enter email verification code"
            type="text"
            required
            autoComplete="off"
          />
          <button
            disabled={emailForm.values.email === "" ? true : false}
            onClick={() => {
              console.log("CLICKS");
            }}
            className="disabled:bg-themeGray bg-primary-light w-[30%] text-xs py-2 mr-4 rounded-md"
          >
            Get Code
          </button>
        </div>

        <label className="mt-8 mb-2" htmlFor="password">
          Password
        </label>

        <div className="flex flex-row w-full bg-themeGray items-center rounded-md pr-2">
          <input
            id="password"
            name="password"
            className="bg-themeGray p-4 w-full text-sm outline-primary-light hover:outline"
            onChange={emailForm.handleChange}
            value={emailForm.values.password}
            placeholder="Password"
            type={show?"text":"password"}
            required
            autoComplete="off"
          />
          {!show ? (
            <IoIosEye
              onClick={() => {
                setShow(!show);
              }}
              className="hover:cursor-pointer"
              size={26}
              color="gray"
            />
          ) : (
            <IoIosEyeOff
              onClick={() => {
                setShow(!show);
              }}
              className="hover:cursor-pointer"
              size={26}
              color="gray"
            />
          )}
        </div>
        <button
          type="submit"
          className="mt-10 w-full bg-primary-light my-4 py-4 rounded-md text-sm"
        >
          Login
        </button>
      </form>
    </div>
  );
}


export function MobileForm(props: FormProps) {
  const [show, setShow]= useState<boolean>(false)
  const mobileForm = useFormik({
    initialValues: {
      code: "",
      smsCode: "",
      number: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <div className="w-full">
      <form
        className="flex flex-col [&>label]:text-sm [&>label]:font-bold space-y-4"
        onSubmit={mobileForm.handleSubmit}
      >
        <label className="mb-2">Country</label>
        <div className="flex flex-row">
          <select
            id="code"
            name="code"
            className={
              "max-w-[20%] defo:text-blue-200 px-2 bg-themeGray mr-4 " +
              (mobileForm.values.code === "" ? " text-themeGray-dark" : " ")
            }
            onChange={mobileForm.handleChange}
            value={mobileForm.values.code}
          >
            <option value="" className="" disabled>
              Select Country
            </option>
            {countryCodes
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map((country, index) => {
                return (
                  <option key={index} value={country.dial_code}>
                    {country.dial_code !== mobileForm.values.code
                      ? country.name + " " + country.dial_code
                      : country.dial_code + " (" + country.name + ")"}
                  </option>
                );
              })}
          </select>
          <input
            id="number"
            name="number"
            className="w-full bg-gray-100 rounded-md p-4 text-sm outline-primary-light hover:outline"
            onChange={mobileForm.handleChange}
            value={mobileForm.values.number}
            placeholder="Enter Phone Number"
            type="number"
            required
            autoComplete="off"
          />
        </div>
        <label className="mt-8 mb-2">SMS Verification Code</label>
        <div className="flex flex-row w-full bg-themeGray items-center rounded-md">
          <input
            id="emailCode"
            name="emailCode"
            className="bg-themeGray p-4 w-full text-sm outline-primary-light hover:outline"
            onChange={mobileForm.handleChange}
            value={mobileForm.values.smsCode}
            placeholder="Enter sms verification code"
            type="text"
            required
          />
          <button
            disabled={
              mobileForm.values.number === "" || mobileForm.values.code === ""
            }
            onClick={() => {
              console.log("CLICKS");
            }}
            className="disabled:bg-themeGray bg-primary-light w-[30%] text-xs py-2 mr-4 rounded-md"
          >
            Get Code
          </button>
        </div>
        <label className="mt-8 mb-2" htmlFor="password">
          Password
        </label>

        <div className="flex flex-row w-full bg-themeGray items-center rounded-md pr-2">
          <input
            id="password"
            name="password"
            className="bg-themeGray p-4 w-full text-sm outline-primary-light hover:outline"
            onChange={mobileForm.handleChange}
            value={mobileForm.values.password}
            placeholder="Password"
            type={show?"text":"password"}
            required
            autoComplete="off"
          />
          {!show ? (
            <IoIosEye
              onClick={() => {
                setShow(!show);
              }}
              className="hover:cursor-pointer"
              size={26}
              color="gray"
            />
          ) : (
            <IoIosEyeOff
              onClick={() => {
                setShow(!show);
              }}
              className="hover:cursor-pointer"
              size={26}
              color="gray"
            />
          )}
        </div>
        <button
          type="submit"
          className="mt-10 w-full bg-primary-light my-4 py-4 rounded-md text-sm"
        >
          Login
        </button>
      </form>
    </div>
  );
}


export function QRForm(props: FormProps) {
  const qrForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  return <div></div>;
}
