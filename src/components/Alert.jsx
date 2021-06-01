import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { ForecastWrapper, GreenForecastWrapper, MediumLabel, SmallLabel} from '../css/Alert'
import PropTypes from 'prop-types'


// 当props为null时
const ForecastAlertNull = () => {
  return (
    <GreenForecastWrapper>
      <MediumLabel>
        <FontAwesomeIcon icon={faCheckCircle} />&nbsp;
        There is no weather alert in this area
      </MediumLabel>
    </GreenForecastWrapper>
  )
}


// 接收来自Result的props
const ForecastAlert = (props) => {
  const { address, description, sender, start, end, type } = props
  const startConvert = new Date(start * 1000).toLocaleString()
  const endConvert = new Date(end * 1000).toLocaleString()
  let typeConvert = type
  let descriptionConvert = description
  let senderConvert = sender
  let addressConvert = address
  let addressStart = addressConvert.indexOf(',')
  addressConvert = addressConvert.slice(addressStart+1)

  const infoCheck = () => {
    if(typeConvert === '' || !isEng(typeConvert)) {
      typeConvert = 'Natural disaster'
    }
    if(descriptionConvert === '' || !isEng(descriptionConvert)) {
      descriptionConvert = 'A unknown natural disaster'
    }
    if (senderConvert === '' || !isEng(typeConvert)) {
      senderConvert = 'Bureau of Meteorology ' + addressConvert
    }
  }

   //判断字母(英文)   
  const isEng = (param) => {
    const regExp = /[^A-Za-z]/
    if(regExp.test(param)) return false

    return true
  }
  
  return (
    <ForecastWrapper>
      {infoCheck()}
      <SmallLabel>
        {typeConvert}
      </SmallLabel>
      <SmallLabel>
        Start<br />{startConvert}
      </SmallLabel>
      <SmallLabel>
        End<br />{endConvert}
      </SmallLabel>
      <SmallLabel>
        Sender<br />{senderConvert}
      </SmallLabel>
      <SmallLabel>
        Description<br />{descriptionConvert}
      </SmallLabel>
    </ForecastWrapper>
  )
}

ForecastAlert.propTypes = {
  address: PropTypes.string,
  description: PropTypes.string, 
  sender: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  type: PropTypes.string
}


export { ForecastAlertNull, ForecastAlert}
