import React, { useState } from "react"
import "./style.css";
import Cured from "../components/cured/cured";
import Depressed from "../components/depressed/depressed";

export default function Home() {
  let [isCured, setIsCured] = useState(false);

  return (
    <main>
      {
        isCured ?
        <Cured/> :
        <Depressed setIsCured={setIsCured} />
      }
    </main>
  );
}
