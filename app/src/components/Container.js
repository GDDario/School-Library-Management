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

const Container = ({ maxWidth, children }) => {
    return <ContainerWrapper maxWidth={maxWidth}>{children}</ContainerWrapper>
}

export default Container;