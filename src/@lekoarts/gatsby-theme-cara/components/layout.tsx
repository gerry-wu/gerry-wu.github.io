/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { css, Styled, jsx } from "theme-ui";
import SEO from "@lekoarts/gatsby-theme-cara/src/components/seo";

type LayoutProps = { children?: React.ReactNode; className?: string };

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`
          },
          "&:after": {
            boxSizing: `inherit`
          }
        },
        html: {
          fontSize: `18px`
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`
        }
      })}
    />
    <SEO>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
      >
    </SEO>
    <main className={className}>{children}</main>
  </Styled.root>
);

export default Layout;
