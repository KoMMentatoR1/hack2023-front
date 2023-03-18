import { styled, Card, Typography } from '@mui/material';

export const TableHeader = styled(Typography)(({theme}) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	maxWidth: '650px',
	width: '100%',
	paddingRight: '25px',
	color: theme.text.primary,
})) 

export const PageHeader = styled(Typography)(({theme}) => ({
	color: theme.text.primary,
})) 