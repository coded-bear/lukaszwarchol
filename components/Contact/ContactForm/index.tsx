import React, { useState } from "react";
import { ChangeEvent, TextareaEvent, FormEvent } from "../../../utils/types";
import { StyledContactForm, StyledInput, StyledButton, StyledFormError } from "../../../styled/contact";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm: React.FC<{ t: any }> = ({ t }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [recaptcha, setRecaptcha] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const recaptchaChange = (value: any) => {
    setRecaptcha(value);
  };

  const validate = (): string | null => {
    if (!email) return "Enter your email";
    if (!message) return "Type your message";
    if (!recaptcha) return "Accept ReCaptcha";
    return null;
  };

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    if (validate()) return setError(validate());
    setError(null);

    console.log({ email, message, recaptcha });
  };

  return (
    <StyledContactForm onSubmit={submitHandler}>
      <StyledInput>
        <input
          type="email"
          name="email"
          onChange={(e: ChangeEvent) => setEmail(e.target.value)}
          placeholder={t.email.placeholder}
        />
      </StyledInput>
      <StyledInput>
        <textarea
          name="message"
          onChange={(e: TextareaEvent) => setMessage(e.target.value)}
          rows={10}
          placeholder={t.message.placeholder}
        />
      </StyledInput>

      <ReCAPTCHA sitekey="Your client site key" hl={"pl"} onChange={recaptchaChange} />

      {error && <StyledFormError>{error}</StyledFormError>}

      <StyledButton>{t.submit}</StyledButton>
    </StyledContactForm>
  );
};

export default ContactForm;
