import Editor from './components/Editor'
import Preview from './components/Preview'
function App() {
  return (
    <main>
      <header>
        <h1>Markdown Previewer</h1>
      </header>
      <section>
        <div className="window">
          <Editor />
        </div>
        <div className="window">
          <Preview />
        </div>
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
