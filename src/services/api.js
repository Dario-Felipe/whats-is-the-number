import constants from "../constants.js";

async function getRightNumber() {
 let url = new URL(`${constants.api.URL}/rand`);

 const params = {
   min: constants.api.params.MIN,
   max: constants.api.params.MAX
 }

  Object.keys(params).forEach(param => {
    url.searchParams.append(param, params[param]);
  })

  try {
    const response = await fetch(url, { method: 'GET' });
    return response.json();
  } catch (error) {
    alert(constants.alertMessages.SOMETHING_IS_WRONG);
  }
}

export default getRightNumber;