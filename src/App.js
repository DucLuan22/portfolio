import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';
function App() {
	return (
		<div className="">
			<Router>
				<Navbar />
				<Banner />
				<About />
				<Project />
			</Router>
		</div>
	);
}

export default App;
