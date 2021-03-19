import React, { useEffect, useState } from 'react'

import HomeTemplate from '../components/templates/HomeTemplate'
import { appContext } from '../context/appContext';
import { getPositions } from '../utils/requests';
import { Position, Positions } from '../utils/requests/models';

interface Props {}

const Home: React.FC = (props: Props) => {
	const [ positions, updatePositions ] = useState<Positions>([]);

	useEffect(() => {
		getPositions()
			.then(positions => updatePositions(positions));
	});

	return (
		<appContext.Provider value={{ positions, updatePositions }}>
			<HomeTemplate />
		</appContext.Provider>
	)
}

export default Home
