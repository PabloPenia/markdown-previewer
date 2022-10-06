import './document.styles.scss'
import DocUi from '~/components/DocUi/doc-ui.component'
import { Outlet, Route, Routes } from 'react-router-dom'

function Document() {
	return (
		<section id='doc'>
			<Routes>
				<Route
					index
					element={
						<div>
							<h1>Recent documents</h1>
						</div>
					}
				/>

				<Route path='/new' element={<DocUi />} />
			</Routes>
			<Outlet />
		</section>
	)
}
export default Document
