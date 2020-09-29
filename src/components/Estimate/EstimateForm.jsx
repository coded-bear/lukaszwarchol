import React, { useEffect, useState, useRef } from "react";
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
import gsap from "gsap";

import imgWeb from "../../images/services/web.svg";
import imgDesktop from "../../images/services/desktop.svg";
import imgMobile from "../../images/services/mobile.svg";
import imgMockup from "../../images/services/mockup.svg";
import imgOther from "../../images/services/other.svg";

const EstimateCheckbox = ({ name, image, id, checked, onChange }) => (
  <label className={`RoundBox Estimate__form--checkbox ${checked && "RoundBox--active"}`}>
    <img src={image} alt={name} />
    <h4 className="title">{name}</h4>

    <Checkbox name={id} checked={checked} onChange={onChange} />
  </label>
);

EstimateCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

const EstimateForm = ({ lang, t }) => {
  const captchaRef = useRef();

  const [infoPopup, setInfoPopup] = useState("");
  const [values, updateValue, updateCheckbox, updateProjectCategory, submitHandler, verifyCallback] = useForm(
    {
      projectCategory: { web: false, desktop: false, mobile: false, ux: false, other: false },
      name: "",
      email: "",
      phone: "",
      message: "",
      rodo: false,
      captcha: null
    },
    captchaRef,
    setInfoPopup,
    t
  );

  useEffect(() => {
    gsap.fromTo(".Estimate__form--checkboxes", { scale: 0.85 }, { scale: 1 });
  }, []);

  return (
    <form className="Estimate__form" onSubmit={submitHandler}>
      <div className="Estimate__form--checkboxes">
        <EstimateCheckbox name="Web Development" image={imgWeb} id="web" checked={values.projectCategory.web} onChange={updateProjectCategory} />
        <EstimateCheckbox
          name="Desktop Development"
          image={imgDesktop}
          id="desktop"
          checked={values.projectCategory.desktop}
          onChange={updateProjectCategory}
        />
        <EstimateCheckbox name="Mobile Development" image={imgMobile} id="mobile" checked={values.projectCategory.mobile} onChange={updateProjectCategory} />
        <EstimateCheckbox name="UX/UI Design" image={imgMockup} id="ux" checked={values.projectCategory.ux} onChange={updateProjectCategory} />
        <EstimateCheckbox name="Other" image={imgOther} id="other" checked={values.projectCategory.other} onChange={updateProjectCategory} />
      </div>

      <div className="Estimate__form--form-box">
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
      </div>

      {infoPopup && <FormInfoPopup info={infoPopup} close={() => setInfoPopup("")} />}
    </form>
  );
};

EstimateForm.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default EstimateForm;
