import {Table} from 'antd'
import { Content } from 'antd/lib/layout/layout';
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {getProducts} from '../redux/action/productAction'
const columns = [
      {
            title: 'Id',
            dataIndex: 'id',
    
          },
      {
        title: 'Name',
        dataIndex: 'name',

      },
      {
        title: 'Sku',
        dataIndex: 'sku',
      },
     
    ];
    
  
function Pagination() {
      const [loading,setLoading] = useState(false)
      const {products} =useSelector(state=>state.products)
      const [page,setPage]=useState('')
      const [pageSize,setPageSize] = useState('')
      const dispatch = useDispatch()
     
      useEffect(()=>{
        async function getData(){
           dispatch(getProducts(pageSize||4,page||1))
        }
        getData()
      },[page,pageSize])
      let datas= products?.items?.map((item,index)=>item)

      let product = datas?.map((item,index)=>({
            name:item?.name,
            id:item?.id,
            sku:item?.sku
            
      }))
      

    
      return (
            <div>
                  <Content style={{padding:'50px'}}>
                        <form>
                             <input 
                             value={page}
                             onChange={(e)=>setPage(e.target.value)}
                              type="text"
                              placeholder="page" 
                              style={{border:"2px,solid grey",width:80,marginRight:10}}/>
                             <input
                              value={pageSize}
                              onChange={(e)=>setPageSize(e.target.value)}
                              placeholder ="size" type="text" style={{border:"2px,solid grey",width:80}}/>
                        </form>
                        
                  <Table
                  loading={loading}
                  columns={columns}
                  dataSource={product}
                  pagination={{
                        current:page||1,
                        pageSize:pageSize||4,
                        onChange:(page,pageSize)=>{
                              setPage(page)
                              setPageSize(pageSize)
                        }
                  }}
                  >

                  </Table>
                  </Content>
            </div>
      )
}

export default Pagination
