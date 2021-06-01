import styled from 'styled-components'
import device from '../responsive/Device'
import { keyframes } from 'styled-components'

const ResultFadeIn = keyframes`
  to {
    opacity: 1;
        visibility: visible;
        top: 0;
  }
`

export const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation-name: ${ResultFadeIn};
  animation-duration: 1s;
  animation-delay: 1.4s;
  animation-fill-mode: forwards;
`

export const LocationWrapper = styled.div`
  flex-basis: 100%;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: translateX(10px);
  }
`

export const Date = styled.h4`
  color: #ffffff;
  display: block;
  font-weight: 400;
  font-size: 15px;
  text-align: left;
  padding: 10px 0;

  @media ${device.mobileS} {
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 25px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  } 
  @media ${device.laptopL} {
    font-size: 40px;
  }
`;

export const CurrentWeatherWrapper = styled.div`
  flex-basis: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 20px 0;
  grid-gap: 30px;
  @media ${device.mobileS} {
    grid-gap: 0px;
  }
  @media ${device.mobileL} {
    grid-gap: 0 30px;
  }
  @media ${device.tablet} {
    flex-basis: 50%;
    grid-gap: 0px;
  }
`

export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  margin-right: 10px;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`


export const Temperature = styled.h3`
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  @media ${device.mobileM} {
    display: block;
    font-size: 70px;
  }
  @media ${device.mobileL} {
    display: block;
    font-size: 80px;
  }
  @media ${device.tablet} {
    font-size: 59px;
    text-align:center;
    margin-left: -27%;
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
`

export const WeatherDetailsWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;
  @media ${device.mobileL} {
    flex-basis: 100%;
  }
  @media ${device.tablet} {
    flex-basis: 50%;
  }
`

export const WeatherDetail = styled.div`
  flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${device.laptop} {
    padding: 20px 10px;
  }
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`

export const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`

export const Forecast = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    overflow-x:hidden;
    background: rgba(255, 255, 255, 0);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2); 
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.5);
  }
  `

  export const WeatherImage = styled.img`
    width: 300px;
    height: 300px;

    @media ${device.mobileS} {
      width: 150px;
      height: 150px;
    }
    @media ${device.mobileM} {
      width: 200px;
      height: 200px;
      margin-left: -20px;
    }
    @media ${device.mobileL} {
      width: 250px;
      height: 250px;
    }
    @media ${device.laptop} {
      width: 300px;
      height: 300px;
    }
    @media ${device.laptopL} {
      width: 300px;
      height: 300px;
    }
  `
  export const Description = styled.h4`
    color: #ffffff;
    display: block;
    font-weight: 600;
    font-size: 15px;
    text-align: left;
    padding: 10px 0;
    
    ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
    &:first-letter {
      text-transform: uppercase;
    }
    `}

    @media ${device.mobileS} {
      font-size: 20px;
    }
    @media ${device.mobileM} {
      font-size: 25px;
    }
  `

  export const MinuteLabel = styled.h3`
    color: ${({ color }) => color || '#FFFFFF'};
    display: block;
    font-weight: ${({ weight }) => weight || '600'};
    font-size: ${({ fontSize }) => fontSize || '20px'};
    text-align: ${({ align }) => align || 'left'};
    padding: 5px 0;
    @media ${device.mobileS} {
      font-size: 15px;
    }
    @media ${device.mobileM} {
      font-size: 17px;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.laptop} {
      font-size: 25px;
    }
    @media ${device.laptopL} {
      font-size: 30px;
    }
    `
  export const HourlyLabel = styled.h3`
    color: ${({ color }) => color || '#FFFFFF'};
    display: block;
    font-weight: ${({ weight }) => weight || '600'};
    font-size: ${({ fontSize }) => fontSize || '20px'};
    text-align: ${({ align }) => align || 'left'};
    padding: 5px 0;
    @media ${device.mobileS} {
      font-size: 15px;
    }
    @media ${device.mobileM} {
      font-size: 17px;
    }
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.laptop} {
      font-size: 25px;
    }
    @media ${device.laptopL} {
      font-size: 30px;
    }
  `

  export const DailyLabel = styled.h3`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '20px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  `

  export const AlertsLabel = styled.h3`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '20px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  `

export const SmallLabel = styled.h4`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 10px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.mobileS} {
    font-size: ${({ fontSize }) => fontSize || '13px'};
  }
  @media ${device.mobileM} {
    font-size: ${({ fontSize }) => fontSize || '16px'};
  }

  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '17px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  }
`

export const BigLabel = styled.h2`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '37px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '43px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '52px'};
  } 
`;


export const Text = styled.span`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: center;

  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}

  @media ${device.mobileS} {
    font-size: ${({ fontSize }) => fontSize || '15px'};
  }
  @media ${device.mobileM} {
    font-size: ${({ fontSize }) => fontSize || '19px'};
  }
  
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '15px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '17px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '19px'};
  }
`