import { styled, Card, Typography } from '@mui/material';

export const CardBody = styled(Card)(({ theme }) => ({
  backgroundColor: theme.background.layout,
	display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 10px',
	maxWidth: "650px",
	width:"100%",
    color: theme.text.primary
}))
export const CardRole = styled("div")(({ theme }) => ({
	display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
}))
