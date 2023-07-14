import axios from 'axios';

export default async function getCompanyData() {
    var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
    // var result = md.render('# markdown-it rulezz!');

    const response = await axios.get("http://localhost:3002/api/companies");
    return response.data.map((company) => {
        const result = md.render(company.description);
        return {
            name: company.Name,
            lat: parseFloat(company.latitude),
            lon: parseFloat(company.longitude),
            logo: company.logo,
            description: result,
            website: company.website,
    
        };
    });
};