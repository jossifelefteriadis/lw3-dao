import { useEffect, useState } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { LW3_DAO_CONTRACT_ABI, LW3_DAO_CONTRACT_ADDRESS } from "../constants";
import FetchProposals from "../functionality/fetchProposals";
import styles from "../styles/PreviousProposals.module.css";


export default function PreviousProposals() {
  const [proposals, setProposals] = useState([])
  const provider = useProvider()
  const { data: signer } = useSigner()
  const { account, isConnected } = useAccount()

  const LW3_Contract = useContract({
    addressOrName: LW3_DAO_CONTRACT_ADDRESS,
    contractInterface: LW3_DAO_CONTRACT_ABI,
    signerOrProvider: signer || provider
  })

  const get = async () => {
    try {
      const totalProposals = await LW3_Contract.numProposals()
      const promises = []
      for(let id = 0; id < totalProposals; id++) {
        const proposalPromise = LW3_Contract.proposals(id)
        promises.push(proposalPromise)
      }

      const proposalsData = await Promise.all(promises)
      setProposals(proposalsData)
      console.log(proposalsData)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    get()
  }, [])
    
    
  return (
    <section className={styles.main}>
    <section className={`${styles.main} flex flex-col items-center mt-11`}>
      <section className="font-semibold text-2xl mb-8 mt-11 first-letter:text-pink-500">
        Proposals
      </section>
      <section className="flex flex-col justify-center content-center w-4/6">
        {
          proposals.map((proposal) => {
            return (
              <Proposal key={proposal.id} proposal={proposal} />
            )
          })
        }
      </section>
    </section>
    </section>
  );
}


const Proposal = ({ proposal }) => {
  const [_vote, setVote] = useState(false)
  const { address, isConnected } = useAccount()
  const provider = useProvider()
  const { data: signer } = useSigner()

  const Proposal_contract = useContract({
    addressOrName: LW3_DAO_CONTRACT_ADDRESS,
    contractInterface: LW3_DAO_CONTRACT_ABI,
    signerOrProvider: signer || provider
  })
  
  const handlebool = (e) => {
    setVote(!_vote)
    console.log(!_vote)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let vote = _vote === "YAY" ? 0 : 1;
    let result = await voteOnProposal(proposal.id, 1, vote)
    console.log(result)
  }

  const voteOnProposal = async (id, _votingPower, _vote) => {
    try {
      console.log("voting...")
      const tx = await Proposal_contract.voteOnProposals(id, _votingPower, _vote)
      await tx.wait()
      console.log("Vote Registered Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return ( 
      <section className={`p-12 m-4 flex flex-col py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}>
        <p className="pb-2">Title: {proposal.title}</p>
        <p className="pb-2">
          Description: {proposal.description}
        </p>
        <p className="pb-2">Link to the doc: {proposal.pdfLink} </p>
        <section className="form-check">
          <fieldset id="group1">
            <label htmlFor="yes">YES</label>
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="group1"
              id="yes"
              onChange={handlebool}
            />
            <div></div>
            <label htmlFor="no">NO</label>
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="group1"
              id="no"
              onChange={handlebool}
            />
          </fieldset>
        </section>
        <section className="form-check">
          
        </section>
        <button onClick={handleSubmit} className="bg-transparent w-2/6 bg-pink-500 hover:bg-pink-500 font-semibold hover:text-white py-2 px-4 mt-6 border border-pink-500 rounded">
          Vote
        </button>
      </section>
  )
}
