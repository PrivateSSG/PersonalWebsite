"use client";
import { useState } from "react";
import getConnect from "@/libs/connection";

// import { databases, ID, account } from "@/appwrite";

export default function AdmissionForm() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState("");
  const [interested, setInterested] = useState("");

  const checkList = {
    school: false,
    it: false,
    coaching: false,
    english: false,
  };
  const [checkbox, setCheckedState] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getConnect();
    if (!name || !fatherName || !contact || !email || !interested) {
      alert("Title and Description is required");
      return;
    }

    const response = await fetch("http://localhost:3000/api/user", {
      body: JSON.stringify({
        name,
        fatherName,
        contact,
        email,
        interested,
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      alert("User Created");
    }
    setName("");
    setFatherName("");
    setContact("");
    setEmail("");
    setInterested("");

    //submit form
    // const document = {
    //   name,
    //   fatherName,
    //   contact,
    //   email,
    //   checkbox,
  };

  // // Save the document to Appwrite
  // const data = document;
  // await databases.createDocument(
  //   "6537b84f581243c8d965",
  //   "6537bef49fd2fe4d0630",
  //   ID.unique(),
  //   data
  // );
  // console.log(data);

  // const handleChange = (e) => {
  //   // const newCheckBox = { ...checkbox };
  //   // newCheckBox[e.target.value] = e.target.checkd;
  //   // setCheckedState(newCheckBox);
  // };
  return (
    <>
      <div className="p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-3/4  max-lg:mb-5 mb-5    mx-auto">
        <h1 className="text-2xl text-center p-2">Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full space-y-6">
            <input
              className="border border-gray-400 py-2 px-2 rounded-lg"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border border-gray-400 py-2 px-2 rounded-lg"
              type="text"
              placeholder="Father Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
            <div className="flex w-full space-x-4">
              <input
                type="number"
                className="border border-gray-400 py-2 w-full px-2 rounded-lg"
                placeholder="Contact#"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <input
                type="email"
                className="border border-gray-400 py-2 px-2 rounded-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex max-lg:flex-wrap space-x-2">
              <h1>Interested In</h1>
              <label>School</label>
              <input type="checkbox" value={checkbox.school} />
              <label>English</label>
              <input type="checkbox" value={checkbox.english} />
              <label>IT</label>
              <input type="checkbox" value={checkbox.it} />
              <label>Coaching</label>
              <input type="checkbox" value={checkbox.coaching} />
            </div>
            <div className="flex max-lg:flex-wrap max-lg:space-x-1  space-x-4 items-center">
              <label>Class Interested In</label>
              <input
                className="border border-gray-400 py-2 px-2 rounded-lg"
                type="text"
                placeholder="ex: K.G"
                value={interested}
                onChange={(e) => setInterested(e.target.value)}
              />
            </div>
            <div className="mt-9">
              <div className="flex justify-center">
                <button className="bg-green-500 px-10 hover:bg-green-600 duration-200 py-2 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
