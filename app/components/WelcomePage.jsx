import React from "react";

export default function WelcomePage() {
  return (
    <>
      <div
        className="container flex flex-col max-lg:flex max-lg:flex-col max-lg:items-center items-center font-bold"
        key="welcome-page"
      >
        <h1 className="text-[33px] max-lg:text-sm max-lg:flex max-lg:justify-center max-lg:w-[210px]">
          WELCOME TO
        </h1>
        <h1 className="text-red-600 text-[33px]  max-lg:text-sm max-lg:text-center max-lg:w-[210px]">
          PEARL SATELLITE EDUCATIONAL INSTITUTE
        </h1>
        <p className="text-[14px] max-lg:text-[11px] max-lg:w-[230px] font-bold text-gray-600 mt-4">
          PSEI is a top-quality educational institution that is dedicated to
          helping its students succeed.
        </p>
        <p className="text-[16px] max-lg:text-sm max-lg:w-[240px] w-[590px] font-normal text-center mt-5">
          Our mission aims to provide quality and excellence in education of an
          international standard of the growing world. We aim for perfection
          through quality leadership. quality human resource development.
          bringing benefit to our students.{" "}
        </p>
      </div>
    </>
  );
}
