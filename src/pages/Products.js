import React, {useState, useEffect} from "react";
import {getProducts} from "../API";
import {Typography, Avatar, Table} from "antd";


function Products() {
    const [products, setProduct] = useState([])
    useEffect(() => {
        getProducts().then(data => {
            setProduct(data.products);
        });
    }, []);
    
    return (
         <div>
             <Table
                  columns={[
                      {
                          title: 'ID',
                          dataIndex: 'id',
                      },
                      {
                          title: 'Avatar',
                          dataIndex: 'thumbnail',
                          render: (url) => {
                              return <Avatar src={<img src={url} alt="avatar" />} />
                          }
                      },
                      {
                          title: 'Name',
                          dataIndex: 'title'
                      },
                      {
                          title:  'Price',
                          dataIndex: 'price'
                      },
                      {
                          title: 'Brand',
                          dataIndex: 'brand'
                      }
                  ]}
                  dataSource={products}
                  rowKey='id'
             />
             {/*Products*/}
         </div>
    );
}

export default Products;
