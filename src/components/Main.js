import { Nric } from "./Nric";
import { Mainbutton } from "./Mainbutton";
import { useState } from "react";
import { Typography } from "antd";
const { Text } = Typography

export function Main() {
  const [nric, setnric] = useState([
    "Click button below to generate NRIC",
  ]);

  const handleClick = () => {
    setnric(Nric());
  };
  return (
    <div>
      <Text strong style= {{color : "lightblue", fontSize : 30}}>
        Here is your randomly generated NRIC
        <br />
      </Text>
      <br/>
      <Text strong style={{color : "red", fontSize : 40}} >{nric}</Text>
      <br />
      <Mainbutton type="primary" handleClick={handleClick} />
    </div>
  );
}
