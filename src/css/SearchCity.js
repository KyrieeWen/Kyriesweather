import styled from 'styled-components'
import device from '../responsive/Device'


export const SearchBar = styled.form`
  top: ${({ showResult }) => (showResult ? '0%' : '30%')};
  position: relative;
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
  transition: 0.8s 0.5s;  
  @media ${device.mobileL} {
    max-width: 520px;
  }
  @media ${device.laptopL} {
    max-width: 600px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #ffff;
  opacity: 0.5;
  font-size: 18px;
  padding: 10px 15px 10px 40px;
  color: #3b3b3b;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  /* &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 300px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 300px;
  } */
  &:focus {
    outline: none;
  }


  @media ${device.laptop} {
    padding: 15px 20px 15px 45px;
    border-radius: 30px;
  }
`

export const SearchIcon = styled.span`
  display: block;
  color: #ffffff;
  &.faSearch {
    position: absolute;
    top:30%;
    left: 20px;
    height: 14px;
    width: 14px;
    font-size: 18px;
  }
  &.faMapMarkerAlt {
    position: absolute;
    top: 25%;
    right: 20px;
    font-size: 22px;
    transition-property: transform;
    transition-duration: 0.3s;
    &:hover {
      cursor: pointer;
    }
  }



  @media ${device.tablet} {
    height: 15px;
    width: 15px;
    font-size: 15px;
  }
  @media ${device.laptop} {
    height: 16px;
    width: 16px;
    font-size: 16px;
  }
`
