import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
// import Card from "./card";

export default function FetchData() {
    const address = useAddress();
    const [data, setData] = useState(['1']);

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-Key": "test",
      },
    };

    useEffect(() => {
      fetch(
        `https://deep-index.moralis.io/api/v2/${address}/nft?chain=polygon&format=decimal&token_addresses=0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          response.result.map(nft => console.log('nr', JSON.parse(nft.metadata).name)); // add to state instead of console.log
        })
        .catch((err) => console.error(err));
    }, [])

  return data;
}