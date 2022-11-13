import { useEffect } from "react"
import { useAccount, useContract, useProvider, useSigner } from "wagmi"
import { LW3_DAO_CONTRACT_ABI, LW3_DAO_CONTRACT_ADDRESS } from "../constants"

const FetchProposals = async () => {
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
      const totalProposals = await LW3_Contract.numProposals
      const promises = []
      for(let id of totalProposals) {
        const proposalPromise = LW3_Contract.proposals(id)
        promises.push(proposalPromise)
      }

      const proposals = await Promise.all(promises)
      console.log(proposals)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    get()
  })
}

export default FetchProposals;