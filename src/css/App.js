import styled from 'styled-components'
import device from '../responsive/Device'

export const AppTitle = styled.h1`
  margin: 0 auto;
  padding-top: 30px;
  font-family: 'Caveat', cursive;
  font-weight: 400;
  color: #ffffff;
  transition: 1s 1s; // duration-time and transition-delay
  opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};

  @media ${device.mobileS} {
    height: 10px;
    line-height: 10px;
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptopL} {
    font-size: 45px;
  }

  ${({ mainTitle }) =>
  mainTitle &&
    `
    opacity: 1;
    height: auto;
    position: relative;
    padding: 20px 0;
    font-size: 40px;
    top: 20%;
    text-align: center;
    transition: all .3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    @media ${device.mobileL} {
      font-size: 45px;
    }
    @media ${device.tablet} {
      font-size: 50px;
    }
    @media ${device.laptop} {
      font-size: 55px;
    }
    @media ${device.laptopL} {
      font-size: 60px;
    }
    @media ${device.desktop} {
      font-size: 70px;
    }
    `
  }
    

  ${({ showResult }) =>
    showResult &&
    `
    opacity: 0;
    visibility: hidden;
    top: 10%;
    `
  }
`

export const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
`
