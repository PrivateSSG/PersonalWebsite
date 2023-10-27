import React from "react";
import JobSection from "./components/JobSection";

export default function page() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Job Vacancies</h1>
      <JobSection
        job="Senior Software Enginner"
        hour="Fulltime"
        skill="Enginnering"
        place="San Fransisco"
        salary="60K-100K"
      />
      <JobSection
        job="VFX Artist"
        hour="Part-Time"
        skill="Autodesk Maya"
        place="New York"
        salary="160K-300K"
      />
    </>
  );
}
