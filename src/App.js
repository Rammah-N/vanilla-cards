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
}

export default App;
