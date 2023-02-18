import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
	MidContainer,
	MidElement,
	MidHeading,
	MidSubHeading,
	SearchSuggestion,
	SearchSuggestionContainer,
} from "../components/Home/elements";
import Searchbar from "../components/Home/SearchBar";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import instance from "../../utils/axiosInstance";

export default function NewsAnalysis() {
	const [expand, setExpad] = useState(false);
	const [query, setQuery] = useState("");
	const [source_one, setSource_one] = useState("");
	const [source_two, setSource_two] = useState("");
	const [sources, setSources] = useState([]);

	const [news_one, setNews_one] = useState([]);
	const [news_two, setNews_two] = useState([]);

	const get_sources = async () => {
		const srs = await instance.get("/news/get_sources");
		let results = srs.data.results.map((rs) => {
			return rs.name;
		});
		console.log(results);
		setSources(results);
	};
	useEffect(() => {
		get_sources();
	}, []);

	const handleQueryChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSourceOneChange = (event) => {
		setSource_one(event.target.value);
	};

	const handleSourceTwoChange = (event) => {
		setSource_two(event.target.value);
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<Searchbar
					style={{
						width: !expand ? "70%" : "90%",
						zIndex: "120",
						marginTop: "20px",
					}}
					placeholder="Search news..."
					queryValue={query}
					handleFocus={() => setExpad(true)}
					handleBlur={() => setExpad(false)}
					handleQueryChange={handleQueryChange}
				/>
			</div>

			<div>
				<div>
					<FormControl sx={{ m: 1, minWidth: 120 }}>
						<div
							style={{
								display: "flex",
								width: "100vw",
								justifyContent: "space-around",
							}}
						>
							<div>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={source_one}
									onChange={handleSourceOneChange}
									fullWidth={true}
								>
									{sources.length &&
										sources.map((sr, index) => {
											return (
												<MenuItem
													key={index}
													value={`${sr}`}
												>
													{sr}
												</MenuItem>
											);
										})}
								</Select>
								<div>News</div>
							</div>
							<div>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={source_two}
									onChange={handleSourceTwoChange}
									fullWidth={true}
								>
									{sources.length &&
										sources.map((sr, index) => {
											return (
												<MenuItem
													key={index}
													value={`${sr}`}
												>
													{sr}
												</MenuItem>
											);
										})}
								</Select>
								<div>News</div>
							</div>
						</div>
					</FormControl>
				</div>
				<div></div>
			</div>
		</div>
	);
}
