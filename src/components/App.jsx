
import '../styles/App.scss';
import dataJson from '../services/data.json'
import Header from './Header';
import ListCountries from './ListCountries';
import Filters from './Filters';
import { useState } from 'react';

function App() {

  //creo la variable de estado para el listado de paises porque luego voy a querer añadir más
  const [listCountries, setListCountries] = useState(dataJson)

  //creo la variable de estado para el valor del input text
  const [byCountryValue, setByCountryValue] = useState("")

  //esta función es la que voy a enviar por props para que se ejecute en el componente filters cuando cambie el input text
  const changeByCountryValue = (value) =>{
    setByCountryValue(value.toLowerCase())
  }

  //filtro la lista con el nuevo valor y la envío al componente que la pinta
  const filterByCountry = dataJson.filter(country => country.name.official.toLowerCase().includes(byCountryValue))

  return (
    <>
    <Header/>
    <main className="main">
      <Filters changeByCountryValue = {changeByCountryValue}/>
      <ListCountries list = {filterByCountry}/>
    </main>
    </>
  );
}

export default App;

//1.Crear componentes: ListCountries, Country, Filters, AddCountry(opcional).
//2.Crear variables de estado: listado de paises, inputs,


// Cuando tenemos INPUTS, PETICIÓN AL SERVIDOR o DATOS QUE CAMBIAN Y HAY QUE VOLVER A PINTARLOS SIEMPRE VARIABLES DE ESTADO

//Siempre que haya un filtro, crearlo  donde están los datos principales y en caso que corresponda se lo mandamos al componente que pinta la lista

//el valor inicial del select de continentes tiene que ser All