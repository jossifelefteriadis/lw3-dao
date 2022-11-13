import { useEffect, useState } from "react";
import Image from 'next/image';

export default function fetchNFT() {
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
      `https://deep-index.moralis.io/api/v2/0x2f142646Fd3363e6476b52259739a650C605A692/nft?chain=polygon&format=decimal&token_addresses=0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let nftdata = [];
        response.result.map((nft) => {
          let obj = JSON.parse(nft.metadata);
          nftdata.push(obj);
        });
        setData(nftdata);
        console.log(nftdata)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="  flex flex-col flex-wrap items-center justify-center space-y-6">
      <h1 className=" text-3xl first-letter:text-pink-500">
        NFT&apos;s Earned By User
      </h1>
      <section className=" flex md:flex-row flex-col flex-wrap items-center justify-center mx-8">
        {data.map((nft) => (
          <section key={nft.name} className=" md:w-1/4 bg-purple-400 p-2 m-2 flex items-center justify-center">
            <Image src={`https://ipfs.io/ipfs/${nft.image.split("//")[1]}`} width={500} height={300} />
          </section>
        ))}
      </section>
    </section>
  );
}
