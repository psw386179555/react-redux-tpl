import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
var baseUrl = 'http://localhost:8000'
  var result = fetch(baseUrl+url, {
      mode: "cors",
      headers: {
          'Accept': 'application/json, text/plain, */*'
      }
  });

  return result;
}
