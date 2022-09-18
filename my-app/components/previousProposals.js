import { useContract, useContractRead } from "@thirdweb-dev/react"
import { useState } from "react";
// import { JsonLiteral } from "@thirdweb-dev/sdk/dist/declarations/src/schema";
import styles from "../styles/PreviousProposals.module.css";
import readNumOfProposals from "../utils/readNumOfProposals";

export default function PreviousProposals() {
  const [proposals, setProposals] = []

  const [numProposals, setNumProposals] = useState()
  const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393");
  const { data, isLoading, error } = useContractRead(
    contract,
    "proposals",
    id,
  );

  setNumProposals(readNumOfProposals())
  for(var i = 0; i < numProposals; i++) {
    setProposals(...proposals, data)
  }

  



  // console.log(proposals)
    
  return (
    <section className={styles.main}>
    <section className={`${styles.main} flex flex-col items-center mt-11`}>
      <section className="font-semibold text-2xl mb-8 mt-11 first-letter:text-pink-500">
        Proposal
      </section>
      <section className="flex flex-col flex-wrap content-center w-4/6 mb-4">
        {/* { //isLoading ? <h1>Loading PRoposals</h1>
          proposals.map((proposal) => {
            <Proposal proposal={proposal} />
          })
        } */}
      </section>
    </section>
    </section>
  );
}


const Proposal = ({proposal}) => {

  const [vote, setVote] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section
      className={`my-8 p-12 w-2/3 h-54 flex flex-col py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}
    >
      <p className="pb-2">{proposal.title}</p>
      <p className="pb-2">
        {proposal.description}
      </p>
      <p className="pb-2">{proposal.pdfLink}</p>
      <section className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="yes"
          id="yes"
        />
        <label className="form-check-label inline-block" htmlFor="yes">
          Yes
        </label>
      </section>
      <section className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="no"
          id="no"
        />
        <label className="form-check-label inline-block" htmlFor="no">
          No
        </label>
      </section>
      <button onClick={handleSubmit} className="bg-transparent w-2/6 bg-pink-500 hover:bg-pink-500 font-semibold hover:text-white py-2 px-4 mt-6 border border-pink-500 rounded">
        SUBMIT
      </button>
    </section>
  )
}