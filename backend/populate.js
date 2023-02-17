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
	// const sources = await get_sources();
	categories.map(async (cat) => {
		try {
			// const url = `${process.env.NEWS_API_URL}?category=${cat.name}&language=en&apiKey=${process.env.NEWS_API_KEY}`;
			// const url =
			// 	"https://newsdata.io/api/1/news?q=adani&category=world&language=en&apiKey=pub_17328c4e55e349e38949414e2489b499e6221";
			const url =
				"https://newsdata.io/api/1/news?q=turkey&category=world&language=en&apiKey=pub_17328c4e55e349e38949414e2489b499e6221";
			// const url =
			// 	"https://newsdata.io/api/1/news?q=chatgpt&category=technology&language=en&apiKey=pub_17328c4e55e349e38949414e2489b499e6221";
			// const url = `${process.env.NEWS_API_URL}?q=${
			// 	cat.name
			// }&from=${get_current_date()}&sortBy=relevancy&language=en&apiKey=${
			// 	process.env.NEWS_API_KEY
			// }`;

			console.log(url);
			const data = await axios.get(url);

			// console.log(data);
			articles = data.data.results;
			add_news(articles, "world");

			// console.log("Inserted articles ", n);
		} catch (error) {
			console.log(error);
		}
	});
};

const add_news = async (articles, cat) => {
	const main_articles = articles.map((article_obj) => {
		// console.log(article_obj);
		return {
			...article_obj,

			source: article_obj.source_id,
			image_url: article_obj.urlToImage,

			urlToImage: null,
			url: null,

			// category: cat.name,
		};
	});

	// console.log(main_articles);
	const n = await News.create(main_articles);
	console.log("Added article for = ", cat);
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
		const all_sources = await Sources.find().lean().exec();
		console.log(all_sources.length);
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
