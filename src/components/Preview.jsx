import { marked } from 'marked'
import hljs from 'highlight.js'
import DOMPurify from 'dompurify'

marked.setOptions({
  //renderer: new marked.Renderer(),
  breaks: true,
  highlight: code => hljs.highlightAll(code),
})
const getMd = string => DOMPurify.sanitize(marked(string))
const Preview = ({ content, handleMd }) => {
  return (
    <div className="panel">
      <header>
        <h2>Preview</h2>
        <div className="icons">icons</div>
      </header>
      <article
        id="preview"
        dangerouslySetInnerHTML={{
          __html: getMd(content),
        }}
      ></article>
    </div>
  )
}

export default Preview
