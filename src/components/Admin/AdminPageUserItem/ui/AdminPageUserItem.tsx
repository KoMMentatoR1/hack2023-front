import { Card, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { ButtonContainer } from '../../../Header/style/style'
import { FC } from 'react'
import { CardBody, CardRole } from '../style/style'

interface ProfileType {
  firstName: string
  lastName: string
  email: string
  role: string
}

const AdminPageUserItem: FC<ProfileType> = ({
  firstName,
  lastName,
  email,
  role,
}) => {
  return (
    <CardBody>
      <Typography variant='body2'>{firstName + ' ' + lastName}</Typography>
      <Typography variant='body2'>{email}</Typography>
      <CardRole
        style={{
          
        }}
      >
        <Typography variant='body2'>{role}</Typography>
        <ButtonContainer>
          <EditIcon />
        </ButtonContainer>
      </CardRole>
    </CardBody>
  )
}

export default AdminPageUserItem
