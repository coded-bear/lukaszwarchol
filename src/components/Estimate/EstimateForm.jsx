import React, { useState, useRef } from "react";
import "../../styles/pages/estimate.scss";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import FormInfoPopup from "../Contact/FormInfoPopup";
import useForm from "./useForm";
import { recaptcha_public_key } from "../../utils/secret";

const EstimateForm = ({ lang, t }) => {
  const captchaRef = useRef();

  const [infoPopup, setInfoPopup] = useState("");
  const [values, updateValue, updateCheckbox, submitHandler, verifyCallback] = useForm(
    { name: "", email: "", phone: "", message: "", rodo: false, captcha: null },
    captchaRef,
    setInfoPopup,
    t
  );

  return (
    <form className="Estimate__form" onSubmit={submitHandler}>
      <Input name="name" type="text" value={values.name} onChange={updateValue} placeholder={t.name.placeholder} maxLength={255} />
      <Input name="email" type="email" value={values.email} onChange={updateValue} placeholder={t.email.placeholder} maxLength={255} />
      <Input name="phone" type="text" value={values.phone} onChange={updateValue} placeholder={t.phone.placeholder} maxLength={12} />

      <p className="nda">
        {t.needNDA} <a href="mailto:contact@lukaszwarchol.pl">contact@lukaszwarchol.pl</a>
      </p>

      <Textarea name="message" value={values.message} onChange={updateValue} rows={10} placeholder={t.message.placeholder} maxLength={500} />
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

EstimateForm.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default EstimateForm;
