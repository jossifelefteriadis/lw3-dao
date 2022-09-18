import { useContract, useContractRead } from "@thirdweb-dev/react"


export default function readNumOfProposals() {
  const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393");
  const { data, isLoading, error } = useContractRead(
    contract,
    "numProposals",
  );
    console.log(data)
  return data
}

