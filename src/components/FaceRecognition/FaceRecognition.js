import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({faceUrl, box}) =>{

	return(
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='image' alt = '' src={faceUrl} width='500px' height='auto'/>
				<div className='bounding-box' style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol }}> </div>
			</div>
		</div>
	)
}

export default FaceRecognition;