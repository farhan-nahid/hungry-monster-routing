import { Container } from "@mui/material";
import * as React from "react";

const Footer = () => {
  return (
    <Container>
      <p>Copyright {new Date().getFullYear()}. All Right reserved</p>
    </Container>
  );
};

export default Footer;
