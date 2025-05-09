"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardNumber({
  credentials,
  handleChange,
}: {
  credentials: {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [monthError, setMonthError] = React.useState("");

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      value === "" ||
      (/^(0?[1-9]|1[0-2])$/.test(value) && value.length <= 2)
    ) {
      setMonthError("");
      handleChange(event);
    } else {
      setMonthError("Please enter a valid month (01-12).");
    }
  };

  return (
    <Card className="w-[450px] h-auto border-0 shadow-none">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name" className="font-medium tracking-widest">
                CARDHOLDER NAME
              </Label>
              <Input
                id="name"
                type="text"
                onChange={handleChange}
                name="name"
                value={credentials.name}
                className="h-[50px]"
                placeholder="e.g. Jane Appleseed"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="number" className="font-medium tracking-widest">
                CARD NUMBER
              </Label>
              <Input
                id="number"
                type="text"
                onChange={handleChange}
                name="number"
                value={credentials.number}
                maxLength={20}
                className="h-[50px] text-2xl"
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row gap-5">
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
                    name="month"
                    value={credentials.month}
                    maxLength={2}
                    min={0o1}
                    max={12}
                    className="h-[50px] w-[100px]"
                    placeholder="MM"
                  />
                  {monthError && (
                    <span className="text-red-500 text-sm mt-1">
                      {monthError}
                    </span>
                  )}
                </div>
                <Input
                  id="year"
                  type="text"
                  onChange={handleChange}
                  name="year"
                  value={credentials.year}
                  maxLength={2}
                  className="h-[50px] w-[100px]"
                  placeholder="YY"
                />
                <Input
                  id="cvc"
                  type="text"
                  onChange={handleChange}
                  name="cvc"
                  value={credentials.cvc}
                  maxLength={3}
                  className="h-[50px] w-full"
                  placeholder="e.g. 123"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" className="w-full cursor-pointer">
          Confirm
        </Button>
      </CardFooter>
    </Card>
  );
}
