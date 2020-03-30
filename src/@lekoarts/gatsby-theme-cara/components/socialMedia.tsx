/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

const SocialMedia = () => {
  return (
    <Flex
      sx={{
        justifyContent: `flex-start`,
        alignItems: `center`,
        mt: 3,
        color: `text`,
        a: { color: `text`, fontSize: 5, mx: 10 }
      }}
    >
      <a href="https://github.com/gerrywu1990" target="_blank">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/gerry-wu/" target="_blank">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/gerrywu_" target="_blank">
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="mailto:gerrywu1990@gmail.com">
        <i className="fa fa-google" aria-hidden="true"></i>
      </a>
    </Flex>
  );
};

export default SocialMedia;
