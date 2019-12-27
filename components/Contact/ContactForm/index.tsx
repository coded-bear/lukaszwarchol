import React from "react";
import { StyledLinkButton } from "../../../styled/layout";

const ContactForm: React.FC = () => (
  <form>
    <label>
      <input type="email" name="email" placeholder="Your email" />
    </label>

    <label>
      <textarea name="textarea" placeholder="Your message" />
    </label>

    <StyledLinkButton>Send</StyledLinkButton>
  </form>
);

export default ContactForm;
