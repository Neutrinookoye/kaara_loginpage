import React from 'react'
import BodyImg from '../assets/Group 70.png'
import Dot from '../assets/Path 10.svg'

import '../styles/textBody.css'

const TextBody = () => {
	return (
		<>
			<div className='col-md-6 order-last order-md-first'>
				<div className='text_body'>
					<div className='text-center'>
						<img src={BodyImg} alt='money icon' className='body_img' />
					</div>
					<h4>
						Kaara is the safest place to keep and manage your fx transactions
						online!
					</h4>
					<div>
						<p>
							<img src={Dot} alt='dot' /> Transparent Pricing{' '}
						</p>
						<p>
							<img src={Dot} alt='dot' /> Safe &amp; Secure with 128bit
							encryption{' '}
						</p>
						<p>
							<img src={Dot} alt='dot' /> Fast &amp; Easy payments Pan Africa{' '}
						</p>
						<p>
							<img src={Dot} alt='dot' /> Cheapest transfer fees{' '}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default TextBody
