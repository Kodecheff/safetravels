import React from 'react'

function Info() {
  let state;
  const getStringifyData = localStorage.getItem('safetravels')
  const parseData = JSON.parse(getStringifyData)
  console.log(parseData)
  state = parseData

  return (
    <div className="infoContainer">
      <div className="ro">
        <div className="card l-bg-cherry">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-8 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h3 className="card-title">{state.names.name}</h3>
                <h6 className="card-subtitle">{state.names.full}</h6>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div><b>IOS:</b> {state.names.iso2}</div>
                <div><b>Continent:</b> {state.names.continent}</div>
                <div><b>Language:</b> {state.language.length > 0 ? state.language.map(lang => (
                  <span>{lang.language} </span>
                )) : "N/A"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <p><b>Timezone:</b> {state.timezone.name}</p>
        <p><b>Currency:</b> {state.currency.name} ({state.currency.symbol})</p>

        <hr />
        <div className="emergency">
          <h5>Emergency line</h5>
          <p><b>Police:</b> {state.telephone.police ? state.telephone.police : "N/A"}</p>
          <p><b>Fire department:</b> {state.telephone.fire ? state.telephone.fire : "N/A"}</p>
          <p><b>Ambulance:</b> {state.telephone.ambulance ? state.telephone.ambulance : "N/A"}</p>
        </div>

        <hr />
        <div className="vaccination">
          <h5>Vaccinations</h5>
          <table className="table table-responsive table-hover table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {state.vaccinations.length > 0 ? state.vaccinations.map(vac => (
                <tr>
                  <td>{vac.name}</td>
                  <td>{vac.message}</td>
                </tr>
              )) 
              : 
              <tr>
                <td>N/A</td>
                <td>N/A</td>
              </tr>}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="footer">
        <p>Developed by KodeCheff</p>
      </footer>
    </div>
  )
}

export default Info
