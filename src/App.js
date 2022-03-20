import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Person name="rubel " nayika="Tapu" phonenumber='01777' location="India"></Person>
    <Person name="bappa " nayika="Tanu" phonenumber='01777' location="India"></Person>
      <Person name="bappida " nayika="Tanusree Saha" phonenumber='01777' location="India"></Person>
      <Name2  name="rubela" ></Name2>
    </div>)
}

function Person(props) {
  console.log(props)

      return (
        <div className='person'>
          <h1> Name:{props.name} </h1>
          <p>Nayika: { props.nayika}</p>
          <p>Phone Number: { props.phonenumber}</p>
          <p>Location: { props.location}</p>
        </div>
      )
      
    }
  
function Name2(props) {
  console.log(props)
      
  return (
    <div className="person2">
      <h1>Ajay Devgan</h1>
      <p>Profession:Maramari</p>
    </div>
  )
      
    }


export default App;
