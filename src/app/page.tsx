"use client";
import Image from "next/image";
import CardNumber from "./Components/CardNumber";
import * as React from "react";

export default function Home() {
  const [credentials, setCredentials] = React.useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const style = {
    backgroundImage: "url(/bg-main-desktop.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  return (
    <main style={style} className="min-h-screen bg-white">
      <div className="container top-[50%] left-[50%] absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative">
            <Image
              src="/bg-card-front.png"
              alt="Card Front"
              width={500}
              height={350}
              className="me-64 relative"
            />
            <span className="absolute w-12 h-12 bg-white top-[20%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl"></span>
            <span className="absolute w-6 h-6 border border-white top-[20%] left-[18%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl"></span>
            <span className="absolute text-white top-[65%] left-[32%] transform -translate-x-1/2 -translate-y-1/2 text-4xl tracking-widest">
              {credentials.number !== ""
                ? credentials.number
                : "0000 0000 0000 0000"}
            </span>
            <span className="absolute text-white bottom-[5%] left-[16%] transform -translate-x-1/2 -translate-y-1/2 text-xl tracking-widest">
              {credentials.name !== "" ? credentials.name : "JANE APPLESEED"}
            </span>
            <span className="absolute text-white bottom-[5%] left-[57.5%] transform -translate-x-1/2 -translate-y-1/2 text-lg tracking-widest">
              {credentials.month !== "" ? credentials.month : "00"}
            </span>
            <span className="absolute text-white bottom-[5%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-xl tracking-widest">
              /
            </span>
            <span className="absolute text-white bottom-[5%] left-[62.5%] transform -translate-x-1/2 -translate-y-1/2 text-lg tracking-widest">
              {credentials.year !== "" ? credentials.year : "00"}
            </span>
          </div>
          <div className="relative">
            <Image
              src="/bg-card-back.png"
              alt="Card Back"
              width={500}
              height={350}
              className="relative"
            />
            <span className="absolute top-[48%] right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-white text-lg tracking-widest">
              {credentials.cvc !== "" ? credentials.cvc : "000"}
            </span>
          </div>
        </div>
        <CardNumber credentials={credentials} handleChange={handleChange} />
      </div>
    </main>
  );
}
