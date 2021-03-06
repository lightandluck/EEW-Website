import styled from 'styled-components';

{
  /* Turn nav into a column on narrow screens */
}

export const Container = styled.nav`
  @media only screen and (max-width: 600px) {
    ul {
      align-items: flex-end;
      flex-flow: column wrap;

      li {
        margin-bottom: 1rem;
      }
    }
    .gatsby-image-wrapper {
      display: none !important;
    }
  }

  @media only screen and (min-width: 600px) {
    ul {
      align-items: center;
    }
    li {
      font-size: 1.3rem;

      & + li {
        margin-left: 5rem;
      }
    }
    .text {
      display: none;
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-top: 2px;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 550;
      letter-spacing: 1px;
    }
  }
`;
