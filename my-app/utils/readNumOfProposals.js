import { useContract, useContractRead } from "@thirdweb-dev/react"

export default function readNumOfProposals() {

const promise =  new Promise((resolve, reject) => { 
  
  const { contract } = useContract("0xCF347Af8c2c437fB1483128A0ADc4424C1897393");
  const { data, error } = useContractRead(
    contract,
    "numProposals",
  );

  return data
 })

 const fetchData = async () => {
  const value = promise.then((data) => {
    console.log(data)
    return data
  })
  return value;
 }
 return fetchData()
}

