import { createContext } from 'react'

export type EditorsCtxProps = {
	edit: boolean
	preview: boolean
	dir: 'h' | 'v'
	fullView: boolean
}

const EditorsCtx = createContext<EditorsCtxProps | null>(null)

export default EditorsCtx
