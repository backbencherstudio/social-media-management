import React, { Suspense } from "react";
import VerifyRegistration from "./VerifyRegistration";

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyRegistration />
      </Suspense>
    </>
  );
}
