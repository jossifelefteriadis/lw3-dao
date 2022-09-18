import { useContract, useContractRead } from "@thirdweb-dev/react"

const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393");
const { data, isLoading, error } = useContractRead(
  contract,
  "proposals",
  0,
);