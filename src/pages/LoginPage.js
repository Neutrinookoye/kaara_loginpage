import React from 'react'
import Header from '../components/Header'
import TextBody from '../components/TextBody'
import FormComponent from '../components/FormComponent'
import Footer from '../components/Footer'

import TopImage from '../assets/Group 5@2x.png'
import BottomImage from '../assets/Group 8@2x.png'

import '../styles/loginPage.css'

const LoginPage = () => {
	return (
		<section className='login'>
			<Header />
			<img src={TopImage} alt='icon' className='top_image' />
			<div className='container'>
				<div className='row'>
					<TextBody />
					<FormComponent />
				</div>
				<Footer />
			</div>
			<img src={BottomImage} alt='icon' className='bot_image' />
		</section>
	)
}

export default LoginPage
