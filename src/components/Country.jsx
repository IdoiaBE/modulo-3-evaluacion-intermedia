import '../styles/Country.scss'

function Country({countryData}) {
    const {name, flag, capital, continents} = countryData;
  return (
    <article className="main_countries_card">
        <i>{flag}</i>
        <h3 className="card_title">{name.official}</h3>
        <div className="card_info">
            <p>{capital}</p>
            <small>{continents}</small>
        </div>
    </article>
  )
}

export default Country