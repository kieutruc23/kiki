import { css } from '@emotion/react'
import React, { FunctionComponent, useEffect, useState } from 'react'
import InputComponent from '../../parts/input/input.component'
import { AiOutlineSearch, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
import { HiOutlineLogout } from 'react-icons/hi'
import { searchProduct } from '~/app/modules/admin/product/service/product.service'
import Marquee from 'react-fast-marquee'
import { getAllContent } from '~/app/api/content/content.api'
import { FiUserCheck } from 'react-icons/fi';
import { PiShoppingCartThin } from 'react-icons/pi'
import { CheckAuth } from '~/app/container/check-auth/CheckAuth.component'

interface HeaderComponentProps {
  props?: any
}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
  const [content, setContent] = useState([])
  useEffect(() => {
    getAllContent().then(({ data }) => setContent(data));
  }, []);
  let navigate = useNavigate()
  const {
    data: { carts },
    actions
  } = useCartRedux()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchProducts, setSearchProducts] = useState<any[]>([])
  const [stateInput, setStateInput] = useState(false)
  const [searchError, setSearchError] = useState(false)
  let keyword = new URLSearchParams(location.search).get('q')
  const {
    data: { products },
    actions: productAction
  } = useProductRedux()
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    searchProduct(event.target.value).then(
      (res) => {
        setSearchProducts(res.data),
          setSearchError(false)
      },
      (err: any) => {
        setSearchError(true)
      }
    )
  }
  useEffect(() => {
    productAction.getAllProduct()
    if (stateInput && products.length != 0) {
      setStateInput(true)
    }
  }, [searchTerm])
  const handelSubmitData = () => {
    navigate(`/products?q=${searchTerm}`)
    if (keyword) {
      setSearchTerm(keyword)
    } else setSearchTerm('')
    setStateInput(false)
  }
  useEffect(() => {
    if (keyword) {
      setSearchTerm(keyword)
    } else setSearchTerm('')
  }, [keyword])
  
  const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    if (accessToken) {
      actions.getAllCart()
    }
  }, [accessToken])
  
  const handleLoginLogout = () => {
    if (accessToken) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('emailUser')
      localStorage.removeItem('checkAuth')
      localStorage.removeItem('userID')
      localStorage.removeItem('voucherCode');
      localStorage.removeItem("sale");
      localStorage.removeItem("total");
      navigate('/customer/login')
    } else {
      navigate('/')
    }
  }
  return (
    <div>
      <div className='mx-auto top-0 flex items-center justify-between z-[2] sm:px-[50px] w-[100%] bg-white fixed  h-[80px]'>
        <div css={cssMenu} className='space-x-8'>
          <div>
            <Link className='hover:text-red-500' to={'/'}>
              TRANG CHỦ
            </Link>
          </div>
          <div>
            <Link className='hover:text-red-500' to={'/products'}>
              SẢN PHẨM
            </Link>
          </div>
          <div>
            <Link className='hover:text-red-500' to={'/LifeStyle'}>
              LifeStyle
            </Link>
          </div>
          <div>
            <Link className='hover:text-red-500' to={'/Contacts'}>
              LIÊN HỆ
            </Link>
          </div>
          <div className='title'>
            <Link className='hover:text-red-500' to={''}>
              VỀ CHÚNG TÔI
            </Link>
            <div className='news-product'>
              <Link to={'/general'} className='py-4 px-4 font-semibold'>
                {' '}
                Về Kiki fashion
              </Link>
              <Link to={'/Community-Activities'} className='py-4 px-4 font-semibold'>
                {' '}
                Fashion Show
              </Link>
              <Link to={'/fashion-Show'} className='py-4 px-4 font-semibold'>
                {' '}
                Hoạt động cộng đồng
              </Link>
            </div>
          </div>
        </div>
        <Link to={'/'}>
          <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/404263307_357890920233334_4206441658182925266_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CIe-0hEhr1YAX9eSH-4&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBhxKIHBbEZq4gmG7rKuokBaGaBIoTNrhkRZ_u8GAA-xg&oe=655FAA1F " className='w-[170px] mr-12 max-sm:hidden' />
        </Link>
        <div className='flex align-items:center max-sm:hidden' css={cssWrapperMenu}>
          <div className='relative'>
            <InputComponent
              onChange={handleSearchInputChange}
              onClick={handelSubmitData}
              onFocus={() => setStateInput(true)}
              type='text'
              value={searchTerm || ''}
            />
            {stateInput && (
              <div className='absolute z-20 rounded-lg bg-white top-full left-0 w-full'>
                {!searchError && searchProducts?.slice(0, 10).map((product: any) => {
                  return (
                    <ul key={product?._id} className=''>
                      <Link
                        to={`/products?q=${product?.name}`}
                        onClick={() => {
                          setStateInput(false)
                        }}
                      >
                        <li className='px-5 py-3 flex justify-start hover:bg-gray-100'>
                          <div className='pl-[18px] pr-2'>
                            <AiOutlineSearch />
                          </div>
                          <div className='truncate'>{product?.name}</div>
                        </li>
                      </Link>
                    </ul>
                  )
                })}

              </div>
            )}
          </div>
          {stateInput && <div css={cssDarkScreen} onClick={() => setStateInput(false)}></div>}
          <div className='item-menu'>
            <div className='icon px-3'>
              <FiUserCheck />
            </div>
            <div className='title'>
              {accessToken ? (
                <div>
                  <span className='px-4 text-black max-sm:hidden'>
                    XIN CHÀO
                    <ul className='links'>
                      <li>
                        <button className='w-[100%] text-left'>
                          <p className=' font-normal text-[15px] py-3 hover:text-red-500 p-6' onClick={handleLoginLogout}>
                            {' '}
                            <HiOutlineLogout className='text-[20px]' />
                            Đăng xuất
                          </p>
                          <Link to={'/manage'}>
                            <p className=' font-normal text-[15px] py-3 p-6'>
                              <AiOutlineSetting className='text-[20px]' />
                              Quản lý{' '}
                            </p>
                          </Link>
                          <CheckAuth children={<Link to={'/admin'} className='inline-block w-[100%] font-normal bg-black mt-4 rounded-[8px] text-white text-[15px] py-3 hover:bg-[#ffaa00] p-6' >
                            Quản lý website
                          </Link>}/>
                        </button>
                      </li>
                    </ul>
                  </span>
                </div>
              ) : (
                <Link to={'/customer/login'}>Tài khoản</Link>
              )}
            </div>
          </div>
          <div className='hr-height'></div>
          <div css={cssCartMain} className='cart-main relative'>
            <Link to={'/cart'}>
              <AiOutlineShoppingCart className='font-extrabold' />
            </Link>
            {carts?.length >= 0 && accessToken ? <span className='absolute show-count'>{carts?.length}</span> : ''}
          </div>
        </div>
      </div>
      {content.length > 0 && content.some((item: any) => item.hidden === "Hiển thị") && (
        <Marquee css={cssMarquee} direction="left" className='py-3 z-0 sticky' style={{ borderTop:'1px solid black',borderBottom:'1px solid black',width:'95%',margin:'100px auto 5px', animationPlayState:'paused' }}>
          {content.map((item: any) => {
            if (item.hidden === "Hiển thị") {
              return (
                <p style={{ padding: "0px 300px" }} key={item._id} className='text-[20px] text-black italic flex' >
                  <img className='w-auto h-[30px] px-3' src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" alt="Logo" />
                  {item.content}
                </p>
              );
            }
            return null;
          })}
        </Marquee>
      )}

    </div>
  )
}

export default HeaderComponent
const cssMenu = css`
  display: flex;
  font-size: 13px;
  color: #221f20;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif !important;

  .news-product {
    list-style: none;
    background-color: white;
    position: absolute;
    top: 17px;
    width: 216px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #e7e8e9;
    border-right: 1px solid #e7e8e9;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
    border-radius: 8px;
  }
  .news-product a {
    margin: 4px;
  }
  .news-product a:hover {
    background-color: rgba(39, 39, 42, 0.12);
    border-radius: 8px;
  }
  .title:hover .news-product {
    visibility: visible;
  }
  .title {
    cursor: pointer;
    position: relative;
  }
`
const cssWrapperMenu = css`
  .links {
    font-size: 16px;
    list-style: none;
    background-color: white;
    position: absolute;
    border-left: 1px solid #e7e8e9;
    border-right: 1px solid #e7e8e9;
    border-bottom: 1px solid #e7e8e9;
    top: 30px;
    right: -16px;
    width: 162px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
  }
  .links svg {
    display: inline-block;
    margin-right: 8px;
  }
  .links p:hover {
    background-color: rgba(39, 39, 42, 0.12);
    border-radius: 8px;
  }
  .item-menu:hover .links,
  .links:hover {
    visibility: visible;
  }
  .item-menu {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    justify-content: flex-end;
    border: 1px solid rgba(39, 39, 42, 0.12);
    margin: 0 4px;
    .icon {
      margin-right: 4px;
      font-size: 22px;
    }
    .title {
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      position: relative;
    }
  }
  .item-menu:hover {
    background-color: rgba(39, 39, 42, 0.12);
    border: 1px solid rgba(39, 39, 42, 0.11);
  }
  .hr-height {
    width: 1px;
    border: 1px solid rgba(39, 39, 42, 0.12);
    margin: 0 4px;
  }
`
const cssCartMain = css`
  .show-count {
    top: 0px;
    right: 0px;
    border-radius: 50px;
    background: #ef4444;
    font-size: 1.3rem;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  position: relative;
  display: block;
  height: 100%;
  padding: 8px 14px;
  font-size: 22px;
  border-radius: 8px;
  color: var(--color-black);
  cursor: pointer;

  @media (min-width: 0) and (max-width: 739px) {
    padding: 0;
    margin-left: 10px;
  }
`
const cssDarkScreen = css`
  z-index: 10;
  opacity: 0.5;
  position: fixed;
  width: 100%;
  top: 95px;
  bottom: 0;
  left: 0;
  right: 0;
`
const cssMarquee = css `
.rfm-marquee:hover{
  animation-play-state: paused
}
`
