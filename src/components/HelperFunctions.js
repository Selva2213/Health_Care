const isValidData = (obj) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] === "") {
        return false;
      }
    }
  }

  return true;
};

export { isValidData };

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => data.map((country) => country.name.common))
  .catch((error) => console.error("Error fetching countries:", error));
