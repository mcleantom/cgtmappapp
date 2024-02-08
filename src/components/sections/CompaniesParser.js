import axios from "axios";

export default async function getCompanyData() {
  const response = await axios.get("https://cgtapi.mcleanmarine.com/company");
  return response.data.map((company) => {
    return {
      name: company.name,
      lat: company.position.coordinates[1],
      lon: company.position.coordinates[0],
      logo: company.logo,
      description: company.description,
      website: company.website,
    };
  });
}
