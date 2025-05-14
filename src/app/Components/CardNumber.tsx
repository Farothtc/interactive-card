"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardNumber({
  credentials,
  handleChange,
  handleClick,
}: {
  credentials: {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}) {
  const [nameError, setNameError] = React.useState("");
  const [numberError, setNumberError] = React.useState("");
  const [monthError, setMonthError] = React.useState("");
  const [yearError, setYearError] = React.useState("");
  const [cvcError, setCvcError] = React.useState("");

  // Name Handlers

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setNameError("");
      handleChange(event);
    } else {
      setNameError("Wrong name format");
    }
  };

  const handleNameBlur = () => {
    if (credentials.name.trim() === "") {
      setNameError("Cannot be blank");
    } else {
      setNameError("");
    }
  };

  // Number Handlers

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      value === "" ||
      (/^$|^\d{0,4}$|^\d{4}\s\d{0,4}$|^\d{4}\s\d{4}\s\d{0,4}$|^\d{4}\s\d{4}\s\d{4}\s\d{0,4}$/.test(
        value
      ) &&
        value.length <= 19)
    ) {
      setNumberError("");
      handleChange(event);
    } else {
      setNumberError("Wrong card number format");
    }
  };

  const handleNumberBlur = () => {
    if (credentials.number.trim() === "") {
      setNumberError("Cannot be blank");
    } else if (
      /^$|^\d{0,4}$|^\d{4}\s\d{0,4}$|^\d{4}\s\d{4}\s\d{0,4}$|^\d{4}\s\d{4}\s\d{4}\s\d{0,4}$/.test(
        credentials.number
      )
    ) {
      setNumberError("");
    } else {
      setNumberError("");
    }
  };

  // Month Handlers

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      value === "" ||
      (/^$|^0?$|^0[1-9]?$|^1[0-2]?$/.test(value) && value.length <= 2)
    ) {
      setMonthError("");
      handleChange(event);
    } else {
      setMonthError("Wrong MM format");
    }
  };

  const handleMonthBlur = () => {
    if (credentials.month.trim() === "") {
      setMonthError("Cannot be blank");
    } else if (/^$|^0?$|^0[1-9]?$|^1[0-2]?$/.test(credentials.month)) {
      setMonthError("");
    } else {
      setMonthError("");
    }
  };

  // Year Handlers

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      value === "" ||
      (/^$|^2[5-9]?$|^3[0-9]?$/.test(value) && value.length <= 2)
    ) {
      setYearError("");
      handleChange(event);
    } else {
      setYearError("Wrong YY format");
    }
  };
  const handleYearBlur = () => {
    if (credentials.year.trim() === "") {
      setYearError("Cannot be blank");
    } else if (/^$|^2[5-9]?$|^3[0-9]?$/.test(credentials.year)) {
      setYearError("");
    } else {
      setYearError("");
    }
  };

  // CVC Handlers

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || (/^\d{0,3}$/.test(value) && value.length <= 3)) {
      setCvcError("");
      handleChange(event);
    } else {
      setCvcError("Wrong CVC format");
    }
  };

  const handleCvcBlur = () => {
    if (credentials.cvc.trim() === "") {
      setCvcError("Cannot be blank");
    } else if (/^\d{0,3}$/.test(credentials.cvc)) {
      setCvcError("");
    } else {
      setCvcError("");
    }
  };

  return (
    <Card className="w-[375px] sm:w-[450px] h-auto border-0 shadow-none">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name" className="font-medium tracking-widest">
                CARDHOLDER NAME
              </Label>
              <div className="flex flex-col">
                <Input
                  id="name"
                  type="text"
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  name="name"
                  value={credentials.name}
                  className="h-[50px] text-sm sm:text-base"
                  placeholder="e.g. Jane Appleseed"
                  required
                />
                {nameError && (
                  <span className="text-red-500 text-xs mt-1">{nameError}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="number" className="font-medium tracking-widest">
                CARD NUMBER
              </Label>
              <div className="flex flex-col">
                <Input
                  id="number"
                  type="text"
                  onChange={handleNumberChange}
                  onBlur={handleNumberBlur}
                  name="number"
                  value={credentials.number}
                  maxLength={19}
                  className="h-[50px] text-sm sm:text-2xl"
                  placeholder="e.g. 1234 5678 9123 0000"
                />
                {numberError && (
                  <span className="text-red-500 text-xs mt-1">
                    {numberError}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row gap-22 sm:gap-5">
                <Label htmlFor="month" className="font-medium tracking-widest">
                  EXP. DATE (MM/YY)
                </Label>
                <Label htmlFor="cvc" className="font-medium tracking-widest">
                  CVC
                </Label>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <Input
                    id="month"
                    type="text"
                    onChange={handleMonthChange}
                    onBlur={handleMonthBlur}
                    name="month"
                    value={credentials.month}
                    maxLength={2}
                    min={0o1}
                    max={12}
                    className="h-[50px] w-[100px] text-sm sm:text-base"
                    placeholder="MM"
                  />
                  {monthError && (
                    <span className="text-red-500 text-xs mt-1">
                      {monthError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    id="year"
                    type="text"
                    onChange={handleYearChange}
                    onBlur={handleYearBlur}
                    name="year"
                    value={credentials.year}
                    maxLength={2}
                    className="h-[50px] w-[100px] text-sm sm:text-base"
                    placeholder="YY"
                  />
                  {yearError && (
                    <span className="text-red-500 text-xs mt-1">
                      {yearError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    id="cvc"
                    type="text"
                    onChange={handleCvcChange}
                    onBlur={handleCvcBlur}
                    name="cvc"
                    value={credentials.cvc}
                    maxLength={3}
                    className="h-[50px] w-full text-sm sm:text-base"
                    placeholder="e.g. 123"
                  />
                  {cvcError && (
                    <span className="text-red-500 text-xs mt-1">
                      {cvcError}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleClick} className="w-full cursor-pointer">
          Confirm
        </Button>
      </CardFooter>
    </Card>
  );
}
