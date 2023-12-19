import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="mx-auto  px-2 sm:px-6  bg-red-600">
      <div className="md:ml-20 relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/" className="cursor-pointer">
              <img
                className="h-8 w-auto"
                src={process.env.PUBLIC_URL + "../public/assets/img/logo.png"}
                alt="Nimananda SH"
                style={{ height: "48px" }}
              />
            </Link>

            {/*  */}
          </div>
        </div>
        <div className="md:mr-20 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <h1 className="text-sm text-slate-100 font-medium sm:text-md">
            +977-9851016192
            <span className="absolute " />
            <span className="sr-only">Contact number</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
