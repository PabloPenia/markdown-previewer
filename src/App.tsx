import './sass/App.sass'
import { ChangeEvent, useState } from 'react'
import cheatsheet from './cheatsheet'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
	const [content, setContent] = useState<string>(cheatsheet)

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value)
	return (
		<main>
			<header id='master-header'>
				<h1>Markdown Previewer</h1>
				<p>
					Get the
					<a href='https://github.com/PabloPenia//markdown-previewer'>
						Source Code
					</a>
				</p>
				<p>
					| &copy; 2022{' '}
					<a href='https://linkedin.com/in/PabloPenia'>Pablo Peña</a>
				</p>
			</header>
			<section>
				<Editor content={content} handleInput={handleChange} />
				<Preview content={content} />
			</section>
		</main>
	)
}

export default App
