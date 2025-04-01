"use client";

// import { FC } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

// const error: FC<ErrorProps> = ({ error, reset }) => {
const Error = ({ error, reset }: ErrorProps) => {
  return (
    <main className="text-center space-y-6 mt-32">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button onClick={reset} className="inline-block bg-grey-900 px-6 py-3 text-lg text-beige-100 cursor-pointer">
        Try again
      </button>
    </main>
  );
};

export default Error;
