import React from "react";
import Tilt from "react-tilt"
import './Logo.css';

const Logo = () =>{
	return(
		<div className='ma4 mt0'>
			<Tilt className='Tilt b2 shadow-2' options={{max:55}} style={{height:250,width:250}}>
				<div className='Tilt-inner'> logo  </div>
			</Tilt>
		</div>
	)
}

export default Logo;