import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
function App() {
	return (
		<div className="">
			<Router>
				<Navbar />
				<Banner />
				<About />
			</Router>
		</div>
	);
}

export default App;
