import { useContract, useContractWrite } from "@thirdweb-dev/sdk"

export default function createProposalTransaction() {
  const { contract } = useContract("contract address")
  const {
    mutate: createProposal,
    isLoading,
    error
  } = useContractWrite(contract, "voteOnProposal")
}