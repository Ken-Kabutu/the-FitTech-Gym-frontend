import React from 'react';
import KennethKabutuImage from '../../images/kenneth.jpeg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  Container,
  ContactWrap,
  ContactContainer,
  ContactCard,
  ContactPhoto,
  ContactH2,
  SocialContactContainer,
  SocialMediaLink,
  ContactH1
} from './ContactElements';

const Contact = () => {
  return (
    <>
      <Container>
        <ContactWrap>
          <ContactH1>Contact Person</ContactH1>
          <ContactContainer>
            <ContactCard>
              <ContactPhoto src={KennethKabutuImage} />
              <ContactH2>Kenneth Wachira</ContactH2>

              <SocialContactContainer>
                <SocialMediaLink href="https://www.linkedin.com/school/moringa-school/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialMediaLink>
                <SocialMediaLink href="https://github.com/Ken-Kabutu" target="_blank" aria-label="GitHub">
                  <FaGithub />
                </SocialMediaLink>
              </SocialContactContainer>
            </ContactCard>
          </ContactContainer>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
