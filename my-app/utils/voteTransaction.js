import { useContract, useContractWrite } from "@thirdweb-dev/sdk"

export default function createProposalTransaction() {
  const { contract } = useContract("contract address")
  const {
    mutate: voteOnProposals,
    isLoading,
    error
  } = useContractWrite(contract, "voteOnProposals")

  voteOnProposals([proposalId, votingPower, vote])
}