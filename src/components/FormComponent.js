import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/formComponent.css'

const FormComponent = () => {
	return (
		<>
			<div className='col-md-6 order-first order-md-last'>
				<div className='form_comp'>
					<h4 className='form_text'>Welcome Back!</h4>
					<p className='intro_text form_text'>
						Login to start managing your transactions
					</p>
					<div>
						<form>
							<input
								type='email'
								placeholder='your email'
								className='form-control form_input form_text'
							/>
							<input
								tupe='password'
								placeholder='password'
								className='form-control form_input form_text'
							/>
							<div className='d-flex justify-content-between'>
								<span className='remember'>
									<label class='switch'>
										<input type='checkbox' />
										<span class='slider round'></span>
									</label>
									Remember me
								</span>
								<Link to='#' className='forgot form_text'>
									Forgot password?
								</Link>
							</div>
							<button type='submit' className='btn form-control form_text'>
								LET ME IN
							</button>
						</form>
						<div>
							<p className='outro_text form_text'>
								First time here?{' '}
								<Link to='#' className='forgot'>
									Register Now
								</Link>{' '}
								and proceed
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FormComponent
