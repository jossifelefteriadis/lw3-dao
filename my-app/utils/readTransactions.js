import { useContract, useContractRead } from "@thirdweb-dev/sdk"

const { contract } = useContract("{{contract_address}}");
const { data, isLoading, error } = useContractRead(
  contract,
  "functionName",
  ...args,
);