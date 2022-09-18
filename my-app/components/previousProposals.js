import styles from "../styles/PreviousProposals.module.css";

export default function PreviousProposals() {
  return (
    <section className={`${styles.main} flex flex-col items-center mt-11`}>
      <section className="font-semibold text-2xl mb-8 mt-11 first-letter:text-pink-500">
        Proposal
      </section>
      <section className="flex flex-col flex-wrap content-center w-4/6 mb-4">
        <section
          className={`my-8 p-12 w-2/3 h-54 flex flex-col py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}
        >
          <p className="pb-2">QUESTION: Do you like this DAO?</p>
          <p className="pb-2">
            DESCRIPTION: This LW3 DAO is create by 4 awesome developers from
            this community. Do you think we should keep this DAO and use it for
            community decisions, or should we trash it?
          </p>
          <p className="pb-2">PDF Link: http://www.google.com</p>
          <section className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="yes"
              id="yes"
            />
            <label className="form-check-label inline-block" for="yes">
              Yes
            </label>
          </section>
          <section className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="no"
              id="no"
            />
            <label className="form-check-label inline-block" for="no">
              No
            </label>
          </section>
          <button className="bg-transparent w-2/6 bg-pink-500 hover:bg-pink-500 font-semibold hover:text-white py-2 px-4 mt-6 border border-pink-500 rounded">
            SUBMIT
          </button>
        </section>
        <section
          className={`my-8 p-12 w-2/3 h-54 flex flex-col py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}
        >
          <p className="pb-2">
            QUESTION: Should we create a track with focus on creating an nft?
          </p>
          <p className="pb-2">
            DESCRIPTION: An nft is a non fungible token and you can earn big
            money. There are no scams or rug pulls out there.
          </p>
          <p className="pb-2">PDF Link: http://www.google.com</p>
          <section className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="yes"
              id="yes"
            />
            <label className="form-check-label inline-block" for="yes">
              Yes
            </label>
          </section>
          <section className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="no"
              id="no"
            />
            <label className="form-check-label inline-block" for="no">
              No
            </label>
          </section>
          <button className="bg-transparent w-2/6 bg-pink-500 hover:bg-pink-500 font-semibold hover:text-white py-2 px-4 mt-6 border border-pink-500 rounded">
            SUBMIT
          </button>
        </section>
      </section>
    </section>
  );
}
