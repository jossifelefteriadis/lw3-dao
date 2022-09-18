import Image from "next/image";
import styles from "../styles/TeamSection.module.css";

const teamData = [
  {
    id: 1,
    name: "Aayush Deshmukh",
    image: "/aayush.jpeg",
    title: "Fullstack Developer"
  },
  {
    id: 2,
    name: "Jossif Elefteriadis",
    image: "/jossif.jpg",
    title: "Fullstack Developer"
  },
  {
    id: 3,
    name: "Umar Khatab",
    image: "/umar.jpg",
    title: "Fullstack Developer"
  },
  {
    id: 4,
    name: "Fu-Chuan Chung",
    image: "/fu.jpg",
    title: "Fullstack Developer"
  }
]

export default function TeamSection() {
  return (
    <section className={`${styles.main}`}>
      <h1 className="mt-11 text-5xl font-semibold first-letter:text-pink-500">Meet The Team</h1>
      <section className="flex flex-row space-x-8 px-6 mt-11">
        {teamData.map((member) => {
          return (
            <div key={member.id} className=" w-80 flex flex-col items-center justify-center border-t-4 border-l-4 border-r-2 border-b-2 rounded-md p-4">
              <h2 className=" font-semibold text-3xl px-2 py-4">{member.name}</h2>
              <Image src={member.image} width={200} height={200} />
              <h3 className=" font-semibold text-2xl mt-4">{member.title}</h3>
            </div>
          )
        })}
      </section>
    </section>
  )
}