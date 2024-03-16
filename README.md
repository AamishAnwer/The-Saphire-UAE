// pages/sitemap.xml.js

const homepage = "https://ultratec3d.ae";

function generateSiteMapEntry(url, priority = 0.8) {
return `
        <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>${priority}</priority>
        </url>`;
}

function generateSiteMap() {
const urls = [
homepage,
`${homepage}/services/`,
`${homepage}/services/additive-manufacturing/`,
`${homepage}/services/product-development/`,
`${homepage}/services/mechatronics-engineering/`,
`${homepage}/services/paint-post-processing/`,
`${homepage}/services/3d-design-3d-scanning/`,
`${homepage}/services/acrylic-fabrication/`,
`${homepage}/industries/mechanical/`,
`${homepage}/industries/architecture/`,
`${homepage}/industries/automotive/`,
`${homepage}/industries/signage/`,
`${homepage}/industries/engineering/`,
`${homepage}/industries/interior/`,
`${homepage}/resources/`,
`${homepage}/resources/material-guide/`,
`${homepage}/resources/3d-printing-technologies/`,
`${homepage}/resources/newsletter/`,
`${homepage}/resources/blogs/`,
`${homepage}/projects/`,
`${homepage}/about/`,
`${homepage}/contact/`,
`${homepage}/enquiry/`,
`${homepage}/fdm/`,
`${homepage}/sls/`,
`${homepage}/sla/`,
`${homepage}/cj3d/`,
`${homepage}/le/`,
`${homepage}/hp/`,
];

    const siteMapEntries = urls
    	.map((url) => generateSiteMapEntry(url))
    	.join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${siteMapEntries}
        </urlset>`;

}

export async function getServerSideProps({ res }) {
const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
    	props: {},
    };

}

export default function SiteMap() {}
