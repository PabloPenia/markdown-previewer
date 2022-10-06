import { AiOutlineForm } from 'react-icons/ai'
import { BsFillLightningFill } from 'react-icons/bs'

import { Link, useMatch } from 'react-router-dom'
import DisplaySettings from '~/components/DocUi/DisplaySettings'

function Navigation() {
	const atDocCreate = useMatch('/doc/new')
	return (
		<header className='flex'>
			<Link className='brand' to='/'>
				<BsFillLightningFill />
				<h1>FastDoc</h1>
			</Link>
			{atDocCreate && <DisplaySettings />}
			<nav>
				<Link to='doc'>
					<span>My Docs</span>
				</Link>
				<Link to='doc/new'>
					<AiOutlineForm />
					<span>Write</span>
				</Link>
			</nav>
		</header>
	)
}
export default Navigation
