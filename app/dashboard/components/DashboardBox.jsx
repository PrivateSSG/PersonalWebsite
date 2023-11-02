'use client'
import { useState, useEffect } from "react";
import Card from "./Card";
import { Client, Databases } from "appwrite";
import ShowCateForms from "./ShowCateForms";

const DashboardBox = () => {
  const [englishForm, setEnglishFOrm] = useState(0)
  const [itForm, setItForm] = useState(0)
  const [coachingForm, setCoachingForm] = useState(0)
  const [schoolForm, setSchoolForm] = useState(0)
  const [selectCategory, setSelectCategory] = useState("")
  const [forms, setForms] = useState([])

  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6533c1336f3a644753c1');
  const database = new Databases(client)


  const fetchData = async () => {
    const databaseId = "6537b84f581243c8d965";
    const collectionId = "6537bef49fd2fe4d0630"
    const response = await database.listDocuments(databaseId, collectionId)
    setForms(response.documents)
  }


  useEffect(() => {
    const fetchFormCount = async () => {
      const databaseId = "6537b84f581243c8d965";
      const collectionId = "6537bef49fd2fe4d0630"
      const response = await database.listDocuments(databaseId, collectionId)
      const englishFormCount = response.documents.filter((document) => document.interested.includes("English")).length
      const scholFormCount = response.documents.filter((document) => document.interested.includes("School")).length
      const itFormCount = response.documents.filter((document) => document.interested.includes("IT")).length
      const coachingFormCount = response.documents.filter((document) => document.interested.includes("Coaching")).length

      setEnglishFOrm(englishFormCount)
      setCoachingForm(coachingFormCount)
      setItForm(itFormCount)
      setSchoolForm(scholFormCount)
    }
    fetchFormCount();
    fetchData();
  }, [])

  const handleClickCategory = (category) => {
    setSelectCategory(category)
  }
  const filterForms = forms.filter((form) => form.interested.includes(selectCategory))


  return (
    <>
      <Card>
        <h1 className="text-2xl text-teal-600 font-bold">Dashboard</h1>
        <div className="max-lg:space-x-3 flex space-x-5 mt-3 mb-3 max-lg:flex-wrap max-lg:flex-col max-lg:space-y-5 max-lg:items-center max-lg:justify-center">
          <button onClick={() => handleClickCategory("English")} className="bg-sky-500 p-3 text-white font-bold max-lg:p-4">
            English Student Forms <span>{englishForm}</span>
          </button>
          <button onClick={() => handleClickCategory("IT")} className="bg-sky-500 p-3 text-white font-bold max-lg:p-4">
            IT Student Forms <span>{itForm}</span>
          </button >
          <button onClick={() => handleClickCategory("Coaching")} className="bg-sky-500 p-3 text-white font-bold max-lg:p-4">
            Coaching Student Forms <span>{coachingForm}</span>
          </button>
          <button onClick={() => handleClickCategory("School")} className="bg-sky-500 p-3 text-white font-bold max-lg:p-4">
            School Student Forms <span>{schoolForm}</span>
          </button>
        </div>
      </Card>
      <Card>

        <div className="text-2xl font-bold mx-60">
          {/* <h2>No Data</h2> */}
        </div>
        <table className="table-auto">
          <thead >
            <tr>
              <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[12px]">Name</th>
              <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[12px]">Father Name</th>
              <th className="px-6 py-3 text-center text-gray-700 uppercase font-bold text-[12px]">Email</th>
              <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[12px]">Contact</th>
              <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[12px]">Interested In</th>
              <th className="px-6 py-3 text-left text-gray-700 uppercase font-bold text-[12px]">Class Interested</th>
            </tr>
          </thead>


          <tbody>
            {filterForms && filterForms.map((form) => (
              <tr>
                <td className="px-6 py-4 text-left">{form.name}</td>
                <td className="px-6 py-4 text-left">{form.fatherName}</td>
                <td className="px-6 py-4 text-left">{form.email}</td>
                <td className="px-6 py-4 text-left">{form.contact}</td>
                <td className="px-6 py-4 text-left">{form.interested}</td>
                <td className="px-6 py-4 text-left">{form.classInterest}</td>
              </tr>
            ))

            }

          </tbody>


        </table>

      </Card>
    </>
  );
};

export default DashboardBox;
