import { ChangeEvent, useState } from 'react'
import cheatsheet from '~/cheatsheet'
import EditorsCtx, { EditorsCtxProps } from '~/context/editors.context'
import Editor from './Editor'
import Preview from './Preview'

function DocUi() {
	const [content, setContent] = useState<string>(cheatsheet)
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value)
	const { Layout } = EditorsCtx
	return (
		<Layout.Consumer>
			<div>
				{Layout.edit && <Editor content={content} handleInput={handleChange} />}

				{Layout.preview && <Preview content={content} />}
			</div>
		</Layout.Consumer>
	)
}
export default DocUi
