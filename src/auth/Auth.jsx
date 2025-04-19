import { useState } from "react";
import Otp1 from "./Otp/Otp1";
import { Login } from "./Login/Login";
export default function Auth() {
  const [step, setStep] = useState(1);
  // const [code, setCode] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      {step === 1 && (
        <Login
          setStep={setStep}
          password={password}
          setPassword={setPassword}
          username={username}
          setUserName={setUserName}
        />
      )}
      {step === 2 && (
        <Otp1
          setStep={setStep}
          username={username}
          setUserName={setUserName}
          password={password}
        />
      )}

    </div>
  );
}
