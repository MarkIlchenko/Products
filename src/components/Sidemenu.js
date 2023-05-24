import { Menu } from 'antd';
import { DashboardOutlined, UserOutlined, ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    {
        label: 'Dashboard',
        key: '/',
        icon: <DashboardOutlined />
    },
    {
        label: 'Users',
        key: '/users',
        icon: <UserOutlined />
    },
    {
        label: 'Products',
        key: '/products',
        icon: <ShoppingCartOutlined />
    },
    {
        label: 'System Configuration',
        key: '/system',
        icon: <SettingOutlined />
    }
]

function Sidemenu() {
    const navigate = useNavigate();
    return (
         <Menu
              mode="inline"
              items={menuItems}
              onClick={(item) => {
                  navigate(item.key);
              }}
         />
    );
}

export default Sidemenu;
