import React from "react";
import { StyledContactForm, StyledInput, StyledButton, StyledFormError } from "../../../styled/contact";
import useForm from "./useForm";

const ContactForm: React.FC = () => {
  const [updateValue, submitHandler, error] = useForm({});

  return (
    <StyledContactForm onSubmit={submitHandler}>
      <StyledInput>
        <input type="email" name="email" onChange={updateValue} placeholder="Your email" />
      </StyledInput>
      <StyledInput>
        <textarea name="message" onChange={updateValue} rows={10} placeholder="Your message" />
      </StyledInput>

      {error && <StyledFormError>{error}</StyledFormError>}

      <StyledButton>Send</StyledButton>
    </StyledContactForm>
  );
};

export default ContactForm;
