import { useEffect } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import {
  LW3_DAO_CONTRACT_ABI,
  LW3_DAO_CONTRACT_ADDRESS
} from "../constants"

const createProposalTransaction = async (title, desc, pdfLink) => {
  const { address, isConnected } = useAccount()
  const provider = useProvider()
  const { data: signer } = useSigner()

  const Proposal_contract = useContract({
    addressOrName: LW3_DAO_CONTRACT_ADDRESS,
    contractInterface: LW3_DAO_CONTRACT_ABI,
    signerOrProvider: signer || provider
  })

  const create = async () => {
    try {
      console.log("creating...")
      const tx = await Proposal_contract.createProposal(title, desc, pdfLink)
      await tx.wait()
      console.log("Request Completed");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    create()
  })
}

export default createProposalTransaction;