import styled, { keyframes } from "styled-components";


export const SlideLeft = styled.div`
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const rotate = keyframes`
    0% {
              transform: translateX(0);
    }

    100% {
              transform: translateX('-100px');
    }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const InternDiv = styled.div`
  /* position: relative;
  top: 300px;
  left: -1150px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  /* border: 1px solid white; */
`

export const OutsideDiv = styled.div`

`