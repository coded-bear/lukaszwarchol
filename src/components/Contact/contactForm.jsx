import React, { useState } from "react";
import PropTypes from "prop-types";
import FormInfoPopup from "./FormInfoPopup";
import { StyledContactForm, StyledInput, StyledButton, StyledFormError } from "../../styled/contact";
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from "emailjs-com";
import { isEmail } from "../../utils/validation";
import { service_id, template_id, user_id, recaptcha_public_key } from "../../utils/secret";

const validate = (form, recaptcha, t) => {
  if (!form.email) return t.email.errors[0];
  if (!isEmail(form.email)) return t.email.errors[1];
  if (!form.message) return t.message.errors[0];
  if (!recaptcha) return t.recaptcha.errors[0];
  return null;
};

const ContactForm = ({ lang, t }) => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [recaptcha, setRecaptcha] = useState(null);
  const [error, setError] = useState(null);
  const [infoPopup, setInfoPopup] = useState("");

  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const recaptchaChange = value => {
    setRecaptcha(value);
  };

  const resetForm = () => {
    setForm({ email: "", message: "" });
    setRecaptcha(null);
    setError(null);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const error = validate(form, recaptcha, t);
    if (error) return setError(error);

    const templateParams = {
      reply_to: form.email,
      email: form.email,
      message: form.message
    };

    try {
      const response = await emailjs.send(service_id, template_id, templateParams, user_id);
      if (response.status === 200) {
        setInfoPopup(t.success);
        resetForm();
      } else throw new Error();
    } catch (err) {
      setInfoPopup(t.error);
    }
  };

  return (
    <StyledContactForm onSubmit={submitHandler}>
      <StyledInput>
        <input type="email" name="email" onChange={updateForm} placeholder={t.email.placeholder} />
      </StyledInput>
      <StyledInput>
        <textarea name="message" onChange={updateForm} rows={10} placeholder={t.message.placeholder} maxLength={500} />
      </StyledInput>

      <ReCAPTCHA sitekey={recaptcha_public_key} hl={lang} onChange={recaptchaChange} />

      {error && <StyledFormError>{error}</StyledFormError>}

      <StyledButton>
        <strong>{t.submit}</strong>
      </StyledButton>

      {infoPopup && <FormInfoPopup info={infoPopup} close={() => setInfoPopup("")} />}
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default ContactForm;
