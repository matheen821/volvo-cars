import styled from "styled-components";

export const CarInfoContainer = styled.div`
  box-shadow: none;
  padding: 12px;
  height: 100%;
  overflow: hidden;
  .car-info-link {
    flex: 1 1 auto;
    text-transform: none;
    text-decoration: none;
    flex-direction: column;
    &:hover {
      .car-info-header {
        .body-type,
        .model-name,
        .model-type {
          color: #1c6bba;
        }
      }
    }
    .car-info-header {
      flex: 1 1 auto;
      .body-type {
        text-transform: uppercase;
        font-size: 0.75rem;
        color: #707070;
      }
      .model-info {
        flex-direction: row;
        margin: 0;
        flex-wrap: wrap;
        .model-name {
          font-weight: 500;
          margin-right: 5px;
        }
        .model-type {
          font-weight: 300;
        }
      }
    }
    .car-image {
      margin: 16px 0;
      position: relative;
      .image-container {
        max-height: 100%;
        min-height: 1px;
        height: auto;
        width: 100%;
        padding: 0 0 75% 0;
        overflow: hidden;
        position: relative;
        img {
          object-fit: cover;
          object-position: center center;
          transform: scale(1.01);
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
    }
  }
  .links {
    a:last-child {
      margin-left: 1.5rem;
    }
  }
`;
