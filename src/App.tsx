import { useState } from "react";
import { TextInput } from "./components/TextInput";
import { formatToPhoneNumber } from "./util";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="main-content">
      <TextInput 
        value={text}
        updateValue={setText}
        label={"Regular Text"}
      />

      <TextInput 
        value={phoneNumber}
        updateValue={setPhoneNumber}
        label={"Phone Number"}

        formatter={formatToPhoneNumber}
        maxLength={14}
      />
    </div>
  );
}

export default App;
