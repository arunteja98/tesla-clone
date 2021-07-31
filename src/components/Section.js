import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  bgImg,
  description,
  link,
  arrowDown,
  btnFirst,
  btnSecnd,
  pic,
}) {
  return (
    <Wrapper backgroundImg={bgImg}>
      <Fade bottom>
        <TextSection>
          <h1>{title}</h1>
          <p>
            {description}
            {link !== "" ? <span>{link}</span> : null}
          </p>
        </TextSection>
      </Fade>

      {pic && (
        <img
          src={`images/${pic}`}
          alt="not found any pic"
          style={{ width: "500px" }}
        />
      )}
      <BottomSection>
        <Fade bottom>
          <ButtonGroup>
            <ButtonFirst>{btnFirst}</ButtonFirst>
            {btnSecnd !== "" ? <ButtonSecond>{btnSecnd}</ButtonSecond> : null}
          </ButtonGroup>
        </Fade>
        {arrowDown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3 "
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </BottomSection>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem;
  user-select: none;
`;
const TextSection = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    font-size: 1rem;
    span {
      position: relative;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        width: 100%;

        border-bottom: 1px solid black;
        background-color: #0c0c0c;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @keyframes fadeIn {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    75% {
      transform: translateY(5px);
    }
    80% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  svg {
    width: 2rem;
    animation: fadeIn 2s linear infinite;
  }
`;
const ButtonGroup = styled.div`
  color: white;
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ButtonFirst = styled.div`
  width: 250px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease-out;
  user-select: none;
`;
const ButtonSecond = styled(ButtonFirst)`
  &:hover {
    background-color: white;
    color: black;
  }
`;
