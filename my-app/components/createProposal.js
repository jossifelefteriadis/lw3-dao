import styles from "../styles/CreateProposal.module.css";

export default function CreateProposal() {
    return (
      <section className={styles.main}>
        <section className={`my-8 w-1/2 h-96 flex flex-col justify-center py-11 border-l-4 border-t-4 border-r-2 border-b-2 rounded-lg`}>
      <form class="w-full">
  <section class="flex flex-col flex-wrap content-center">
    <section class="w-full md:w-3/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
        Question
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="QUESTION" />
    </section>
    <section class="w-full md:w-3/4 px-3">
      <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold my-2" for="grid-last-name">
        Description
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="DESCRIPTION" />
    </section>
  <button class="bg-transparent w-3/4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-6 border border-blue-500 hover:border-transparent rounded">
  SUBMIT
</button>
  </section>
</form>
    </section>
      </section>
    )
  }