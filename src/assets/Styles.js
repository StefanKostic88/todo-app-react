import styled from "styled-components";

export const ContainerStyled = styled.div`
  color: #fff;
  background-color: #343434;
  max-width: 1200px;
  padding: 2rem 1rem;
  margin: 0 auto;
`;

export const TodoTitleStyled = styled.h2`
  letter-spacing: 1px;
  font-size: 48px;
  text-align: center;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
  gap: 1rem;
  button {
    border: none;
    font-size: 18px;
    background-color: transparent;
    box-shadow: 0 0 0 2px #fff;
    color: #fff;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const TodoStyled = styled.div`
  margin: 0 25px;
`;

export const ListItemStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  line-height: 32px;
  gap: 15px;
  border-bottom: 1px solid
    ${(props) => (props.isCompleted ? "#258725" : "#cf0000")};

  color: ${(props) => (props.isCompleted ? "#258725" : "#cf0000")};
  svg {
    fill: ${(props) => (props.isCompleted ? "#258725" : "#cf0000")};
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const IconBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseStyledButton = styled.div`
  margin-left: auto;
`;

export const LoadingContainerStyled = styled.div`
  min-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 48px;
    letter-spacing: 1px;
  }
`;

export const SpinnerStled = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }
  &:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #009efd 0%, #2af598 100%);
    animation: spin 1s infinite linear;
  }
  &:after {
    width: 85%;
    height: 85%;
    background-color: #151515;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  div {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
  }
`;
