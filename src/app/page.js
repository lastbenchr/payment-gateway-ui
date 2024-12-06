"use client";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <PatmentWrapper>
      <TitleContainer>
        <h1>Card payment</h1>
        <h1>Checkout form</h1>
      </TitleContainer>
      <Container>
        <LogoSection>
          <Logo>
            <Image src="/brand-logo.png" alt="Logo" width={80} height={80} />
          </Logo>
          <LogoTitle>Payment gateway</LogoTitle>
          <LogoSubtitle>Enter school location details!</LogoSubtitle>
        </LogoSection>

        <FormSection>
          <Title>Complete registration payment</Title>

          <Section>
            <SectionTitle>Personal details</SectionTitle>
            <InputGrid>
              <div>
                <Label htmlFor="address">Address line</Label>
                <Input name="address" placeholder="P.o.Box 1223" />
              </div>
              <div>
                <Label>City</Label>
                <Input placeholder="Arusha" />
              </div>
              <div>
                <Label>State</Label>
                <Input placeholder="Arusha ,Tanzania" />
              </div>
              <div>
                <Label>Postal code</Label>
                <Input placeholder="9090" />
              </div>
            </InputGrid>
          </Section>

          <Section>
            <SectionTitle>Payment methods</SectionTitle>
            <PaymentContainer>
              {[
                "/visa.png",
                "/stripe.png",
                "/paypal.png",
                "/master.png",
                "/gpay.png",
              ].map((src, index) => (
                <button key={index}>
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="intrinsic"
                    width={150}
                    height={100}
                  />
                </button>
              ))}
            </PaymentContainer>
          </Section>

          <Section>
            <SectionTitle>Card details</SectionTitle>
            <InputWrapper>
              <Label>Cardholder&#39;s name</Label>
              <Input placeholder="Seen on your card" />
            </InputWrapper>
            <InputWrapper>
              <Label>Card number</Label>
              <Input placeholder="Seen on your card" />
            </InputWrapper>
            <InputGrid>
              <InputWrapper>
                <Label>Expiry</Label>
                <Input placeholder="20/23" />
              </InputWrapper>
              <InputWrapper>
                <Label>CVC</Label>
                <Input placeholder="654" />
              </InputWrapper>
            </InputGrid>
          </Section>

          <Button>Next</Button>
        </FormSection>
      </Container>
      <Footer />
    </PatmentWrapper>
  );
}

const PatmentWrapper = styled.div`
  background-color: #12372a;
`;

const TitleContainer = styled.div`
  padding: 3rem 0px 1rem 0px;
  text-align: center;
  h1 {
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 2.5rem;
    font-weight: 1000;
    margin: 0px;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    mix-blend-mode: color-burn;
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const Container = styled.div`
  background-color: white;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // gap: 80px;
  border-radius: 30px;
  align-items: center;
  justify-items: center;

  // Media query for mobile devices
  @media (max-width: 768px) {
    display: block;
    padding: 20px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Logo = styled.div`
  width: 120px;
  height: 100px;
  img {
    width: 100%;
    height: auto;
  }
`;

const LogoTitle = styled.h2`
  color: #0a3622;
  font-size: 24px;
  margin: 0px;
  font-weight: 1000;
  letter-spacing: -1px;
`;

const LogoSubtitle = styled.p`
  color: #a3aed0;
  font-size: 14px;
  margin-top: 8px;
`;

const FormSection = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Section = styled.div`
  margin-bottom: 12px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0px;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 8px;
`;

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #666;

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: #0a3622;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #0c4028;
  }
`;

const Footer = styled.div`
  padding-top: 3rem;
`;
