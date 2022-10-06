import { ReactNode } from 'react'

type ButtonProps = {
	className?: string
	name?: string
	children: ReactNode
	handleClick: (e: any) => void
}

function Button({ name, className, handleClick, children }: ButtonProps) {
	const attributes = {
		className,
		name,
		onClick: handleClick,
	}
	return <button {...attributes}>{children}</button>
}

export default Button
