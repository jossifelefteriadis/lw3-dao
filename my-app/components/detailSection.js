import styles from "../styles/Detail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const cardsInfo = [
  {
    id: 1,
    title: "What is LearnWeb3 ?",
    description:
      "LearnWeb3 is a free, high quality, holistic education platform to onboard you as a web3 developer. Join 40k+ builders and start your journey today",
    button: true,
  },
  {
    id: 2,
    title: "Why the need of DAO ?",
    description:
      "As the community grows, the power of decisions should reside in the community itself.",
    button: false,
  },
  {
    id: 3,
    title: "How the DAO works ?",
    description:
      "Every Member of DAO should hold atleast one of the LearnWeb3 Graduate NFT's.",
    button: false,
  },
];

export default function DetailsSection() {
  return (
    <section className="flex flex-col items-center justify-center space-y-11">
      <div>
        <h1 className=" font-semibold text-3xl">Why LearnWeb3 DAO ?</h1>
      </div>
      <div className="flex items-center justify-center px-11">
        <Carousel
          width={"100%"}
          // autoPlay={true}
          interval={5000}
          useKeyboardArrows={true}
          swipeable={true}
          showThumbs={false}
          infiniteLoop={true}
        >
          {cardsInfo.map((item) => {
            return (
              <Cards
                key={item.id}
                title={item.title}
                desc={item.description}
                button={item.button}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

function Cards({ title, desc, button }) {
  return (
    <div
      className={`${styles.card} my-8 flex flex-col items-center justify-center break-words py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}
    >
      <h1 className=" font-semibold text-2xl">{title}</h1>
      <p className="text-xl">{desc}</p>
      {button && (
        <div className={`${styles.button} mt-4 px-4 py-2 rounded-md`}>
          <button className=" text-gray-800">Explore Courses</button>
        </div>
      )}
    </div>
  );
}
