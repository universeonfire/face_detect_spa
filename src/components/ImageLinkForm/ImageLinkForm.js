import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div className="ImgLinkForm">
			<p className='f3'>
				{'Face Detection'}
			</p>
			<div className='form center pa4 br3 shadow-5'>
				<div className='center'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green' onClick={onButtonSubmit}>Detect</button> 
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;