import '../styles/Country.scss'

function Country({countryData}) {
    const {name, flag, capital, continents} = countryData;
  return (
    <article className="main_countries_card">
        <i>{flag}</i>
        <h3 className="card_title">{name.official}</h3>
        <div className="card_info">
            <p>{capital}</p>
            {/* capital también es un array */}
            {/* <small>{continents}</small>
            los continents en los datos son un array asi que creamos una lista*/}
            <ul>
              {continents.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </article>
  )
}

export default Country