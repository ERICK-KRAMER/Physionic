import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Card } from "./components/Product_Card";
import { CardComment } from "./components/Medicine_doc/Card";
import { FAQ } from "./components/FAQ";
import { CardPricing } from "./components/Card_Pricing/CardPricing";

export default function Home() {
  return (
    <>
      <section className="bg-background_banner h-screen bg-no-repeat bg-cover max-xl:h-[130vh]">
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

      <section className="container mx-auto p-16 space-y-4">
        <div className="space-y-4 flex flex-col justify-center items-center">

          <h1 className="text-slate-800 text-5xl font-extrabold max-md:text-center">Leading Medicine</h1>

          <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>

          {/* Card */}
          <div className="flex flex-row gap-10 p-6 mt-10 max-md:flex-col">

            <Card.Root name="Emergency Case">
              <Card.Item item="-  The best products start with Figma" />
              <Card.Item item="- Design with real data" />
              <Card.Item item="- Lightning fast prototyping" />
              <Card.Item item="- Fastest way to organize" />
              <Card.Item item="- Work at the speed of thought." />
            </Card.Root>

            <Card.Root name="Cancer Care">
              <Card.Item item="-  The best products start with Figma" />
              <Card.Item item="- Design with real data" />
              <Card.Item item="- Lightning fast prototyping" />
              <Card.Item item="- Fastest way to organize" />
              <Card.Item item="- Work at the speed of thought." />
            </Card.Root>

            <Card.Root name="Health Queries">
              <Card.Item item="-  The best products start with Figma" />
              <Card.Item item="- Design with real data" />
              <Card.Item item="- Lightning fast prototyping" />
              <Card.Item item="- Fastest way to organize" />
              <Card.Item item="- Work at the speed of thought." />
            </Card.Root>

          </div>
        </div>
      </section>

      <section className="container mx-auto p-10 ">
        <div className="flex flex-col items-center justify-center space-y-4 max-md:text-center">
          <h1 className="text-slate-800 text-5xl font-extrabold">Leading Medicine</h1>
          <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        {/* card */}
        <div className="flex flex-row gap-4 mt-10 justify-center items-center max-md:flex-col">
          <CardComment comment="Slate helps you see how many more days you need to work to reach your financial goal." />

          <CardComment comment="Slate helps you see how many more days you need to work to reach your financial goal." />

          <CardComment comment="Slate helps you see how many more days you need to work to reach your financial goal." />
        </div>
      </section >

      <section className="container mx-auto p-10">
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-slate-800 text-5xl font-extrabold ">FAQ</h1>
          <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className="grid grid-cols-3 place-items-center mt-20 max-md:grid-cols-1">
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
          <FAQ.Root title="The quick fox jumps over the lazy dog">
            <FAQ.Comment subject="Things on a very small scale behave like nothing" />
          </FAQ.Root>
        </div>
      </section>

      <section className="p-5 space-y-10">

        <div className="space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-slate-800 text-5xl font-extrabold">Pricing</h1>
          <p className="text-sm w-[420px] text-center text-gray-400">Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className="flex flex-row items-end justify-center gap-1 mt-5 max-md:flex-col max-md:items-center max-md:gap-3">

          <CardPricing type={"Free"} title={"Organize across all apps by hand"} price={0} />

          <CardPricing type={"STANDARD"} title={"Organize across all apps by hand"} price={9.99} className={"bg-slate-800 text-gray-200 py-12 "} />

          <CardPricing type={"PREMIUM"} title={"Organize across all apps by hand"} price={19.99} />

        </div>

      </section>


      <section className="p-16 bg-slate-800 text-white mt-10">
        <div className="mx-auto container flex flex-row justify-around items-center max-md:flex-col max-md:gap-7">
          <div className="max-md:space-y-4 text-center">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="font-medium text-gray-400 w-[500px]">The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th </p>
          </div>
          <div className="rounded-md p-px bg-gray-200 w-fit">
            <input type="text" className="py-4 pl-2 outline-none rounded-l-md text-black" placeholder="Your email" />
            <button className="bg-sky-400 px-5 py-4 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="p-10 pb-3 ">

        <div className="container mx-auto grid grid-cols-4 max-md:grid-cols-1 max-md:gap-4">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-gray-400 font-medium">
              The quick fox jumps over the lazy dog
            </p>
            <span className="flex flex-row gap-3">
              <Facebook className="text-sky-400" />
              <Instagram className="text-sky-400" />
              <Twitter className="text-sky-400" />
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Company info</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-medium cursor-pointer">About Us</li>
              <li className="text-gray-400 font-medium cursor-pointer">Carrier</li>
              <li className="text-gray-400 font-medium cursor-pointer">We are hiring</li>
              <li className="text-gray-400 font-medium cursor-pointer">Blog</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Features</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-medium cursor-pointer">Business Marketing</li>
              <li className="text-gray-400 font-medium cursor-pointer">User Analytic</li>
              <li className="text-gray-400 font-medium cursor-pointer">Live Chat</li>
              <li className="text-gray-400 font-medium cursor-pointer">Unlimited Support</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Resources</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-medium cursor-pointer">IOS & Android</li>
              <li className="text-gray-400 font-medium cursor-pointer">Watch a Demo</li>
              <li className="text-gray-400 font-medium cursor-pointer">Customers</li>
              <li className="text-gray-400 font-medium cursor-pointer">API</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-end">
          <h2 className=" text-center text-gray-400">Made With Love By Figmaland All Right Reserved </h2>
        </div>

      </footer>

    </>
  );
}
