import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { Select, Space, Pagination } from 'antd'

import { useProductRedux } from '../../redux/hook/useProductReducer'
import ItemProduct from '~/app/component/parts/itemproduct/itemproduct.component'
import { Link } from 'react-router-dom'

interface ListProductProps {
  props?: any
  data: any
}

const ListProducts: FunctionComponent<ListProductProps> = ({ data }) => {
  let keyword = new URLSearchParams(location.search).get('q') ?? ''
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <div css={cssListProducts} className='w-[100%]'>
      <div className='grid grid-cols-4 gap-10 p-10'>
        {data.map((item: any, index: any) => {
          if (item && item.name && item.name.toLowerCase().includes(keyword.toLowerCase())) {
            return (
              <Link to={`/detail/${item._id}`} key={index}>
                <ItemProduct itemProduct={item} />
              </Link>
            )
          }
        })}
      </div>
      <div className='w-[100%] text-center'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default ListProducts

const cssListProducts = css`

.select-title{
    min-width: 240px;
    width: 100%;
    min-height: 50px;
    border: 1px solid #E7E8E9;
    border-radius: 24px;
    padding: 4px 20px 12px 16px;    
    position: relative;
    display: block;
}
.arrange-title{
    l
}
`
