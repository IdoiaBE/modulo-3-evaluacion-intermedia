import '../styles/Country.scss'

function Country({countryData}) {
    const {name, flag, capital, continents} = countryData;
  return (
    <article className="main_countries_card">
        <i className="card_flag">{flag}</i>
        <h3 className="card_title">{name.common}</h3>
        <div className="card_info">
            <p className="card_info_capital">{capital}</p>
            {/* capital también es un array */}
            {/* <small>{continents}</small>
            los continents en los datos son un array asi que creamos una lista*/}
            <ul className="card_info_continents">
              {continents.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </article>
  )
}

export default Country