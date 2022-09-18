import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { MediaRenderer } from "@thirdweb-dev/react";
// import Card from "./card";

export default function FetchData() {
    const address = useAddress();
    const [data, setData] = useState([]);

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
          let nftdata = []
          response.result.map(nft => {
            let obj = JSON.parse(nft.metadata)
            nftdata.push(obj) 
            console.log('nr', JSON.parse(nft.metadata))

          }); // add to state instead of console.log
          setData(nftdata)
        })
        .catch((err) => console.error(err));
    }, [])

  return (
    <section className="  flex flex-col flex-wrap items-center justify-center space-y-6">
      <h1 className=" text-3xl first-letter:text-pink-500">NFT's Earned By User</h1>
      <section className=" flex md:flex-row flex-col flex-wrap items-center justify-center mx-8">  
        {data.map(nft =>
          <section className=" md:w-1/4 bg-purple-400 p-2 m-2 flex items-center justify-center">
          <MediaRenderer
            src={`${nft.image}`}
            alt={nft.name}
          />
          </section>
        )}
      </section>
    </section>
  )
}