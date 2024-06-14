import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return redirect(
    "https://drive.google.com/file/d/13jBd0Imf-Q7gnqBgm9IyIsEbjBle230-/view?usp=sharing"
  );
};

export default page;
