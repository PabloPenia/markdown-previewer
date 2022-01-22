import { useState } from 'react'
import cheatsheet from './cheatsheet'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [content, setContent] = useState(cheatsheet)

  const handleChange = e => {
    setContent(e.target.value)
  }
  return (
    <main>
      <header id="master-header">
        <h1>Markdown Previewer</h1>
      </header>
      <section>
        <Editor
          content={content}
          handleInput={handleChange}
        />
        <Preview content={content} />
      </section>
      <footer>
        <p>
          &copy; 2022 |{' '}
          <a href="https://linkedin.com/in/PabloPenia">
            Pablo Peña
          </a>
        </p>
        <p>
          <a href="https://github.com/PabloPenia//markdown-previewer">
            Source Code
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
