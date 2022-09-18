import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const cardsInfo = [
  {
    id: 1,
    title: "Connect Wallet",
    description:
      "Make sure you are signed in with the correct wallet so you can participate with your vote in different proposals",
  },
  {
    id: 2,
    title: "Create Proposl",
    description:
      "Do you have an idea that the community would love? Create a proposaland let your frens decide",
  },
  {
    id: 3,
    title: "Vote On Proposal",
    description:
      "Once your wallet is connected, you will be able to see all the ongoing proposals and vote ( depending if you qualify ). You will also be able to see older proposals that are closed and their results",
  },
];

export default function ParticipationInfo() {
  return (
    <section className="flex flex-col items-center justify-center space-y-11 mt-6">
      <div>
        <h1 className=" font-semibold text-3xl">How LearnWeb3 DAO works ?</h1>
      </div>
      <div className="flex items-center justify-between px-11 space-x-4">
        {cardsInfo.map((item) => {
          return (
            <Cards key={item.id} title={item.title} desc={item.description} />
          );
        })}
      </div>
    </section>
  );
}

function Cards({ title, desc }) {
  return (
    <div
      className={`my-8 flex flex-col items-center justify-center flex-wrap break-words py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}
    >
      <h1 className=" font-semibold text-2xl">{title}</h1>
      <p className="text-xl px-4">{desc}</p>
    </div>
  );
}
