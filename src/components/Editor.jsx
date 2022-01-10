const Editor = ({ content, handleInput }) => {
  return (
    <div className="panel">
      <header>
        <h2>Editor</h2>
        <div className="icons">icons</div>
      </header>

      <textarea
        id="editor"
        value={content}
        onChange={handleInput}
      ></textarea>
    </div>
  )
}

export default Editor
