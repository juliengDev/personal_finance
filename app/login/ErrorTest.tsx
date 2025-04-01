"use client";

import { useEffect } from "react";

export default function ErrorTest() {
  useEffect(() => {
    throw new Error("This is a test error");
  }, []);

  return <div>This page will throw an error</div>;
}
