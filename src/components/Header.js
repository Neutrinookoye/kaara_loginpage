import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Group 2.png'
import Question from '../assets/Group 3.png'
import '../styles/header.css'

const Header = () => {
	return (
		<>
			<div className='container-fluid header'>
				<div className='d-flex justify-content-between'>
					<img src={Logo} alt='logo' className='img-logo' />
					<Link to='#'>
						<div className='d-flex'>
							<img src={Question} alt='question' className='img-question' />
							<p>Help?</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header
