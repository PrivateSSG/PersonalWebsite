import React from "react";

export default function page() {
  return (
    <>
      <div className="my-7 mx-28 w-[50em] max-lg:mx-7 max-lg:w-[23em]">
        <h1 className="text-3xl pb-6">Admission Requirements</h1>
        <ul className="mx-4 list-decimal">
          <li className="text-[18px]">
            Parents are requested to fill in the admission form and pay the
            registration fees after which they will receive:
          </li>
          <ol className="mb-4 mt-4 list-disc">
            <li className="text-[18px]">Relevant Fee structure slip</li>
            <li className="text-[18px]">
              Appointment card with date & time for the test
            </li>
            <li className="text-[18px]">Registration receipt</li>
            <li className="text-[18px]">
              Admission and fee payment information
            </li>
            <li className="text-[18px]">Prospectus & Newsletter</li>
          </ol>
          <li className="text-[18px]">
            The documents to be attached with the Admission Form includes:
          </li>
          <ol className="mb-4 mt-4 list-disc">
            <li className="text-[18px]">2 recent passport size photographs</li>
            <li className="text-[18px]">
              Attested photocopy of Birth Certificate
            </li>
            <li className="text-[18px]">In case of transfer:</li>
            <ol style={{ listStyle: "square" }}>
              <li className="text-[18px] ml-4">Report card from last school</li>
              <li className="text-[18px] ml-4">
                A photocopy of Provisional Certificate and Character Certificate
                from last institution attended
              </li>
            </ol>
          </ol>
          <li className="text-[18px] mb-5">
            Test and interview with both the parents will be scheduled.
          </li>
          <li className="text-[18px] mb-5">
            Test and interview with both the parents will be scheduled.
          </li>
          <li className="text-[18px] mb-5">
            Parents are given the admission fee challan/bill along with the
            guidelines of payment.
          </li>
        </ul>
        <div>
          <table className="table-auto border-collapse border-gray-200 border-2">
            <thead>
              <tr className="bg-blue-100 text-black text-lg">
                <th>CLASS LEVELS</th>
                <th>AGE ON 31 JULY (YEARS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">PLAYGROUP</td>
                <td>2.5+</td>
              </tr>
              <tr>
                <td className="py-1 bg-blue-100">NURSERY</td>
                <td className="py-1 bg-blue-100">3+</td>
              </tr>
              <tr>
                <td>KINDERGARTEN</td>
                <td>4+</td>
              </tr>
              <tr>
                <td className="py-1 bg-blue-100">CLASS 1</td>
                <td className="py-1 bg-blue-100">5+</td>
              </tr>
              <tr>
                <td>CLASS 2</td>
                <td>6+</td>
              </tr>
              <tr>
                <td className="py-1 bg-blue-100">CLASS 3</td>
                <td className="py-1 bg-blue-100">7+</td>
              </tr>
              <tr>
                <td>CLASS 4</td>
                <td>8+</td>
              </tr>
              <tr>
                <td className="py-1 bg-blue-100">CLASS 5</td>
                <td className="py-1 bg-blue-100">9+</td>
              </tr>
              <tr>
                <td>CLASS 6</td>
                <td>10+</td>
              </tr>
              <tr>
                <td className="py-1 bg-blue-100">CLASS 7</td>
                <td className="py-1 bg-blue-100">11+</td>
              </tr>
              <tr>
                <td>CLASS 8</td>
                <td>12+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
