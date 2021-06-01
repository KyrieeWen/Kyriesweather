import styled from 'styled-components'
import device from '../responsive/Device'

export const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`

export const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`

export const SmallLabel = styled.h4`
color: #ffffff;
display: block;
font-weight: 400;
font-size: 15px;
text-align: center;
padding: 10px 0;

@media ${device.mobileS} {
  font-size: 13px;
}
@media ${device.mobileM} {
  font-size: 16px;
}
@media ${device.tablet} {
  font-size: 17px;
}
@media ${device.laptop} {
  font-size: 23px;
} 
@media ${device.laptopL} {
  font-size: 26px;
}
`
export const Text = styled.span`
  color: #ffffff;
  display: block;
  font-size: 12px;
  text-align: center;

  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 19px;
  }
  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.laptop} {
    font-size: 17px;
  } 
  @media ${device.laptopL} {
    font-size: 19px;
  }
`