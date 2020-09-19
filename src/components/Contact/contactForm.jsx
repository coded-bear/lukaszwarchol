import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";
import * as emailjs from "emailjs-com";
import FormInfoPopup from "./FormInfoPopup";
import { isEmail } from "../../utils/validation";
import { service_id, template_id, user_id, recaptcha_public_key } from "../../utils/secret";

const validate = (form, t, captcha) => {
  if (!form.email) return t.email.errors[0];
  if (!isEmail(form.email)) return t.email.errors[1];
  if (!form.message) return t.message.errors[0];
  if (!captcha) return t.captcha.errors[0];
  return null;
};

const ContactForm = ({ lang, t }) => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState(null);
  const [infoPopup, setInfoPopup] = useState("");

  const captchaRef = useRef();

  const verifyCallback = response => {
    setCaptcha(response);
  };

  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ email: "", message: "" });
    setCaptcha(null);
    captchaRef.current.reset();
    setError(null);
  };

  const resetCaptcha = () => {
    setCaptcha(null);
    captchaRef.current.reset();
  };

  const submitHandler = async e => {
    e.preventDefault();

    const error = validate(form, t, captcha);

    if (error) {
      resetCaptcha();
      return setError(error);
    }

    const templateParams = {
      reply_to: form.email,
      email: form.email,
      message: form.message
    };

    try {
      const response = await emailjs.send(service_id, template_id, templateParams, user_id);

      resetCaptcha();

      if (response.status === 200) {
        setInfoPopup(t.success);
        resetForm();
      } else throw new Error();
    } catch (err) {
      setInfoPopup(t.error);
      setError(null);
    }
  };

  return (
    <form className="Contact__form" onSubmit={submitHandler}>
      <label className="input-label">
        <input type="email" name="email" value={form.email} onChange={updateForm} placeholder={t.email.placeholder} maxLength={255} />
      </label>
      <label className="input-label">
        <textarea name="message" value={form.message} onChange={updateForm} rows={10} placeholder={t.message.placeholder} maxLength={500} />
      </label>
      <label>
        <input type="checkbox" />
        Lorem ipsum dolor sit amet.
      </label>

      <Recaptcha
        ref={captchaRef}
        render="explicit"
        sitekey={recaptcha_public_key}
        verifyCallback={verifyCallback}
        onloadCallback={() => console.log("callback")}
        hl={lang}
      />

      {error && <div className="form-error">{error}</div>}

      <button className="LinkButton form-submit">{t.submit}</button>

      {infoPopup && <FormInfoPopup info={infoPopup} close={() => setInfoPopup("")} />}
    </form>
  );
};

ContactForm.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default ContactForm;
