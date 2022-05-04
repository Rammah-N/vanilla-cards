import "./App.css";
import { useState, useEffect } from "react";
function App() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(
			"https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
				setLoading(false);
			});
	}, []);
	return (
		<div className="App">
			{loading && (
				<h1
					style={{
						transform: "translate(-50%, -50%)",
						position: "absolute",
						top: "50%",
						left: "50%",
					}}>
					Loading!!
				</h1>
			)}
			{data && (
				<div className="row ">
					{data.map((item) => {
						const date = new Date(item.date);
						const month = new Intl.DateTimeFormat("en-US", {
							month: "long",
						}).format(date);
						const year = date.getFullYear();
						const day = date.getDay();
						return (
							<div
								className="col-4 u-equal-height u-clearfix"
								key={item.title.rendered}>
								<div
									className="p-card--highlighted p-card--post"
									style={{ display: "flex", flexDirection: "column" }}>
									<header class="p-card__header is-dotted--bottom">
										<h5 class="p-muted-heading ">Ubuntu</h5>
									</header>

									<div className="p-card__content">
										<div class="u-margin--top">
											<a href={item.link}>
												<img
													alt=""
													height="185"
													src={item.featured_media}
													width="330"
													className="p-card__image"
												/>
											</a>
										</div>

										<h3 class="p-heading--4">
											<a href={item.link}>{item.title.rendered}</a>
										</h3>

										<p className="">
											<em>
												by
												<a href={item["_embedded"].author[0].link}>
													{" "}
													{item["_embedded"].author[0].name}{" "}
												</a>
												on {`${day} ${month} ${year}`}
											</em>
										</p>
									</div>
									<div
										className="is-dotted--top u-padding--left"
										style={{ marginTop: "auto" }}>
										<p className="p-muted-heading">{item.type}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default App;
