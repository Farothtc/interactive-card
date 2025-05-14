"use client";
import Image from "next/image";
import CardNumber from "./Components/CardNumber";
import * as React from "react";
import SubmittedForm from "./Components/SubmittedForm";

export default function Home() {
  const [credentials, setCredentials] = React.useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleClick() {
    const { name, number, month, year, cvc } = credentials;
    if (name && number && month && year && cvc) {
      console.log("form submitted");
      setIsSubmitted(true);
    }
  }
  function handleResetSubmission() {
    setIsSubmitted(false);
  }

  const style = {
    backgroundImage: "url(/bg-main-desktop.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };

  const smStyle = {
    backgroundImage: "url(/bg-main-mobile.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };

  return (
    <main
      style={isMobile ? smStyle : style}
      className="min-h-screen bg-white sm:bg-white"
    >
      <div className="container top-[40%] sm:top-[50%] left-[50%] absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center sm:gap-6">
          <div className="relative mb-25">
            {isMobile ? (
              <>
                <Image
                  src="/bg-card-back.png"
                  alt="Card Back"
                  width={isMobile ? 300 : 500}
                  height={isMobile ? 200 : 350}
                  className="ms-10 relative z-10"
                />
                <span className="absolute z-21 top-[48.5%] right-[8%] transform -translate-x-1/2 -translate-y-1/2 text-white text-sm tracking-widest">
                  {credentials.cvc !== "" ? credentials.cvc : "000"}
                </span>
              </>
            ) : (
              ""
            )}
            <Image
              src="/bg-card-front.png"
              alt="Card Front"
              width={isMobile ? 300 : 500}
              height={isMobile ? 200 : 350}
              className={
                isMobile
                  ? "top-[55%] right-[13%] absolute z-20"
                  : "me-64 relative z-20"
              }
            />
            <span className="absolute text-white top-[115%] left-[42%] text-xl text-nowrap sm:top-[65%] sm:left-[32%] transform -translate-x-1/2 -translate-y-1/2 sm:text-4xl tracking-widest z-21">
              {credentials.number !== ""
                ? credentials.number
                : "0000 0000 0000 0000"}
            </span>
            {isMobile ? (
              <>
                <span className="absolute w-8 h-8 top-[75%] left-[10%] bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-3xl z-21"></span>
                <span className="absolute w-4 h-4 border border-white top-[75%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl z-21"></span>
                <span className="absolute text-white top-[140%] left-[20%] text-xs transform -translate-x-1/2 -translate-y-1/2 tracking-widest z-21">
                  {credentials.name !== ""
                    ? credentials.name
                    : "JANE APPLESEED"}
                </span>
                <span className="absolute text-white top-[140%] left-[70%] text-xs  transform -translate-x-1/2 -translate-y-1/2  tracking-widest z-21">
                  {credentials.month !== "" ? credentials.month : "00"}
                </span>
                <span className="absolute text-white top-[140%] left-[74%] transform -translate-x-1/2 -translate-y-1/2 text-xs tracking-widest z-21">
                  /
                </span>
                <span className="absolute text-white top-[140%] left-[78%] transform -translate-x-1/2 -translate-y-1/2 text-xs tracking-widest z-21">
                  {credentials.year !== "" ? credentials.year : "00"}
                </span>
              </>
            ) : (
              <>
                <span className="absolute w-12 h-12 bg-white top-[20%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl z-21"></span>
                <span className="absolute w-6 h-6 border border-white top-[20%] left-[18%] transform -translate-x-1/2 -translate-y-1/2 rounded-3xl z-21"></span>
                <span className="absolute text-white bottom-[5%] left-[16%] transform -translate-x-1/2 -translate-y-1/2 text-xl tracking-widest z-21">
                  {credentials.name !== ""
                    ? credentials.name
                    : "JANE APPLESEED"}
                </span>
                <span className="absolute text-white bottom-[5%] left-[57.5%] transform -translate-x-1/2 -translate-y-1/2 text-lg tracking-widest z-21">
                  {credentials.month !== "" ? credentials.month : "00"}
                </span>
                <span className="absolute text-white bottom-[5%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-xl tracking-widest z-21">
                  /
                </span>
                <span className="absolute text-white bottom-[5%] left-[62.5%] transform -translate-x-1/2 -translate-y-1/2 text-lg tracking-widest z-21">
                  {credentials.year !== "" ? credentials.year : "00"}
                </span>
              </>
            )}
          </div>
          <div className="relative">
            {isMobile ? (
              ""
            ) : (
              <>
                <Image
                  src="/bg-card-back.png"
                  alt="Card Back"
                  width={isMobile ? 300 : 500}
                  height={isMobile ? 200 : 350}
                  className="relative"
                />
                <span className="absolute top-[48%] right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-white text-lg tracking-widest">
                  {credentials.cvc !== "" ? credentials.cvc : "000"}
                </span>
              </>
            )}
          </div>
        </div>
        {isSubmitted === true ? (
          <SubmittedForm onReset={handleResetSubmission} />
        ) : (
          <CardNumber
            credentials={credentials}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        )}
      </div>
    </main>
  );
}
