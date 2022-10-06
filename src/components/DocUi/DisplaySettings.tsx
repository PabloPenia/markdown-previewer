import { MouseEvent, useState } from 'react'
import EditorsCtx, { EditorsCtxProps } from '~/context/editors.context'
import Button from '../common/Button'
import Icon from '../common/icon/icon.component'

function DisplaySettings() {
	const defaultLayout: EditorsCtxProps = {
		edit: true,
		preview: true,
		dir: 'h',
		fullView: false,
	}
	const [layout, setLayout] = useState<EditorsCtxProps>(defaultLayout)

	const handler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		switch (e.currentTarget.name) {
			case 'split-h': {
				setLayout(() => ({
					...defaultLayout,
				}))
				break
			}
			case 'split-v': {
				setLayout(() => ({
					...defaultLayout,
					dir: 'v',
				}))
				break
			}
			case 'no-split': {
				setLayout(() => ({
					...defaultLayout,
					preview: false,
					fullView: true,
				}))
				break
			}
			default:
				break
		}
	}

	return (
		<EditorsCtx.Provider value={layout}>
			<div className='flex'>
				<Button name='split-h' handleClick={handler}>
					<Icon id='icon__ui-split-h' />
				</Button>
				<Button name='split-v' handleClick={handler}>
					<Icon id='icon__ui-split-v' />
				</Button>
				<Button name='no-split' handleClick={handler}>
					<Icon id='icon__ui-no-split' />
				</Button>
			</div>
		</EditorsCtx.Provider>
	)
}
export default DisplaySettings
