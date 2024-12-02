import { Box, FooterContainer, FooterLink, Socials } from "./FooterComponents"

function Footer(){
    return (
      <>
        <Box>
            <FooterContainer>
                        <h3>
                            Copyright ©
                            2023. All rights are reserved
                        </h3>
                        <FooterLink>
                            <Socials aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-carroll-b40020250/">
                                <i className="fa-brands fa-linkedin"></i>
                            </Socials> 

                            <Socials  aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/Michaelc322">
                                <i className="fa-brands fa-github"></i>
                            </Socials> 

                            <Socials  aria-label="instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/michael.carroll_/">
                                <i className="fa-brands fa-instagram"></i>
                            </Socials> 
                        </FooterLink>
            </FooterContainer>
        </Box>
      </>
    )
  }
  
  export default Footer