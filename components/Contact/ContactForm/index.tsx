import React from "react";
import { StyledButton } from "../../../styled/contact";
import useForm from "./useForm";

const ContactForm: React.FC = () => {
  const [updateValue, submitHandler, error] = useForm({});

  return (
    <form onSubmit={submitHandler}>
      <label>
        <input type="email" name="email" onChange={updateValue} placeholder="Your email" />
      </label>

      <label>
        <textarea name="message" onChange={updateValue} placeholder="Your message" />
      </label>

      {error && <div>{error}</div>}

      <StyledButton>Send</StyledButton>
    </form>
  );
};

export default ContactForm;
