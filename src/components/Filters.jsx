import '../styles/Filters.scss'

function Filters({changeByCountryValue}) {

    const handleInput = (ev) =>{
        changeByCountry(ev.target.value)
    }
  return (
    <section className="main_filters">
        <h3 className="filters_title">Filters</h3>
        <form className="filters_form">
            <div className="filters_form_country">
                <label htmlFor="">By Country</label>
                <input type="text" onChange={handleInput}/>
            </div>
            
            <div className="filters_form_continent">
                <label htmlFor="">By Continent</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
        </form>
        
    </section>
  )
}

export default Filters
