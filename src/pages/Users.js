import { Typography, Table, Avatar } from 'antd';
import { getUsers } from '../API/index';
import { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUsers().then(data => {
            setUsers(data.users);
        });
    }, []);
    
    return (
         <div>
             <Typography.Title level={4}>Users</Typography.Title>
             <Table
                  columns={[
                      {
                          title: 'ID',
                          dataIndex: 'id'
                      },
                      {
                          title: 'Avatar',
                          dataIndex: 'image',
                          render: (url) => {
                              return <Avatar src={<img src={url} alt="avatar" />} />
                          }
                      },
                      {
                          title: 'Name',
                          dataIndex: 'firstName'
                      },
                      {
                          title: 'Phone',
                          dataIndex: 'phone'
                      },
                      {
                          title: 'Email',
                          dataIndex: 'email'
                      }
                  ]}
                  dataSource={users}
                  rowKey='id'
             />
         </div>
    );
}

export default Users;
