import { useContract, useContractWrite } from "@thirdweb-dev/sdk"

export default function createProposalTransaction({title, desc, pdfLink}) {
  const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393")
  const {
    mutate: createProposal,
    isLoading,
    error
  } = useContractWrite(contract, "createProposal")

  createProposal([title, desc, pdfLink])
}