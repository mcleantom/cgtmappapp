import axios from 'axios';

export default async function getCompanyData() {
    const response = await axios.get("http://localhost:3002/api/companies");
    return response.data.map((company) => {
        return {
            name: company.Name,
            lat: parseFloat(company.latitude),
            lon: parseFloat(company.longitude),
            logo: company.logo
        };
    });
};