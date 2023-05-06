import styled from "styled-components";

const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: max-content;
  padding: 15%;
  border: 2px solid #3e2723;
  border-radius: 4px;
  max-width: ${(props) =>
    props.maxWidth != null ? props.maxWidth : `inherit`};

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 6%;
    width: 88%;
    height: 7px;
    border-radius: 50% 50% 0 0;
    background-color: #3e2723;
  }
`;

const DividedContainerWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 80vh;
  width: 100%;
  border: 2px solid #3e2723;
  border-radius: 4px;
  max-width: ${(props) =>
    props.maxWidth != null ? props.maxWidth : `inherit`};

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 6%;
    width: 88%;
    height: 7px;
    border-radius: 50% 50% 0 0;
    background-color: #3e2723;
  }

  div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .left-side {
    flex-basis: 32%;
    border-right: 2px solid #3e2723;

    .book-cover {
      background: #d9d9d9;
      min-width: 300px;
      min-height: 400px;
    }

    .book-information {
      width: 100%;
    }

    ul {
      list-style: none;
      width: 100%;
    }

    li:not(:first-of-type) {
      margin-top: 4px;
    }

    .profile-picture {
      background: #d9d9d9;
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }

  .right-side {
    flex-basis: 90%;

    .space {
      margin-left: 5%;
    }

    .left-align {
      width: 100%;
      align-items: start;
    }

    .horizontal {
      flex-direction: row;
    }
  }

  button {
    padding: 4px 8px;
    font-size: 16px;
    width: 100%;
  }

  button:first-of-type {
    margin-bottom: 12px;
  }

  // Profile -------------------------------------------------
  .grid-dashboard {
    width: 100%;
    display: grid;
    grid-template-areas:
      "rented-books downloaded-pdfs"
      "favorited-categories favorited-categories";
    grid-gap: 10%;
    margin-bottom: 20px;

    p {
      font-size: 20px;
      color: #3e2723;
    }

    .rented-books {
      grid-area: "rented-books";
    }

    .downloaded-pdfs {
      grid-area: "downloaded-pdfs";
    }

    .favorited-categories {
      grid-area: "favorited-categories";
    }
  }

  .contact-container {
    width: 100%;
    display: flex;
    flex-direction: center;
    align-items: center;
    min-height: 60vh;

    form {
      margin-top: 80px;
      width: 90%;
      padding: 0px 15%;
    }

    select {
      font-size: 20px;
      padding: 6px;
    }

    textarea {
      margin: 16px 0 10px;
      padding: 4px;
      font-size: 16px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;

      svg {
        margin-left: 8px;
      }
    }
  }
`;

const Container = ({ maxWidth, children, divided }) => {
  if (divided != null) {
    return (
      <DividedContainerWrapper maxWidth={maxWidth}>
        {children}
      </DividedContainerWrapper>
    );
  } else {
    return <ContainerWrapper maxWidth={maxWidth}>{children}</ContainerWrapper>;
  }
};

export default Container;
