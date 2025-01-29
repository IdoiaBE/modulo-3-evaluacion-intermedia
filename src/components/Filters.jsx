import '../styles/Filters.scss'

function Filters({changeByCountryValue}) {

    const handleInput = (ev) =>{
        changeByCountryValue(ev.target.value)
    }
  return (
    <section className="main_filters">
        <h3>Filters</h3>
        <form>
            <div className="main_filters_country">
                <label htmlFor="">By Country</label>
                <input type="text" onChange={handleInput}/>
            </div>
            
            <div className="main_filters_continent">
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
