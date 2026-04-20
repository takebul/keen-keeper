import React from "react";

import { FaFlag } from "react-icons/fa";
import { Link } from "react-router";

export function ErrorPage() {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <FaFlag className="w-20 h-20 mx-auto" />
        <p
          variant="h1"
          color="blue-gray"
          className="mt-6 text-3xl leading-snug md:text-4xl"
        >
          Error 404 <br /> It looks like something went wrong.
        </p>
        <p className="mt-7 mb-6 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it. Please try refreshing the
          page or come back later.
        </p>
        <Link
          to={"/"}
          color="gray"
          className="btn btn-primary w-full px-4 md:w-32"
        >
          back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
