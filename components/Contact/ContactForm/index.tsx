import React, { useState, memo } from "react";
import FormInfoPopup from "../FormInfoPopup";
import { ChangeEvent, TextareaEvent, FormEvent } from "../../../utils/types";
import { StyledContactForm, StyledInput, StyledButton, StyledFormError } from "../../../styled/contact";
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from "emailjs-com";
import { TemplateParamsTypes } from "../interfaces";
import { isEmail } from "../../../utils/validation";
import { service_id, template_id, user_id, recaptcha_public_key } from "../../../utils/secret";

const ContactForm: React.FC<{ t: any; lang: string }> = memo(({ t, lang }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [recaptcha, setRecaptcha] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [infoPopup, setInfoPopup] = useState<string>("");

  const recaptchaChange = (value: any): void => {
    setRecaptcha(value);
  };

  const resetForm = (): void => {
    setEmail("");
    setMessage("");
    setRecaptcha(null);
    setError(null);
  };

  const validate = (): string | null => {
    if (!email) return t.email.errors[0];
    if (!isEmail(email)) return t.email.errors[1];
    if (!message) return t.message.errors[0];
    // if (!recaptcha) return t.recaptcha.errors[0];
    return null;
  };

  const submitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (validate()) return setError(validate());

    const templateParams: TemplateParamsTypes = {
      reply_to: email,
      email: email,
      message: message
    };

    console.log(recaptcha);

    try {
      const response: emailjs.EmailJSResponseStatus = await emailjs.send(
        service_id,
        template_id,
        templateParams,
        user_id
      );
      if (response.status === 200) {
        setInfoPopup("Wiadomość została wysłana!");
        resetForm();
      } else throw new Error();
    } catch (err) {
      setInfoPopup("Ups, coś poszło nie tak :(");
    }
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

      <ReCAPTCHA sitekey={recaptcha_public_key} hl={lang} onChange={recaptchaChange} />

      {error && <StyledFormError>{error}</StyledFormError>}

      <StyledButton>
        <strong>{t.submit}</strong>
      </StyledButton>

      {infoPopup && <FormInfoPopup info={infoPopup} close={() => setInfoPopup("")} />}
    </StyledContactForm>
  );
});

export default ContactForm;
