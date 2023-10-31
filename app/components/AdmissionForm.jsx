"use client";
import { useState } from "react";
import getConnect from "@/libs/connection";

// import { databases, ID, account } from "@/appwrite";

export default function AdmissionForm() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [classInterest, setClassInterest] = useState("");
  const [interested, setInterested] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    await getConnect();

    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        fatherName,
        phoneNumber: contact,
        interested,
      })

    })
    console.log(response)
    if (response.ok) {
      alert("User Created ")
    }
  };

  const checkBox = [
    { value: "School", label: "School" },
    { value: "English", label: "English" },
    { value: "it", label: "it" },
    { value: "Coaching", label: "Coaching" },
  ]
  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked && !interested.includes(value)) {
      setInterested([...interested, value]);
    } else if (!checked && interested.includes(value)) {
      setInterested(interested.filter((item) => item !== value));
    }
  };
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
              {/* <h1>Interested In</h1>
              <label>School</label>
              <input type="checkbox" name={interested.school} value={interested.school} onChange={handleChange} />
              <label>English</label>
              <input type="checkbox" value={interested.english} onChange={handleChange} />
              <label>IT</label>
              <input type="checkbox" value={interested.it} onChange={handleChange} />
              <label>Coaching</label>
              <input type="checkbox" value={interested.coaching} onChange={handleChange} /> */}
              {checkBox.map((checkbox) => (
                <>
                  <input
                    type="checkbox"
                    key={checkbox.value}
                    name="interested"
                    value={checkbox.value}
                    checked={interested.includes(checkbox.value)}
                    onChange={handleChange}
                  />
                  <label>{checkbox.label}</label>
                </>
              ))}
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
