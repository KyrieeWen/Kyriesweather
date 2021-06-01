import React from 'react'
import { ForecastWrapper, WeatherIcon, SmallLabel, Text } from '../css/ForecastDay'
import PropTypes from 'prop-types'


// 接收来自Result的props
const ForecastDay = (props) => {
  const { temp, date, icon } = props
  let dateConvert = new Date(date * 1000).toLocaleString()
  let end = dateConvert.indexOf(',')
  dateConvert = dateConvert.slice(0, end)
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`

  return (
    <ForecastWrapper>
      <Text>
        {dateConvert}
      </Text>
      <WeatherIcon src={iconUrl} />
      <SmallLabel>
        {temp}&#176;C
      </SmallLabel>
    </ForecastWrapper>
  )
}

ForecastDay.propTypes = {
  temp: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}



export default ForecastDay
