import {
  Body,
  Font,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://bettermemory.tech";

export const EmailTemplate = () => (
  <Html>
    <Head>
    </Head>
    <Preview>Subscription Successful!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/bm-logo.png`}
            width="53"
            height="26"
            alt="bm"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            Thank you for subscribing.
          </Text>


          <Text style={paragraph}>
            You will receive our latest updates, including important notifications about each update.
            For more information, feel free to visit our{" "}
            <Link style={anchor} href="https://bettermemory.tech/">
              website
            </Link>{" "}
            or follow us on {" "}
            <Link style={anchor} href="https://x.com/BETTERMEMORYLTD">
              X
            </Link>{" "}
            to stay up-to-date.
          </Text>

          <Text style={paragraph}>

            We appreciate your trust and support.
          </Text>

      <Text style={footer}>

          BETTERMEMORY LTD
      </Text>

        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif,"JetBrains Mono"',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#00000000",
  margin: "20px 0",
};

const paragraph = {
  color: "#000000",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#000000",
  fontWeight: "medium",
  textDecoration: "underline",
};

const footer = {
  color: "#4B4D4E",
  fontSize: "12px",
  lineHeight: "16px",
};
