import { marked } from 'marked'
import hljs from 'highlight.js'
import DOMPurify from 'dompurify'
import { AiOutlineEye } from 'react-icons/ai'

marked.setOptions({
	renderer: new marked.Renderer(),
	breaks: false,
	highlight: (code, lang) => {
		const language = hljs.getLanguage(lang) ? lang : 'plaintext'
		return hljs.highlight(code, { language }).value
	},
	gfm: true,
	langPrefix: 'hljs language-',
	smartLists: true,
	smartypants: true,
	xhtml: true,
})
const getMd = (str: string) => DOMPurify.sanitize(marked(str))

const Preview = ({ content }: { content: string }) => {
	return (
		<div className='panel'>
			<header>
				<div className='flex label'>
					<AiOutlineEye />
					<h3>Preview</h3>
				</div>
			</header>
			<article
				id='preview'
				dangerouslySetInnerHTML={{
					__html: getMd(content),
				}}
			></article>
		</div>
	)
}

export default Preview
