import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const Form = () => {
	const classes = useStyles();

	const [creator, setCreator] = useState('');
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [tags, setTags] = useState('');
	const [selectedFile, setSelectedFile] = useState('');

	const handleSubmit = () => {};
	const handleClear = () => {};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant='h6'>Creating a Memory</Typography>

				<TextField
					id='outlined-basic'
					label='Creator'
					variant='outlined'
					fullWidth
					value={creator}
					onChange={(e) => setCreator(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Title'
					variant='outlined'
					fullWidth
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Message'
					variant='outlined'
					multiline
					minRows={4}
					fullWidth
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Tags'
					variant='outlined'
					fullWidth
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) => setSelectedFile(base64)}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='small'
					onClick={handleClear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
