import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Error from './pages/Error';
import './App.css';

const routes = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <Error />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/products',
      element: <Products />
    }
  ]
}]);

function App() {
  return (
       // <Layout>
       //     <Header className="header">
       //         <div className="logo">Admin</div>
       //     </Header>
       //     <Layout>
       //         <Sider
       //             width={200}
       //             theme={'light'}
       //         >
       //             <Sidemenu />
       //         </Sider>
       //         <Layout
       //             style={{
       //                 padding: '0 24px 24px',
       //             }}
       //         >
       //             <Breadcrumb
       //                 style={{
       //                     margin: '16px 0',
       //                 }}
       //             >
       //                 <Breadcrumb.Item>Home</Breadcrumb.Item>
       //                 <Breadcrumb.Item>List</Breadcrumb.Item>
       //                 <Breadcrumb.Item>App</Breadcrumb.Item>
       //             </Breadcrumb>
       //             <Content
       //                 style={{
       //                     padding: 24,
       //                     margin: 0,
       //                     minHeight: 280
       //                 }}
       //             >
       //                 Content
       //             </Content>
       //         </Layout>
       //     </Layout>
       // </Layout>
       <RouterProvider router={routes} />
  );
}

export default App;
