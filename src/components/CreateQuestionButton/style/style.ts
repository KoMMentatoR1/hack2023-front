import { styled, Button } from '@mui/material';
export const ButtonStyled = styled(Button)(({theme})=>({
	marginRight: '10px',
	backgroundColor: '#F36C41',
	'&:hover': {
		backgroundColor: '#D25C37 !important',
	},
}))

