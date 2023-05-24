import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Sidemenu from '../components/Sidemenu';

const { Header, Content, Sider } = Layout;

function Root() {
    return (
         <Layout>
             <Header className="header">
                 <div className="logo">Admin</div>
             </Header>
             <Layout>
                 <Sider
                      width={200}
                      theme={'light'}
                 >
                     <Sidemenu />
                 </Sider>
                 <Layout
                      style={{
                          padding: '0 24px 24px',
                      }}
                 >
                     <Content
                          style={{
                              padding: 24,
                              margin: 0,
                              minHeight: 280
                          }}
                     >
                         <Outlet />
                     </Content>
                 </Layout>
             </Layout>
         </Layout>
    );
}

export default Root;
