export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Fotografía Rosario",
	// Your website's title and description (meta fields)
	title: "Fotografía Rosario | Capturando momentos inolvidables en bodas y eventos",
	description:
		"Servicio profesional de fotografía para bodas, compromisos y eventos especiales. Capturamos momentos únicos con un estilo elegante y natural que perdurará para siempre.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Jenna Marie",
		email: "contacto@fotografiacalifornia.com",
		twitter: "FotografiaCali",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/couple-1-square.jpg",
		alt: "Fotografía California - Capturando momentos especiales",
	},
};

export default siteData;
