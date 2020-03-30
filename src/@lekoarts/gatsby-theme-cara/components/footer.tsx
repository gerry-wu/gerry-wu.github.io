/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, jsx } from "theme-ui";
import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <ThemeFooter>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` }
        }}
      >
        <div sx={{ mx: 1 }}>Designed based on</div>
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"
        >
          Theme
        </Styled.a>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Styled.a
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de/en"
        >
          LekoArts
        </Styled.a>
        <div sx={{ mx: 1 }}>. Made with 🧡 by Gerry Wu.</div>
      </Flex>
      <p sx={{ fontSize: `0.8rem` }}>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </ThemeFooter>
  );
};

export default Footer;
