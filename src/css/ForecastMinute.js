import styled from 'styled-components'
import device from '../responsive/Device'

export const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px 0;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
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

export const ForecastNull = styled.div`
flex-basis: 100%;
padding: 10px;
margin: 0 5px;
border-radius: 5px;
background-color: rgba(255, 0, 0, 0.322);

transition-property: transform;
transition-duration: 0.2s;
transition-timing-function: ease-in-out;
&:hover {
  transform: translateY(-10px);
}
`

export const SmallLabel = styled.h4`
  color: #ffffff;
  display: block;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  padding: 10px 0;

  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 19px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 22px;
  }
`

export const MediumLabel = styled.h3`
  text-align: center;
  color: #ffffff;
  display: block;
  font-weight: '600';
  font-size:'20px';
  padding: 5px 0;

  @media ${device.tablet} {
    font-size: '23px';
  }
  @media ${device.laptop} {
    font-size: '26px';
  } 
  @media ${device.laptopL} {
    font-size: '29px';
  }
`

export const Text = styled.span`
  color: #ffffff;
  display: block;
  font-size: 12px;
  text-align: center;
  margin-top: 0px;

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
`;