import { AiOutlineForm } from 'react-icons/ai'
import { ChangeEvent } from 'react'
import Button from '../common/Button'

type Props = {
	content: string
	handleInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
const Editor = ({ content, handleInput }: Props) => {
	const handler = (): void => {
		console.log('Function not implemented')
	}
	return (
		<div className='panel'>
			<header>
				<div className='flex label'>
					<AiOutlineForm />
					<h3>Editor</h3>
				</div>
				<div className='flex buttons'>
					<Button handleClick={handler}>fghfjk</Button>
				</div>
			</header>
			<textarea id='editor' value={content} onChange={handleInput}></textarea>
		</div>
	)
}

export default Editor
