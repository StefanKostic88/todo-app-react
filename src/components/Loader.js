import { LoadingContainerStyled, SpinnerStled } from "../assets/Styles.js";

const Loader = ({ isLoading }) => {
  return (
    <LoadingContainerStyled>
      {isLoading ? (
        <SpinnerStled>
          <div>{isLoading && "Loading..."}</div>
        </SpinnerStled>
      ) : (
        <div>No todos</div>
      )}
    </LoadingContainerStyled>
  );
};

export default Loader;
