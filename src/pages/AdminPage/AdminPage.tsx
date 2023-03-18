import AdminBody from '../../components/Admin/AdminBody'
import { BaseContainer } from '../../components/base/base-container'
import { Header } from '../../components/Header'

const AdminPage = () => {
  return (
    <BaseContainer>
      <Header />
      <AdminBody />
    </BaseContainer>
  )
}

export default AdminPage
