import React, { useEffect, useState, useContext } from 'react'

import { appContext } from '../../context/appContext';
import './style.scss'

const HomeTemplate = () => {
	const context = useContext(appContext);

	if (context == null) {
		throw Error('Failed to mount context');
	}

	const wrappedPositions = context.positions.map(position => <li>{position.title}</li>)
	const loading = <p>Loading...</p>

	return (
		<div className='flex flex-col justify-center items-center select-none min-h-screen'>
			<ul>
				{ context.positions.length > 0 ? wrappedPositions : loading }
			</ul>
		</div>
	)
}

export default HomeTemplate
