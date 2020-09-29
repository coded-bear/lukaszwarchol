import { useState } from "react";
import * as emailjs from "emailjs-com";
import { service_id, template_id, user_id } from "../../utils/secret";

const useForm = (initial, captchaRef, setInfoPopup, t) => {
  const [values, setValues] = useState(initial);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateCheckbox = e => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };

  const updateProjectCategory = e => {
    setValues({ ...values, projectCategory: { ...values.projectCategory, [e.target.name]: e.target.checked } });
  };

  const resetCaptcha = () => {
    setValues({ ...values, captcha: null });
    captchaRef.current.reset();
  };

  const verifyCallback = response => {
    setValues({ ...values, captcha: response });
  };

  const submitHandler = async e => {
    e.preventDefault();

    const templateParams = { reply_to: values.email, email: values.email, message: values.message };

    try {
      const response = await emailjs.send(service_id, template_id, templateParams, user_id);
      resetCaptcha();

      if (response.status === 200) setInfoPopup(t.success);
      else throw response;
    } catch (err) {
      setInfoPopup(t.error);
    }
  };

  return [values, updateValue, updateCheckbox, updateProjectCategory, submitHandler, verifyCallback];
};

export default useForm;
