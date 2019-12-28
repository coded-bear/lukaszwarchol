import { useState } from "react";
import { ChangeEvent, FormEvent } from "../../../common/utils/types";
import { FormState } from "../interfaces";

const useForm = (initial: FormState): any => {
  const [values, setValues] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);

  const updateValue = (e: ChangeEvent): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = (values: FormState): string | null => {
    if (!values.email) return "Enter your email";
    if (!values.message) return "Type your message";

    return null;
  };

  const submitHandler = async (e: FormEvent): Promise<string | void> => {
    e.preventDefault();

    if (validate(values)) return setError(validate(values));

    setError(null);

    console.log(values);
  };

  return [updateValue, submitHandler, error];
};

export default useForm;
