import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return redirect(
    "https://drive.google.com/file/d/1S3kgWcqdg9vIvlSh7e2bFRo_4kBsCiQV/view?usp=sharing"
  );
};

export default page;
