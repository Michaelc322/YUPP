import React from "react"
import { Box, FooterContainer, FooterLink, FooterWrap, Socials } from "./FooterComponents"

function Footer(){
    return (
      <>
        <Box>
            <FooterContainer>
                        <h3>
                            Copyright ©
                            2024. All rights are reserved
                        </h3>
            <div style={{display: 'flex',
              flexDirection: 'column',
            }}>
                <Socials>Help</Socials>
                <Socials>FAQ</Socials>
                <Socials>Terms</Socials>
                </div>

            </FooterContainer>
        </Box>
      </>
    )
  }
  
  export default Footer