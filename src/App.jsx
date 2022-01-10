import { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
const defaultContent = `# Heading 1
## Heading 2
### Heading 3`
function App() {
  const [input, setInput] = useState(defaultContent)

  const handleInput = e => {
    setInput(e.target.value)
  }
  return (
    <main>
      <header id="master-header">
        <h1>Markdown Previewer</h1>
      </header>
      <section>
        <Editor content={input} handleInput={handleInput} />
        <Preview content={input} />
      </section>
      <footer>
        <p>
          &copy; 2022 |{' '}
          <a href="https://linkedin.com/in/PabloPenia">
            Pablo Peña
          </a>
        </p>
        <p>
          <a href="https://pablopenia.github.io/markdown-previewer">
            Source Code
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
