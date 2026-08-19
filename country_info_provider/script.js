const countryInput = document.getElementById("countryInput");
const form = document.getElementById("countryForm");
const output = document.getElementById("countryResult");

async function getCountry(country) {
  try {
    const response = await fetch(
      `https://geoapi.info/api/country?name=${country}`,
    );

    const data = await response.json();

    console.log(data);

    const countryData = data.data || data;

    const name = countryData.name;
    const capital = countryData.capital;
    const population = countryData.population;
    const flag = countryData.flag;
    const currency = countryData.currency;
    const languages = countryData.languages;

    output.innerHTML = `
            <div class="country-card">

                <img src="${flag}" alt="${name} flag">

                <h2>${name}</h2>

                <div class="country-info">

                    <div class="info-box">
                        <span>Capital</span>
                        <strong>${capital}</strong>
                    </div>

                    <div class="info-box">
                        <span>Population</span>
                        <strong>${population}</strong>
                    </div>

                    <div class="info-box">
                        <span>Currency</span>
                        <strong>${currency}</strong>
                    </div>

                    <div class="info-box">
                        <span>Languages</span>
                        <strong>${languages}</strong>
                    </div>

                </div>

            </div>
        `;
  } catch (error) {
    console.log(error);

    output.innerHTML = `
            <p>Country not found.</p>
        `;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await getCountry(countryInput.value);
});
