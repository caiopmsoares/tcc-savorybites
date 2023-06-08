import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import App from './App'
import BlogSection from './components/BlogSection'

const rootElement = document.getElementById('root')

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement)

	root.render(
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/section" element={<BlogSection />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
