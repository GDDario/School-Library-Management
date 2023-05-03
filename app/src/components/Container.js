import styled from "styled-components";

const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: max-content;
  padding: 15%;
  border: 2px solid #3E2723;
  border-radius: 4px;
  max-width: ${props => (props.maxWidth != null ? props.maxWidth : `inherit`)};

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 6%;
    width: 88%;
    height: 7px;
    border-radius: 50% 50% 0 0;
    background-color: #3E2723;
  }
`;

const DividedContainerWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border: 2px solid #3E2723;
  border-radius: 4px;
  max-width: ${props => (props.maxWidth != null ? props.maxWidth : `inherit`)};

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 6%;
    width: 88%;
    height: 7px;
    border-radius: 50% 50% 0 0;
    background-color: #3E2723;
  }

  div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .left-side {
    flex-basis: 32%;
    border-right: 2px solid #3E2723;

    .book-cover {
      background: #D9D9D9;
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
`;

const Container = ({maxWidth, children, divided}) => {
    if (divided != null) {
        return <DividedContainerWrapper maxWidth={maxWidth}>{children}</DividedContainerWrapper>
    } else {
        return <ContainerWrapper maxWidth={maxWidth}>{children}</ContainerWrapper>
    }
}

export default Container;