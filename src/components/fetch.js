import axios from "axios";

// Fetch all countries
export async function fetchData () {
  let data;
  const options = {
    method: "GET",
    url: "https://travelbriefing.org/countries.json",
  }


  await axios.request(options).then(function (response) {
    data = response.data
  }).catch(function (error) {
    console.error(error);
  });

  return data
}

// Fetch one country
export async function fetchCountryData(url) {
  
  let data;
    const options = {
      method: "GET",
      url: url,
    }
  
  
    await axios.request(options).then(function (response) {
      data = response.data
      // console.log(data)
      localStorage.setItem('safetravels', JSON.stringify(data))
    }).catch(function (error) {
      console.error(error);
    });
  
    return data
}