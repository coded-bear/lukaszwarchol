import React, { useState } from "react";
import { ChangeEvent, TextareaEvent, FormEvent } from "../../../utils/types";
import { StyledContactForm, StyledInput, StyledButton, StyledFormError } from "../../../styled/contact";
import ReCAPTCHA from "react-google-recaptcha";
import { isEmail } from "../../../utils/validation";

const ContactForm: React.FC<{ t: any; lang: string }> = ({ t, lang }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [recaptcha, setRecaptcha] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const recaptchaChange = (value: any): void => {
    setRecaptcha(value);
  };

  const validate = (): string | null => {
    if (!email) return t.email.errors[0];
    if (!isEmail(email)) return t.email.errors[1];
    if (!message) return t.message.errors[0];
    if (!recaptcha) return t.recaptcha.errors[0];
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
          maxLength={500}
        />
      </StyledInput>

      <ReCAPTCHA sitekey="Your client site key" hl={lang} onChange={recaptchaChange} />

      {error && <StyledFormError>{error}</StyledFormError>}

      <StyledButton>
        <strong>{t.submit}</strong>
      </StyledButton>
    </StyledContactForm>
  );
};

export default ContactForm;
