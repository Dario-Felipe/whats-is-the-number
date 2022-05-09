import constants from "../constants.js";

async function getRightNumber() {
 let url = new URL(`${constants.api.URL}/rand`);

 const params = {
   min: 1,
   max: 300
 }

  Object.keys(params).forEach(param => {
    url.searchParams.append(param, params[param]);
  })

  try {
    const response = await fetch(url, { method: 'GET' });
    return response.json();
  } catch (error) {
    alert("Deu algo errado, tente novamente mais tarde :(");
  }
}

export default getRightNumber;