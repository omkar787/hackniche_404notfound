// populating static fields of api like category country keywords etc

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("./models/Category");
const Country = require("./models/Country");
const News = require("./models/News");
const axios = require("axios");
const Sources = require("./models/Sources");

dotenv.config({
	path: "./.env",
});

console.log(process.env.MONGODB_URL);
const database = process.env.MONGODB_URL.replace(
	"<PASSWORD>",
	process.env.MONGODB_PASSWORD
);

const get_current_date = () => {
	const dt = new Date();
	return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
};
mongoose
	.connect(database, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(async () => {
		console.log(`Database connected successfully!`);
		// Category.insertMany(func(categories)).then(() => console.log("inserted"));

		// popu();
		// await populate_sources();
		// console.log("Sources Populated successfully");
		await popu();
	})
	.catch((error) => console.log(error));

const popu = async () => {
	const categories = await get_categories();
	let articles = null;
	const sources = await get_sources();
	console.log(sources);
	// categories.map(async (cat) => {
	// 	try {
	// 		const url = `${process.env.NEWS_API_URL}?q=${
	// 			cat.name
	// 		}&from=${get_current_date()}&sortBy=relevancy&apiKey=${
	// 			process.env.NEWS_API_KEY
	// 		}`;

	// 		// console.log(url);
	// 		const data = await axios.get(url);

	// 		// console.log(data);
	// 		articles = data.data.articles;

	// 		const main_articles = articles.map((article_obj) => {
	// 			return {
	// 				...article_obj,
	// 				source_id: find_source_id(sources, article_obj.source.name),
	// 				image_url: article_obj.urlToImage,
	// 				link: article_obj.url,
	// 				pubDate: article_obj.publishedAt,
	// 				urlToImage: null,
	// 				url: null,
	// 			};
	// 		});

	// 		// console.log(main_articles);
	// 		const n = await News.create(main_articles);

	// 		// console.log("Inserted articles ", n);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });
};

const find_source_id = (sources, name) => {
	const dt = sources.find((obj) => {
		if (obj.name === name) {
			return true;
			console.log("FOund source", obj._id);
			// return mongoose.Types.ObjectId(obj._id);
		}
	});
	console.log(name);
	console.log("Source ID data: ", dt);

	return mongoose.Types.ObjectId(dt?._id);
};

const get_sources = async () => {
	try {
		const all_sources = await Sources.find().exec();

		return all_sources;
	} catch (error) {
		console.log("Error occured while fetching sources ", error);
	}
};
const populate_sources = async () => {
	try {
		let sources = await axios.get(
			`https://newsapi.org/v2/top-headlines/sources?apikey=${process.env.NEWS_API_KEY}`
		);
		sources = sources.data.sources;
		Sources.create(sources);
	} catch (error) {
		console.log(error);
	}
};

const get_categories = async () => {
	try {
		const all_categories = await Category.find().exec();
		// console.log(all_categories);
		return all_categories;
	} catch (error) {
		console.log("Error occured while fetching categories ", error);
	}
};

// get_categories();
