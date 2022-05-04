import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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
