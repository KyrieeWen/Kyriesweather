import styled from 'styled-components'
import device from '../responsive/Device'

export const ForecastWrapper = styled.div`
  padding: 20px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.322);
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
`

export const GreenForecastWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color:rgba(0, 255, 0, 0.322);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`

export const MediumLabel = styled.h3`
  text-align: center;
  color: #ffffff;
  display: block;
  font-weight: 600;
  font-size: 20px;
  padding: 5px 0;

  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  } 
  @media ${device.laptopL} {
    font-size: 29px;
  }
`


export const SmallLabel = styled.div`
  color: #ffffff;
  display: block;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  padding: 10px 0;
`