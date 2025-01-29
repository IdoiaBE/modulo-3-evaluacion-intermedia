import '../styles/Country.scss'

function Country({countryData}) {
    const {name, flag, capital, continents} = countryData;
  return (
    <article className="main_countries_card">
        <img src={flag} alt="" />
        <h3>{name.official}</h3>
        <p>{capital}</p>
        <small>{continents}</small>
    </article>
  )
}

export default Country