import { List, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { Header } from '../../../Header'
import { LayoutBody, LayoutMain } from '../style/style'

interface ProfileLayoutProps {
  children?: React.ReactNode
}

export const MapLayout: FC<ProfileLayoutProps> = ({ children }) => {



  return (
    <div>
      <Header />
      <LayoutMain>
        <LayoutBody>{children}</LayoutBody>
      </LayoutMain>
    </div>
  )
}
