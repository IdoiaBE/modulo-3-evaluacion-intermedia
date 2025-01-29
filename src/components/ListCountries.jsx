import '../styles/ListCountries.scss'
import Country from './Country';

function ListCountries({list}) {
  //Siempre que queramos pintar un array en el html vamos a necesitar un ARRAY DE ETIQUETAS y vamos a utilizar map()
  // console.log(list)
  const listHtml = list.map((item, index) => <Country key={index} countryData={item}/> )
  return (
    <section className="main_countries">
        {listHtml}
    </section>
  )
}

export default ListCountries