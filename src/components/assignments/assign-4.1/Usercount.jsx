import { useState } from "react";
import User from "./User";
function Usercount() {
  let [count, setCounter] = useState(0);
  function handleCount() {
    setCounter(count + 1);
  }
  function handleReset(){
    setCounter(count-count);
  }
  return (
    <div>
      <User count={count} handleCount={handleCount} handleReset={handleReset} />
    </div>
  );
}

export default Usercount;
