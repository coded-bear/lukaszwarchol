import React from "react";
import { StyledContactForm, StyledInput, StyledButton, StyledFormError } from "../../../styled/contact";
import useForm from "./useForm";

const ContactForm: React.FC<{ t: any }> = ({ t }) => {
  const [updateValue, submitHandler, error] = useForm({});

  return (
    <StyledContactForm onSubmit={submitHandler}>
      <StyledInput>
        <input type="email" name="email" onChange={updateValue} placeholder={t.email.placeholder} />
      </StyledInput>
      <StyledInput>
        <textarea name="message" onChange={updateValue} rows={10} placeholder={t.message.placeholder} />
      </StyledInput>

      {error && <StyledFormError>{error}</StyledFormError>}

      <StyledButton>{t.submit}</StyledButton>
    </StyledContactForm>
  );
};

export default ContactForm;
