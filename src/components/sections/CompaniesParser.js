import axios from "axios";

export default async function getCompanyData() {
  const response = await axios.get("https://cgtapi.mcleanmarine.com/company");
  console.log(response.data);

  return response.data.map((company) => {
    return {
      name: company.name,
      lat: 51.509865,
      lon: -0.118092,
      logo: company.logo,
      description: company.description,
      website: company.website,
    };
  });
}
