import './theme/App.scss'
import Document from './routes/Document/document.route'
import Navigation from './routes/Navigation/navigation.route'
import Home from './routes/Home/home.route'
import { Outlet, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<main>
			<Navigation />
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='/doc/*' element={<Document />} />
					<Route path='*' element={<h1>Not Found</h1>} />
				</Route>
			</Routes>
			<Outlet />
		</main>
	)
}

export default App
