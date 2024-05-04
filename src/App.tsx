import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/about/about';
import { BAFNavbar } from './components/navbar/Navbar';
import { LandingPage } from './components/landing-page/LandingPage';
function App() {
	let current_theme = Cookies.get("theme");
	if (!current_theme) {
		Cookies.set("theme", "light");
		current_theme = Cookies.get("theme")!;
	}
	const [theme, setTheme] = useState(current_theme);
	useEffect(() => {
		Cookies.set("theme", theme);
	}, [theme])
	const head = document.getElementById("__MAIN__");
	head?.setAttribute("data-bs-theme", theme);
	return (
		<BrowserRouter>
			<BAFNavbar theme={theme} setTheme={setTheme} />
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/test' element={<h1>Sus</h1>} />
				<Route path='*' element={<h1>Could not find page</h1>} />
			</Routes >
		</BrowserRouter >
	)
}

export default App
