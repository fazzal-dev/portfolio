import { ChangeEvent, useState } from "react";
import CopyButton from "../Button/CopyButton";
import "./ContactInfo.css";

const ContactInfo = () => {
  const [email, setEmail] = useState("fazzal.dev@gmail.com");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className="contact-info">
      <input type="email" readOnly value={email} onChange={handleInputChange} />
      <CopyButton Text={email} />
    </div>
  );
};

export default ContactInfo;
