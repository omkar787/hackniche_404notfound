// populating static fields of api like category country keywords etc

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("./models/Category");
const Country = require("./models/Country");

dotenv.config({
  path: "./.env",
});

const database = process.env.MONGODB_URL.replace(
  "<PASSWORD>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Database connected successfully!`);
    // Category.insertMany(catObjs).then(() => console.log("inserted"));
    Country.insertMany(countries).then(() => console.log("inserted countries"));
  })
  .catch((error) => console.log(error));

const categories = [
  "entertainment",
  "environment",
  "food",
  "health",
  "politics",
  "science",
  "sports",
  "technology",
  "top",
  "world",
];

const catObjs = categories.map((c) => ({
  name: c,
}));

const countries = [
  { name: "Algeria", code: "dz" },
  { name: "Angola", code: "ao" },
  { name: "Argentina", code: "ar" },
  { name: "Australia", code: "au" },
  { name: "Austria", code: "at" },
  { name: "Azerbaijan", code: "az" },
  { name: "Bangladesh", code: "bd" },
  { name: "Belarus", code: "by" },
  { name: "Belgium", code: "be" },
  { name: "Bolivia", code: "bo" },
  { name: "Brazil", code: "br" },
  { name: "Bulgaria", code: "bg" },
  { name: "Burkina fasco", code: "bf" },
  { name: "Cameroon", code: "cm" },
  { name: "Canada", code: "ca" },
  { name: "Chile", code: "cl" },
  { name: "China", code: "cn" },
  { name: "Colombia", code: "co" },
  { name: "Costa Rica", code: "cr" },
  { name: "Côte d'Ivoire", code: "ci" },
  { name: "Cuba", code: "cu" },
  { name: "Czech republic", code: "cz" },
  { name: "Denmark", code: "dk" },
  { name: "Dominican republic", code: "do" },
  { name: "DR Congo", code: "cd" },
  { name: "Ecuador", code: "ec" },
  { name: "Egypt", code: "eg" },
  { name: "Estonia", code: "ee" },
  { name: "Ethiopia", code: "et" },
  { name: "Finland", code: "fi" },
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "Ghana", code: "gh" },
  { name: "Greece", code: "gr" },
  { name: "Hong kong", code: "hk" },
  { name: "Hungary", code: "hu" },
  { name: "India", code: "in" },
  { name: "Indonesia", code: "id" },
  { name: "Iraq", code: "iq" },
  { name: "Ireland", code: "ie" },
  { name: "Israel", code: "il" },
  { name: "Italy", code: "it" },
  { name: "Japan", code: "jp" },
  { name: "Jordan", code: "jo" },
  { name: "Kazakhstan", code: "kz" },
  { name: "Kenya", code: "ke" },
  { name: "Kuwait", code: "kw" },
  { name: "Latvia", code: "lv" },
  { name: "Lebanon", code: "lb" },
  { name: "Lithuania", code: "lt" },
  { name: "Luxembourg", code: "lu" },
  { name: "Madagascar", code: "mg" },
  { name: "Malawi", code: "mw" },
  { name: "Malaysia", code: "my" },
  { name: "Mali", code: "ml" },
  { name: "Mexico", code: "mx" },
  { name: "Morocco", code: "ma" },
  { name: "Mozambique", code: "mz" },
  { name: "Myanmar", code: "mm" },
  { name: "Nepal", code: "np" },
  { name: "Netherland", code: "nl" },
  { name: "New zealand", code: "nz" },
  { name: "Nigeria", code: "ng" },
  { name: "North korea", code: "kp" },
  { name: "Norway", code: "no" },
  { name: "Oman", code: "om" },
  { name: "Pakistan", code: "pk" },
  { name: "Panama", code: "pa" },
  { name: "Paraguay", code: "py" },
  { name: "Peru", code: "pe" },
  { name: "Philippines", code: "ph" },
  { name: "Poland", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Puerto rico", code: "pr" },
  { name: "Romania", code: "ro" },
  { name: "Russia", code: "ru" },
  { name: "Saudi arabia", code: "sa" },
  { name: "Senegal", code: "sn" },
  { name: "Serbia", code: "rs" },
  { name: "Singapore", code: "sg" },
  { name: "Slovakia", code: "sk" },
  { name: "Slovenia", code: "si" },
  { name: "Somalia", code: "so" },
  { name: "South africa", code: "za" },
  { name: "South korea", code: "kr" },
  { name: "Spain", code: "es" },
  { name: "Sudan", code: "sd" },
  { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" },
  { name: "Taiwan", code: "tw" },
  { name: "Tanzania", code: "tz" },
  { name: "Thailand", code: "th" },
  { name: "Turkey", code: "tr" },
  { name: "Uganda", code: "ug" },
  { name: "Ukraine", code: "ua" },
  { name: "United arab emirates", code: "ae" },
  { name: "United kingdom", code: "gb" },
  { name: "United states of america", code: "us" },
  { name: "Venezuela", code: "ve" },
  { name: "Vietnam", code: "vi" },
  { name: "Zambia", code: "zm" },
];
