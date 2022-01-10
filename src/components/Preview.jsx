const Preview = ({ content }) => {
  return (
    <div className="panel">
      <header>
        <h2>Preview</h2>
        <div className="icons">icons</div>
      </header>
      <article id="preview">{content}</article>
    </div>
  )
}

export default Preview
