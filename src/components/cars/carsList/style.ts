import styled from "styled-components";

export const CarsContainer = styled.div`
  padding-top: 1.5rem;
  .slick-list {
    padding-left: 0px !important;
  }
  .slick-dots {
    li {
      width: 5px;
      button:before {
        font-size: 9px;
        opacity: 0.15;
      }
      &.slick-active {
        button:before {
          opacity: 0.75;
        }
      }
    }
  }
  .slider-buttons {
    flex-direction: row;
    justify-content: flex-end;
    padding: 12px;
    .button {
      height: 2.5rem;
      width: 2.5rem;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      &:first-child {
        transform: rotate(180deg);
      }
      &:disabled {
        opacity: 0.4;
        cursor: default;
      }
    }
  }
`;
