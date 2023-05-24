import { Typography, Card, Space, Statistic, Row, Col, Progress, Table } from 'antd';
import { DollarCircleOutlined, AreaChartOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getOrders } from '../API/index';
import { useEffect, useState } from 'react';

const data = [{
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
},
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function DashboardCard({ icon, title, value }) {
    return (
         <Card>
             <Space>
                 {icon}
                 <Statistic title={title} value={value} />
             </Space>
         </Card>
    );
}

function DashboardChart() {
    return (
         <ResponsiveContainer width="100%" height="100%">
             <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                  }}
             >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
             </AreaChart>
         </ResponsiveContainer>
    );
}

function RecentOrders({data}) {
    return (
         <>
             <Typography.Title level={4}>Recent Orders</Typography.Title>
             <Table
                  columns={[
                      {
                          title: 'Title',
                          dataIndex: 'title'
                      },
                      {
                          title: 'Quantity',
                          dataIndex: 'quantity'
                      },
                      {
                          title: 'Price',
                          dataIndex: 'price'
                      },
                      {
                          title: 'Total Price',
                          dataIndex: 'total'
                      }
                  ]}
                  pagination={false}
                  dataSource={data.products}
             />
         </>
    );
}

function Dashboard() {
    const [recentOrders, setResentOrders] = useState([]);
    
    useEffect(() => {
        getOrders().then(data => {
            setResentOrders(data);
        });
    }, []);
    
    return (
         <div>
             <Typography.Title level={4}>Dashboard</Typography.Title>
             <Row gutter={16} style={{ marginBottom: 16 }}>
                 <Col flex={1}>
                     <DashboardCard icon={<AreaChartOutlined style={{ fontSize: 24 }} />} title={"Orders"} value={12345} />
                 </Col>
                 <Col flex={1}>
                     <DashboardCard icon={<UserOutlined style={{ fontSize: 24 }} />} title={"Products"} value={55} />
                 </Col>
                 <Col flex={1}>
                     <DashboardCard icon={<ShoppingCartOutlined style={{ fontSize: 24 }} />} title={"Users"} value={100} />
                 </Col>
                 <Col flex={1}>
                     <DashboardCard icon={<DollarCircleOutlined style={{ fontSize: 24 }} />} title={"Revenue"} value={450} />
                 </Col>
             </Row>
             <Row gutter={16} style={{ marginBottom: 16 }}>
                 <Col flex={1}>
                     <Card style={{ textAlign: 'center' }}>
                         <Progress type="dashboard" percent={75} />
                         <p>Total sales</p>
                         <h3>$12345</h3>
                     </Card>
                 </Col>
                 <Col flex={1}>
                     <DashboardChart />
                 </Col>
             </Row>
             
             <Row>
                 <Col flex={1}>
                     <RecentOrders data={ recentOrders }  />
                 </Col>
             </Row>
         </div>
    );
}

export default Dashboard;
