import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faCloudMoonRain, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { ForecastWrapper, ForecastNull, SmallLabel, MediumLabel, Text } from '../css/ForecastMinute'
import PropTypes from 'prop-types'


// 接收来自Result的props
const ForecastMinute = (props) => {
  const { date, precipitation } = props
  const dateConvert = new Date(date * 1000).toLocaleTimeString("en-gb").slice(0,5)
  const precipitationConvert = parseFloat(precipitation.toFixed(2))
  let icon = faCloudSunRain



  const iconChanger = (dateConvert) => {
    if(dateConvert.slice(0, 2) >= 18) {
      icon = faCloudMoonRain
    }
  }

  return (
    <ForecastWrapper>
        {iconChanger(dateConvert)}
        <Text>
          <FontAwesomeIcon icon={icon} />
        </Text>
        <SmallLabel>
          {precipitationConvert}mm
        </SmallLabel>
        <SmallLabel>
          {dateConvert}
        </SmallLabel>
    </ForecastWrapper>
  )
}

const ForecastMinuteNull = () => {
  return(
    <ForecastNull>
      <MediumLabel>
        <FontAwesomeIcon icon={faExclamation} />
        &nbsp;&nbsp;Minutely Forecast is unavailable
      </MediumLabel>
    </ForecastNull>
  )
}

ForecastMinute.propTypes = {
  date: PropTypes.number,
  precipitation: PropTypes.number
}

export {ForecastMinute, ForecastMinuteNull}
