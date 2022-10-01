import { ChangeEvent } from 'react'

type Props = {
	content: string
	handleInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
const Editor = ({ content, handleInput }: Props) => {
	return (
		<div className='panel'>
			<header>
				<h2>Editor</h2>
				{/* <div className="icons">icons</div> */}
			</header>

			<textarea id='editor' value={content} onChange={handleInput}></textarea>
		</div>
	)
}

export default Editor
