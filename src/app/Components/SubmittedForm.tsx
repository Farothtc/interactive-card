import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function SubmittedForm({ onReset }: { onReset: () => void }) {
  const handleSubmission = () => {
    onReset();
  };
  return (
    <Card className="w-[350px] sm:w-[450px] h-auto border-0 shadow-none">
      <CardContent className="flex items-center justify-center">
        <img src="/icon-complete.svg" alt="Complete Icon" />
      </CardContent>
      <CardHeader className="text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl sm:text-2xl font-medium tracking-wider">
          THANK YOU!
        </h1>
        <p className="text-gray-500 font-medium tracking-wider">
          We've added your card details
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Button
          className="w-full cursor-pointer text-white"
          onClick={handleSubmission}
        >
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}
