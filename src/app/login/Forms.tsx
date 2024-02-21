import { useFormik } from "formik";
import { useState } from "react";
import countryCodes from "@/utils/countryCodes.json";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
type FormProps = {
  handleSubmit: () => void;
};
export function EmailForm(props: FormProps) {
  const [show,setShow] = useState<boolean>(false)
  const emailForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
  });
  console.log("EMAILFORM",emailForm)
  return (
    <div className="w-full">
      <form
        className="flex flex-col [&>label]:text-sm [&>label]:font-bold"
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
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <p></p>
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
  const [show,setShow]=useState<boolean>(false)
  const mobileForm = useFormik({
    initialValues: {
      code: "",
      number: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <div className="w-full">
      <form
        className="flex flex-col [&>label]:text-sm [&>label]:font-bold"
        onSubmit={mobileForm.handleSubmit}
      >
        <label className="mb-2">Country</label>
        <div className="flex flex-row">
          <select
            name="code"
            className="max-w-[20%] px-2 bg-themeGray mr-4"
            onChange={mobileForm.handleChange}
            value={mobileForm.values.code}
          >
            <option value="" disabled>
              Country Code
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
                      : country.dial_code + " (" + country.name+ ")"}
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
          />
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
