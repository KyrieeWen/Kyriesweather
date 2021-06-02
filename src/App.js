import React, { Component } from 'react'
import SearchCity from './components/SearchCity'
import Result from './components/Result'
import NotFound from './components/NotFound'
import { AppTitle, WeatherWrapper } from './css/App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  // 初始化state
  state = {
    value:'',
    weatherInfo: null,
    error: false
  }

  getUserIp = (e) => {
    if(window.confirm("Kyrie's Weather wants to get your IP address")) {
      const source = 'https://api.ipify.org/?format=json'
      fetch(source)
        .then(response => response.json())
        .then(source => {
          const ip = source.ip
          const location = `http://api.ipstack.com/${ip}?access_key=70e379f849f96bdc85e64dc5f47ee03c`
          fetch(location)
            .then(response => response.json())
            .then(location => {
              const city = location.city
              this.setState(() => ({
                value:city
              }))
              this.handleSearchCity(e)
            })
        })
    }
  }


  handleSearchCity = (e) => {
    // 阻止默认执行
    e.preventDefault();
    const value = this.state.value
    // Google Cloud Platform API => key
    const APIkey = '638d3030eafa245040554df387be8a9c'
    // Geocoding API: Convert between addresses and geographic coordinates
    const originSource = `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyCEykiqcs_JYhTw8pIBL5BGAwfdVWuLD6Y`

    fetch(originSource)
      // json() 返回一个被解析为JSON格式的promise对象
      .then(response => response.json())
      .then(originData => {
        // 获取经度与维度
        const lat = originData.results[0].geometry.location.lat 
        const lon = originData.results[0].geometry.location.lng
        // OpenWeather One Call API
        const info = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
        fetch(info)
          .then(response => response.json())
          .then(weatherData => {
            const months = ['January','February','March','April','May','June','July','August','September','October','Nocvember','December',]
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            // formatted_address: Sydney NSW,Australia
            const address = originData.results[0].formatted_address
            // 返回当前日期
            const currentDate = new Date();
            // 根据currentDate查找相匹配months或者days
            const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
            // data1.sys.sunset -> 1620975826
            // Date() -> 即自1970年1月1日起经过的毫秒数
            // JavaScript stores Dates as Milliseconds
            //slice(0, 5) -> 截取时间
            const sunset = new Date(weatherData.current.sunset * 1000).toLocaleTimeString('en-gb').slice(0, 5)
            const sunrise = new Date(weatherData.current.sunrise * 1000).toLocaleTimeString('en-gb').slice(0, 5)
            // 储存天气信息
            const weatherInfo = {
              address,
              date,
              description: weatherData.current.weather[0].description,
              main: weatherData.current.weather[0].main,
              temp: weatherData.current.temp,
              pressure: weatherData.current.pressure,
              uvi: weatherData.current.uvi,
              sunrise,
              sunset,
              humidity: weatherData.current.humidity,
              wind: weatherData.current.wind_speed,
              alerts: weatherData.alerts,
              minutelyForecast: weatherData.minutely,
              hourlyForecast: weatherData.hourly,
              dailyForecast: weatherData.daily
            }
            // 信息更新
            this.setState(() => ({
              weatherInfo,
              error: false,
            }))
          })
          // weatherData拉取存在异常
          .catch(error => {
            console.log(error);
            this.setState(() => ({
              error: true,
              weatherInfo: null,
            }))
          })
      })
      // originData存在异常，用户输入错误
      .catch(error => {
        console.log(error)
        this.setState(() => ({
          error: true,
          weatherInfo: null
        }))
      })
  }

  handleInputChange = (e) => {
    // SyntheticBaseEvent {target -> value: s}
    const value = e.target.value
    this.setState(() => ({
      value: value
    }))
  }


  render() {
    // 获取state中的props
    const { weatherInfo, error } = this.state;
    return (
      <>
        <AppTitle showLabel={(weatherInfo || error) && true}>
          <FontAwesomeIcon icon={faCloudSun} />Kyrie's Weather
        </AppTitle>
        <WeatherWrapper>
          {/* 如果weatherInfo 或 error 为 true 则展示结果隐藏title */}
          <AppTitle mainTitle showResult={(weatherInfo || error) && true}>
            <FontAwesomeIcon icon={faCloudSun}/>Kyrie's Weather
          </AppTitle>
          <SearchCity
            // 更新value为用户输入值
            // 传递props给SearchCity
            value={this.state.value}
            showResult={(weatherInfo || error) && true}
            change={this.handleInputChange}
            submit={this.handleSearchCity}
            map={this.getUserIp}
          />
          {/* 如果获取到了weatherInfo则展示 否则隐藏 */}
          {/* 传递props weather给子组件Result */}
          {weatherInfo && <Result weather={weatherInfo} />}
          {/* 如果捕捉到了error则展示 否则隐藏 */}
          {/* 传递props error给子组件NotFound */}
          {error && <NotFound error={error} />}
        </WeatherWrapper>
      </>
    );
  }
}

export default App
