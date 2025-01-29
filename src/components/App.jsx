
import '../styles/App.scss';
import dataJson from '../services/data.json'
import Header from './Header';
import ListCountries from './ListCountries';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <ListCountries/>
    </main>
    </>
  );
}

export default App;

//1.Crear componentes: ListCountries, Country, Filters, AddCountry(opcional).
//2.Crear variables de estado: 