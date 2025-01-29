import '../styles/ListCountries.scss'
import Country from './Country';

function ListCountries({list}) {
    console.log(list)
    const listHtml = list.map((item, index) => <Country key={index} countryData={item}/> )
  return (
    <section className="main_countries">
        {listHtml}
    </section>
  )
}

export default ListCountries