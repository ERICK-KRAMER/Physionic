import { Form } from "./components/Form";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <main className="bg-background h-screen bg-no-repeat bg-cover max-md:h-[130vh]">
        <Header />
        <section className=" md:container md:mx-auto flex flex-row justify-between px-20 items-center mt-20 max-xl:flex-col max-xl:justify-between overflow-hidden max-xl:mt-5 max-xl:items-center">

          <div className=" text-white flex flex-col gap-10 p-10 max-xl:justify-center max-xl:items-center max-md:mb-5">

            <h1 className="text-8xl w-[700px] font-extrabold max-xl:w-[500px] max-xl:text-6xl max-xl:text-center">Meet the Best Hospital</h1>

            <p className="text-xl font-bold w-[500px] max-xl:w-[300px] max-xl:text-center">We know how large objects will act,
              but things on a small scale.</p>

            <div className="space-x-6">
              <button className="rounded-full px-6 py-3 bg-sky-400 text-white text-center text-lg">Get Quote Now</button>

              <button className="rounded-full px-10 py-3 border border-white text-white text-center text-lg">Learn More</button>
            </div>

          </div>
          <Form />
        </section>
      </main>
    </>
  );
}
