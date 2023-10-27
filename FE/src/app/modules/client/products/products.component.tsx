import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import TitleProducts from './titleProducts/titleProducts.component'
import SidebarProducts from './sidebarProducts/sidebarProducts.component'
import ListProducts from './listProduct/listProducts.component'
import { useProductRedux } from '../redux/hook/useProductReducer'

interface ProductProps {
  props?: any
}

const Products: FunctionComponent<ProductProps> = () => {
  const {
    data: { products },
    actions
  } = useProductRedux()
  const [data, setData] = useState<any>([])

  useEffect(() => {
    actions.getAllProduct()
  }, [])
  useEffect(() => {
    setData(products)
  }, [products])
  const handleDataUpdate = (id: any) => {
    const listPro = products.filter((pro: any) => pro.categoryId === id)
    setData(listPro)
    if (id === 'all') setData(products)
  }
  const handleSortPrice = (type: any) => {
    console.log(type)
    if (type == 'decending') {
      const listPrice = products.map((p: any) => p.price).sort((a: any, b: any) => b - a)
      const listSorted: any = []
      const sort = listPrice.map((price: any) =>
        products.map((pro: any) => (price === pro.price ? listSorted.push(pro) : null))
      )
      setData(listSorted)
    } else if (type == 'acending') {
      const listPrice = products.map((p: any) => p.price).sort((a: any, b: any) => a - b)
      const listSorted: any = []
      const sort = listPrice.map((price: any) =>
        products.map((pro: any) => (price === pro.price ? listSorted.push(pro) : null))
      )
      setData(listSorted)
    }
  }
  const handleGetPrice = (price: any) => {
    const rangePro = products.filter((pro: any) => {
      if (price[1]) {
        return pro.price >= price[0] && pro.price <= price[1]
      } else {
        return pro.price >= price[0]
      }
    })
    setData(rangePro)
  }

  const updateProductList = (updatedProduct: any) => {
    const existingProductIndex = data.findIndex((product: any) => product.id === updatedProduct.id);

    if (existingProductIndex !== -1) {
      const newData = [...data];
      newData[existingProductIndex] = updatedProduct;
      newData.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.createdAt).getTime());
      setData(newData);
    } else {
      setData((prevData: any) => [updatedProduct, ...prevData]);
    }
  };

  useEffect(() => {
    const products = actions.getAllProduct();
    if (Array.isArray(products)) {
      const latestProducts = products.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(latestProducts);
    }
  }, [actions]);
  return (
    <div css={cssProduct}>
      <TitleProducts>TẤT CẢ SẢN PHẨM</TitleProducts>
      <div className='title relative'>
        <h1 className='text-title absolute'>TẤT CẢ SẢN PHẨM </h1>
      </div>
      <div className='flex mt-[48px]'>
        <SidebarProducts
          data={data}
          onDataUpdate={handleDataUpdate}
          getPrices={handleGetPrice}
          sortPrices={handleSortPrice}
          sortNewProduct={updateProductList}
        />
        <ListProducts data={data} />
      </div>
    </div>
  )
}

export default Products

const cssProduct = css`
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
  justify-content: center;
  .title {
    margin-bottom: 32px;
  }
  .text-title {
    right: 28%;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #221f20;
    padding: 12px 40px 12px 16px;
    text-transform: uppercase;
  }
`
