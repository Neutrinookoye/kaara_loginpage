import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='d-flex justify-content-center'>
				<p className='mr-5 pt-1'>&copy; 2021. Greenov8 Global Platforms Ltd.</p>
				<div className='pt-0 mt-0'>
					<Link to='#' className='mr-3'>
						Terms
					</Link>
					<span>|</span>
					<Link to='#' className='ml-3'>
						Privacy
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
