import React from 'react'
import { Results, LocationWrapper, CurrentWeatherWrapper, Date, WeatherIcon, Temperature, WeatherDetailsWrapper, WeatherDetail, ForecastWrapper, Forecast, WeatherImage, Description, MinuteLabel, HourlyLabel, DailyLabel, AlertsLabel, SmallLabel, BigLabel, Text } from '../css/Result'
import { ForecastMinute, ForecastMinuteNull } from './ForecastMinute'
import ForecastHour from './ForecastHour'
import ForecastDay from './ForecastDay'
import { ForecastAlert, ForecastAlertNull } from './Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloud,faCloudShowersHeavy,faSmog,faWind,faAngleUp,faAngleDown,faUmbrellaBeach,faClock,faBell,faCalendarAlt,faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import thunder from '../assets/animated/thunder.svg'
import rainy4 from '../assets/animated/rainy-4.svg'
import rainy6 from '../assets/animated/rainy-6.svg'
import snowy from '../assets/animated/snowy-1.svg'
import day from '../assets/animated/day.svg'
import cloudy from '../assets/animated/cloudy.svg'



const Result = ({ weather }) => {
  const {address,date,main,temp,pressure,uvi,sunrise,sunset,description,
        humidity,wind,alerts,minutelyForecast,hourlyForecast,dailyForecast} = weather

  let animatedIcon = new Image()
  let minutelyForecastInfo = null
  let alertInfo = null


  const hourlyForecastInfo = hourlyForecast.map(item => (
    // dt: 16200982800
    // dt_text: 2021-05-14 09:00:00
    // item.main.temp: 15.06
    // item.weather 
    // 0: {id: 801, main: "Clouds", description: "few clouds", icon: "02n"
    <ForecastHour
      key={item.dt + 1}
      date={item.dt}
      temp={Math.floor(item.temp)}
      icon={item.weather[0].icon}
      // parseInt() 转string为int
      // hour={parseInt(item.dt_txt.slice(11, 13))}
    />
  ))

  const dailyForecastInfo = dailyForecast.map(item => (
    <ForecastDay 
      key={item.dt}
      // temp={Math.floor(item.main.temp)}
      icon={item.weather[0].icon}
      temp={Math.floor(item.temp.day)}
      date={item.dt}
    />
  ))

  const minutelyForecastCheck = () => {
    minutelyForecast !== undefined ?
      minutelyForecastInfo = minutelyForecast.map(item => (
        <ForecastMinute 
        key={item.dt + 1}
        date={item.dt}
        precipitation={item.precipitation}
      />
      )) :
      minutelyForecastInfo = <ForecastMinuteNull/>
  }

  const alertCheck = () => {
    alerts !== undefined ? alertInfo = alerts.map(item => (
      <ForecastAlert
        address={address}
        key={Math.random()}
        description={item.description}
        sender={item.sender_name}
        start={item.start}
        end={item.end}
        type={item.event}
      />
    )) : alertInfo = <ForecastAlertNull />
  }


  const IconChange = () => {
    switch(main) {
      case 'Thunderstorm':
        animatedIcon = <WeatherImage src={thunder} alt="" />
        document.body.setAttribute('class', '')
        document.body.classList.add('thunderstorm')
        break
      // 毛毛雨 
      case 'Drizzle':
        animatedIcon = <WeatherImage src={rainy4} alt="" />
        document.body.setAttribute('class', '')
        document.body.classList.add('showers')
        break
      // 小雨
      case 'Rain':
        animatedIcon = <WeatherImage src={rainy6} alt="" />
        document.body.setAttribute('class', '')
        document.body.classList.add('showers')
        break
      case 'Snow':
        animatedIcon = <WeatherImage src={snowy} alt="" />
        document.body.setAttribute('class', '')
        document.body.classList.add('snow')
        break
      case 'Clear':
        animatedIcon = <WeatherImage src={day} alt="" />
        document.body.setAttribute('class', '')
        document.body.classList.add('sun')
        break
      case 'Clouds':
        animatedIcon = <WeatherImage src={cloudy} alt="" />
        document.body.setAttribute('class', '')
        document.body.classList.add('cloud')
        break

      default:
        animatedIcon = <FontAwesomeIcon icon={faSmog} />
        document.body.setAttribute('class', '')
        document.body.classList.add('fog')
    }
  }



  return (
    <Results>
      {IconChange()}
      {alertCheck()}
      {minutelyForecastCheck()}
      <LocationWrapper>
        <BigLabel>
          {address}
        </BigLabel>
        <Date>{date}</Date>
      </LocationWrapper>

      <CurrentWeatherWrapper>
        <WeatherIcon>{animatedIcon}</WeatherIcon>
          <Temperature>{Math.floor(temp)}&#176;C</Temperature>
          <Description firstToUpperCase>
            {description}
          </Description>
      </CurrentWeatherWrapper>

      <WeatherDetailsWrapper>
        <WeatherDetail>
          <SmallLabel align='center' weight='400'>
            <FontAwesomeIcon icon={faWind} /> {wind}mph
          </SmallLabel>
          <Text>Wind</Text>
        </WeatherDetail>

        <WeatherDetail>
          <SmallLabel align='center' weight='400'>
            <FontAwesomeIcon icon={faAngleUp} />  {sunrise}
          </SmallLabel>
          <Text>Sunrise</Text>
        </WeatherDetail>


        <WeatherDetail>
          <SmallLabel align='center' weight='400'>
            <FontAwesomeIcon icon={faCloudShowersHeavy} />  {humidity}%
          </SmallLabel>
          <Text>Humidity</Text>
        </WeatherDetail>

        <WeatherDetail>
          <SmallLabel align='center' weight='400'>
            <FontAwesomeIcon icon={faCloud} /> {pressure}Pa
          </SmallLabel>
          <Text>Pressure</Text>
        </WeatherDetail>

        <WeatherDetail>
          <SmallLabel align='center' weight='400'>
            <FontAwesomeIcon icon={faAngleDown} />  {sunset}
          </SmallLabel>
          <Text>Sunset</Text>
        </WeatherDetail>

        <WeatherDetail>
          <SmallLabel align='center' weight='400'>
            <FontAwesomeIcon icon={faUmbrellaBeach} />  {uvi} J
          </SmallLabel>
          <Text>Uvi</Text>
        </WeatherDetail>
      </WeatherDetailsWrapper>

      <ForecastWrapper>
        <MinuteLabel>
          <FontAwesomeIcon icon={faBell} />
          &nbsp;&nbsp;Minutely Forecast - Precipitation
        </MinuteLabel>
        <Forecast>{minutelyForecastInfo}</Forecast>
      </ForecastWrapper>

      <ForecastWrapper>
        <HourlyLabel>
          <FontAwesomeIcon icon={faClock}/>
          &nbsp;&nbsp;Hourly Forecast
        </HourlyLabel>
        <Forecast>{hourlyForecastInfo}</Forecast>
      </ForecastWrapper>

      <ForecastWrapper>
        <DailyLabel>
          <FontAwesomeIcon icon={faCalendarAlt}/>
          &nbsp;&nbsp;Daily Forecast
        </DailyLabel>
        <Forecast>{dailyForecastInfo}</Forecast>
      </ForecastWrapper>

      <ForecastWrapper>
        <AlertsLabel>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          &nbsp;&nbsp;Alerts
        </AlertsLabel>
        <Forecast>{alertInfo}</Forecast>
      </ForecastWrapper>
    </Results>
  )
}

export default Result

