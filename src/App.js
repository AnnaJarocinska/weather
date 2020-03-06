import React from 'react';
import SearchForm from './components/SearchForm';
import Result from'./components/Result';

// APikey='5b1d9fed9bfdd049c9c6877e50f230b0'

class App extends React.Component {
  state = { 
    value:"",
    city:"",
    country:"",
    temperature:"",
    humidity:"",
    pressure:"",
    weather:"",
    wind:"",
    cloudiness:"",
    sunrise:"",
    sunset:"",
    err: false,
   }

   handleChange = (e) => {
     this.setState({value: e.target.value})
   }

   handleSubmit = (e) => {
     e.preventDefault()
     
   
const API=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=5b1d9fed9bfdd049c9c6877e50f230b0&units=metric&lang=pl`;

fetch(API)
.then(res => { 
  if (res.ok){return res}
    throw Error
    })
.then(res => res.json())
.then(data => {
  this.setState( prevState => ({
    city: prevState.value,
    country:data.sys.country,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weather: data.weather[0].description,
    wind: data.wind.speed,
    cloudiness: data.clouds.all,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    err: false,
  }))
})
.catch(err => {
this.setState( prevState => ({
  err: true,
  city:prevState.value
}))

   })
  }

  render() { 
    return ( 
      <>
    <SearchForm 
    value={this.state.value} 
    change={this.handleChange}
    submit={this.handleSubmit}
    />
    <Result 
    data = {this.state}
    />
    </>
     );
  }
}
 
export default App;
