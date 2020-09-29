import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import FormInfoPopup from "./FormInfoPopup";
import useForm from "./useForm";
import { recaptcha_public_key } from "../../utils/secret";

const ContactForm = ({ lang, t }) => {
  const captchaRef = useRef();

  const [infoPopup, setInfoPopup] = useState("");
  const [values, updateValue, updateCheckbox, submitHandler, verifyCallback] = useForm(
    { name: "", email: "", message: "", rodo: false, captcha: null },
    captchaRef,
    setInfoPopup,
    t
  );

  return (
    <form className="Contact__form" onSubmit={submitHandler}>
      <Input name="name" type="text" value={values.name} onChange={updateValue} labelText={t.name.placeholder} maxLength={255} />
      <Input name="email" type="email" value={values.email} onChange={updateValue} labelText={t.email.placeholder} maxLength={255} />
      <Textarea name="message" value={values.message} onChange={updateValue} rows={10} labelText={t.message.placeholder} maxLength={500} />
      <Checkbox name="rodo" checked={values.rodo} onChange={updateCheckbox} text="Lorem ipsum dolor sit amet." />

      <Recaptcha
        ref={captchaRef}
        render="explicit"
        sitekey={recaptcha_public_key}
        verifyCallback={verifyCallback}
        onloadCallback={() => console.log("callback")}
        hl={lang}
      />

      <Button>{t.submit}</Button>

      {infoPopup && <FormInfoPopup info={infoPopup} close={() => setInfoPopup("")} />}
    </form>
  );
};

ContactForm.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default ContactForm;
