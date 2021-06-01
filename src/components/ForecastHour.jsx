import React from 'react'
import PropTypes from 'prop-types'
import { ForecastWrapper, WeatherIcon, SmallLabel, Text } from '../css/ForecastHour'

// 接收来自Result的props
const ForecastHour = (props) => {
  const { date, temp, icon } = props
  const dateConvert = new Date(date * 1000).toLocaleTimeString("en-gb")
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`
  let hour = dateConvert.slice(0, 2)
  let timePeriod = "AM" 
  if(hour >= 12) {
    hour -= 12
    timePeriod = "PM"
  }

  return (
    <ForecastWrapper>
      <Text>{hour}:00{timePeriod}</Text>
      <WeatherIcon src={iconUrl} />
      <SmallLabel>
        {temp}&#176;C
      </SmallLabel>
    </ForecastWrapper>
  )
}

ForecastHour.propTypes = {
  date: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}


export default ForecastHour
