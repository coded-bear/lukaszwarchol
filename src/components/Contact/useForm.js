import { useState } from "react";
import * as emailjs from "emailjs-com";
import { service_id, template_id, user_id } from "../../utils/secret";
import { isEmail } from "../../utils/validation";

const useForm = (initial, captchaRef, setInfoPopup, t) => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState([]);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateCheckbox = e => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };

  const resetCaptcha = () => {
    setValues({ ...values, captcha: null });
    captchaRef.current.reset();
  };

  const verifyCallback = response => {
    setValues({ ...values, captcha: response });
  };

  const validate = values => {
    const errorsList = [];

    if (!values.name) errorsList.push({ fieldName: "name", errorMessage: t.name.errors[0] });
    if (!values.email) errorsList.push({ fieldName: "email", errorMessage: t.email.errors[0] });
    else if (!isEmail(values.email)) errorsList.push({ fieldName: "email", errorMessage: t.email.errors[1] });
    if (!values.message) errorsList.push({ fieldName: "message", errorMessage: t.message.errors[0] });
    if (!values.rodo) errorsList.push({ fieldName: "rodo", errorMessage: t.rodo.errors[0] });

    return errorsList;
  };

  const submitHandler = async e => {
    e.preventDefault();

    if (validate(values).length > 0) return setErrors(validate(values));
    if (errors.length > 0) setErrors([]);

    try {
      const templateParams = { reply_to: values.email, email: values.email, message: values.message };
      const response = await emailjs.send(service_id, template_id, templateParams, user_id);
      resetCaptcha();

      if (response.status === 200) setInfoPopup(t.success);
      else throw response;
    } catch (err) {
      setInfoPopup(t.error);
    }
  };

  return [values, updateValue, updateCheckbox, submitHandler, verifyCallback, errors];
};

export default useForm;
