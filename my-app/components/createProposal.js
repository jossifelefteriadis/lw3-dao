import React, { useState } from "react"
import styles from "../styles/CreateProposal.module.css";
import { useContractWrite, useContract } from "@thirdweb-dev/react"

// import createProposalTransaction from "../utils/createProposalTransaction";
// import FetchData from "./fetchData";

export default function CreateProposal() {
  const [title, setTitle] = useState("Name")

  const [desc, setDesc] = useState("Description")
  const [pdfLink, setPdfLink] =  useState("abc")

  const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393")
  const {
    mutate: createProposal,
    isLoading,
    error
  } = useContractWrite(contract, "createProposal")

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDesc = (e) => {
    setDesc(e.target.value)
    
  }

  const handlePdfLink = (e) => {
    console.log(e.target.value)
    setPdfLink(e.target.value)
    
  }

  const submitForm = (e) => {
    e.preventDefault()
    let result = createProposal([title, desc, pdfLink])
    console.log(result)
  }

    return (
      <section className={`${styles.main} flex flex-col items-center mt-11`}>
        <div className=" font-semibold text-2xl mb-8 ml-11 mt-11 first-letter:text-pink-500">Create A New Proposal</div>
        <section className={`my-8 w-1/2 h-96 flex flex-col justify-center py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}>
        <form className="w-full">
          <section className="flex flex-col flex-wrap content-center">
            <section className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="title">
                Proposal Title
              </label>
              <input onChange={handleTitle} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Title" />
            </section>
            <section className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold my-2" htmlFor="description">
                Proposal Description
              </label>
              <input onChange={handleDesc} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="DESCRIPTION" />
            </section>
            <section className="w-full md:w-3/4 px-3 mb-6 md:mb-6">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mt-4 mb-2" htmlFor="pdfLink">
                Proposal PDF Link
              </label>
              <input onChange={handlePdfLink} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pdfLink" type="text" placeholder="Pdf Link" />
            </section>
            <section className="w-full md:w-3/4 px-3 ml-14">
              <button onClick={submitForm} className="bg-transparent w-3/4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-6 border border-blue-500 hover:border-transparent rounded">
                SUBMIT
              </button>
            </section>
          </section>
        </form>
      </section>
    </section>
  );
}
