import { Box } from '@mui/material'
import React from 'react'
import AdminPageUserItem from '../../AdminPageUserItem'
import { Typography } from '@mui/material'
import { PageHeader, TableHeader } from '../style/style'

const AdminBody = () => {
  const users = [
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'example@email.com',
      role: 'USER',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'example@email.com',
      role: 'USER',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'example@email.com',
      role: 'USER',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'example@email.com',
      role: 'USER',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'example@email.com',
      role: 'USER',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      email: 'example@email.com',
      role: 'USER',
    },
  ]
  return (
    <Box
      sx={{
        gap: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '60px',
      }}
    >
      <PageHeader variant='h3'>Админ панель</PageHeader>
      <TableHeader variant='body1'>
        <div>Имя, Фамилия</div>
        <div style={{
          marginRight: "40px"
        }}>Email</div>
        <div>Роль</div>
      </TableHeader>
      {users.map(el => (
        <AdminPageUserItem {...el} />
      ))}
    </Box>
  )
}

export default AdminBody
