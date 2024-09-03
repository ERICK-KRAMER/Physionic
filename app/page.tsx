import Image from "next/image";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ChevronRight, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="bg-background h-screen bg-no-repeat bg-cover max-xl:h-[130vh]">
        <Header />

        <div className=" md:container md:mx-auto flex flex-row justify-between px-20 items-center mt-20 max-xl:flex-col max-xl:justify-between overflow-hidden max-xl:mt-5 max-xl:items-center">

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
        </div>

      </section>

      <section className="container mx-auto p-20">
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-slate-800 text-5xl font-extrabold">Leading Medicine</h1>
          <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>

          {/* Card */}
          <div className="flex flex-row gap-10 p-6 mt-10">
            <div className="border border-sky-300 rounded-xl">
              <div className="bg-sky-300 w-[300px] rounded-t-lg p-4 flex flex-row justify-start items-center gap-6 pl-8">
                <div className="rounded-full flex items-center justify-center w-16 h-16 bg-white">
                  <Image
                    alt="Icon"
                    src="/icon.svg"
                    width={25}
                    height={25}
                    className=""
                  />
                </div>
                <p className="text-white">Emergency Case</p>
              </div>
              <div className="text-gray-400 p-6 space-y-2 py-10">
                <p className="text-sm">
                  -  The best products start
                  with Figma
                </p>
                <p className="text-sm">
                  - Design with real data
                </p>
                <p className="text-sm">
                  - Lightning fast prototyping
                </p>
                <p className="text-sm">
                  - Fastest way to organize
                </p>
                <p className="text-sm">
                  - Work at the speed of thought.
                </p>
                <span className="text-sky-400 text-sm pl-3 py-2 cursor-pointer">Learn More</span>
              </div>
            </div>
            <div className="border border-sky-300 rounded-xl">
              <div className="bg-sky-300 w-[300px] rounded-t-lg p-4 flex flex-row justify-start items-center gap-6 pl-8">
                <div className="rounded-full flex items-center justify-center w-16 h-16 bg-white">
                  <Image
                    alt="Icon"
                    src="/icon.svg"
                    width={25}
                    height={25}
                    className=""
                  />
                </div>
                <p className="text-white">Cancer Care
                </p>
              </div>
              <div className="text-gray-400 p-6 space-y-2 py-10">
                <p className="text-sm">
                  -  The best products start
                  with Figma
                </p>
                <p className="text-sm">
                  - Design with real data
                </p>
                <p className="text-sm">
                  - Lightning fast prototyping
                </p>
                <p className="text-sm">
                  - Fastest way to organize
                </p>
                <p className="text-sm">
                  - Work at the speed of thought.
                </p>
                <span className="text-sky-400 text-sm pl-3 py-2 cursor-pointer">Learn More</span>
              </div>
            </div>
            <div className="border border-sky-300 rounded-xl">
              <div className="bg-sky-300 w-[300px] rounded-t-lg p-4 flex flex-row justify-start items-center gap-6 pl-8">
                <div className="rounded-full flex items-center justify-center w-16 h-16 bg-white">
                  <Image
                    alt="Icon"
                    src="/icon.svg"
                    width={25}
                    height={25}
                    className=""
                  />
                </div>
                <p className="text-white">Health Queries</p>
              </div>
              <div className="text-gray-400 p-6 space-y-2 py-10">
                <p className="text-sm">
                  -  The best products start
                  with Figma
                </p>
                <p className="text-sm">
                  - Design with real data
                </p>
                <p className="text-sm">
                  - Lightning fast prototyping
                </p>
                <p className="text-sm">
                  - Fastest way to organize
                </p>
                <p className="text-sm">
                  - Work at the speed of thought.
                </p>
                <span className="text-sky-400 text-sm pl-3 py-2 cursor-pointer">Learn More</span>
              </div>
            </div>
          </div>

          <h1 className="text-slate-800 text-5xl font-extrabold pt-20">Leading Medicine</h1>
          <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>

          {/* card */}
          <div className="flex flex-row gap-4">
            <div className="border border-gray-200 rounded-md p-5 space-y-3">
              <span className="flex flex-row">
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Star className="text-orange-200" size={22} />
              </span>
              <p className="w-[250px] text-sm text-gray-400">
                Slate helps you see how many
                more days you need to work to
                reach your financial goal.
              </p>
              <Image
                src={'user.svg'}
                alt="user"
                width={40}
                height={40}
              />
            </div>

            <div className="border border-gray-200 rounded-md p-5 space-y-3">
              <span className="flex flex-row">
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Star className="text-orange-200" size={22} />
              </span>
              <p className="w-[250px] text-sm text-gray-400">
                Slate helps you see how many
                more days you need to work to
                reach your financial goal.
              </p>
              <Image
                src={'user.svg'}
                alt="user"
                width={40}
                height={40}
              />
            </div>

            <div className="border border-gray-200 rounded-md p-5 space-y-3">
              <span className="flex flex-row">
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Image
                  alt="star"
                  src="/star.svg"
                  width={20}
                  height={20}
                />
                <Star className="text-orange-200" size={22} />
              </span>
              <p className="w-[250px] text-sm text-gray-400">
                Slate helps you see how many
                more days you need to work to
                reach your financial goal.
              </p>
              <Image
                src={'user.svg'}
                alt="user"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        <section className="container mx-auto p-20">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <h1 className="text-slate-800 text-5xl font-extrabold pt-20">FAQ</h1>
            <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>

          <div className="grid grid-cols-3 place-items-center mt-20 ">
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
            <div className="relative w-fit p-8 py-4">
              <ChevronRight className="text-sky-400 absolute top-3 left-1" />
              <h3 className="text-lg font-bold text-slate-800 w-[230px]">The quick fox jumps over the
                lazy dog</h3>
              <p className="text-sm text-gray-400 w-[180px]">Things on a very small scale
                behave like nothing</p>
            </div>
          </div>
        </section>



      </section>

    </>
  );
}
