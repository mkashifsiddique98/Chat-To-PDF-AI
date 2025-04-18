import { Button } from "@/components/ui/button";
import { BrainCogIcon, EyeIcon, GlobeIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const feature = [
  {
    name: "Store your PDF Documents",
    description: "Keeps all your documents securly stored and easily accesible anytime, anywhere",
    icons: GlobeIcon
  },
  {
    name: "Blazing fast Response",
    description: "Experience lightening-fast answer to your queries, ensuring you get the information you need instantly,",
    icons: ZapIcon
  },
  {
    name: "Chat Memorization",
    description: "Our intelligent chatbot remember previous interaction, providing a seamless and personlized experience.",
    icons: BrainCogIcon
  },
  {
    name: "Cloud Backup",
    description: "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
    icons: BrainCogIcon
  },
  {
    name: "Responsive Acrocss Devices",
    description: "Access and chat with your PDF seamlessy on any devices, weather its Desktop, Tablets or Smartphone",
    icons: EyeIcon
  },
  {
    name: "Blazing fast Response",
    description: "Experience lightening-fast answer to your queries, ensuring you get the information you need instantly,",
    icons: ZapIcon
  }
]
export default function Home() {
  return (
    <main className=" flex-1 bg-gradient-to-bl from-white to-indigo-600 p-2 lg-p-5 overflow-scroll">
      <div className="bg-white py-24 sm:py-32 rounded-sm drop-shadow-xlg">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl p-6 lg:p-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="capitalize text-indigo-600 font-semibold text-base leading-7">Interactive Document Compansion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform your pdf into Interactive</p>
            <p>
              Introduction {" "}
              <span className="font-bold text-indigo-500">Chat with PDF.</span>
              <br />
              <br /> Upload your document, and our chatbot will answer questions,
              sumarize content, and answer all your Qs. Ideal for
              everyone, <span className="text-indigo-600">
                Chat with PDF </span>{" "}turns static docunents into{" "}
              <span className="font-bold">dynamic conversations</span>, enhancing productivity 18x fold effortlessly.
            </p>
            <Button asChild className="mt-10">
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>

          </div>
          {/* image */}
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image 
                alt="dashboard Image"
                src={"https://i.imgur.com/VciRSTI.jpeg"}
                width={2432}
                height={1432}
                className="mb-[-0%] rounded-xl shahdow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>
              </div>
            </div>
          </div>
        </div>
        {/* list */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
             {feature.map((feature,index)=>(
              <div className="relative pl-9" key={feature.name+index}>
                <dt className=" inline font-semibold text-gray-900">
                  <feature.icons 
                  aria-hidden={true}
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
             ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
