import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { ILoadingValues } from '../../redux/ducks/loading';
import { LoadindStyled } from './styles';

const Loading: React.FC = () => {
	const loading = useSelector<RootState, ILoadingValues>((state) => {
		return state.loadingReducer;
	});

	return (
		<LoadindStyled show={loading.display}>
			<div className="folding-cube">
				<div className="cube1 cube"></div>
				<div className="cube2 cube"></div>
				<div className="cube4 cube"></div>
				<div className="cube3 cube"></div>
			</div>
		</LoadindStyled>
	);
};

export default Loading;
