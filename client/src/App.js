import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import images from './constants';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postActions';

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts);
	}, []);

	return (
		<div>
			<Container maxWidth='lg'>
				<AppBar position='static' color='inherit' className={classes.appBar}>
					<Typography variant='h2' align='center' className={classes.heading}>
						Memories
					</Typography>
					<img
						className={classes.image}
						src={images.memories}
						alt='memories'
						height='60'
					/>
				</AppBar>
				<Grow in>
					<Container>
						<Grid
							container
							justifyContent='space-between'
							alignItems='stretch'
							spacing={3}
						>
							<Grid item xs={12} sm={7}>
								<Posts />
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</div>
	);
};

export default App;
