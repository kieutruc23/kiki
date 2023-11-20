import { css } from '@emotion/react'
import React, { Children, FunctionComponent } from 'react'
import { FaFacebookF, FaYoutube, FaTelegram } from 'react-icons/fa';
import ButtonSqua from '../../parts/button/ButtonSqua';


interface FooterComponentProps {
  props?: any
}

const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
  return (
    <footer css={cssFooter}>
      <div className='main-footer flex justify-around py-40'>
        <div className='column-one'>
          <div className='logo flex justify-around gap-9 pb-6'>
            <div>
              <img className=' w-[270px] 'src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/404263307_357890920233334_4206441658182925266_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CIe-0hEhr1YAX9eSH-4&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBhxKIHBbEZq4gmG7rKuokBaGaBIoTNrhkRZ_u8GAA-xg&oe=655FAA1F "
            alt='' />
            </div>
            {/* <div>
              <img className='w-[61px] h-[20px]' src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777" alt="" />
            </div>
            <div>
              <img className='w-[70px] h-[26px]' src="https://pubcdn.ivymoda.com/ivy2/images/img-congthuong.png" alt="" />
            </div> */}
          </div>

          <div className='text-content'>
            <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
            <div className='py-3'>
              <p><b>Địa chỉ đăng ký:</b>Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam</p>
            </div>
            <div className=''>
              <p><b>Số điện thoại: </b> 0243 205 2222/ 090 589 8683</p>
            </div>
            <div className='py-3'>
              <p><b>Email: </b> cskh@ivy.com.vn</p>
            </div>
          </div>

          <div className='social flex gap-14 py-9'>
            <img className='w-[12px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_fb.svg" alt="" />
            <img className='w-[22px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_gg.svg" alt="" />
            <img className='w-[29px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_instagram.svg" alt="" />
            <img className='w-[26px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_pinterest.svg" alt="" />
            <img className='w-[24px]' src="https://pubcdn.ivymoda.com/ivy2/images/ic_ytb.svg" alt="" />
          </div>

          <div className='hotline py-4'>
            <a href="">Hotline: 0246 662 3434</a>
          </div>
        </div>
        <div className='column-two'>
          <h2 className='text-title'>Giới thiệu</h2>
          <div className='text-content' >
            <p>Về IVY moda</p>
            <p>Tuyển dụng</p>
            <p>Hệ thống cửa hàng</p>
          </div>
        </div>
        <div className='column-three'>
          <h2 className='text-title'>Dịch vụ khách hàng</h2>
          <div className='text-content' >
            <p>Chính sách điều khoản</p>
            <p>Hướng dẫn mua hàng</p>
            <p>Chính sách thanh toán</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách giao nhận vận chuyển</p>
            <p>Chính sách thẻ thành viên</p>
            <p>Hệ thống cửa hàng</p>
            <p>Q&A</p>
          </div>
        </div>
        <div className='column-four'>
          <h2 className='text-title'>Liên hệ</h2>
          <div className='text-content' >
            <p>Hotline</p>
            <p>Email</p>
            <p>Live chat</p>
            <p>Messenger</p>
            <p>Liên hệ</p>
          </div>
        </div>
        <div className='column-five'>
          <div className='form'>
            <h2 className='text-title'>Nhận thông tin các chương trình của IVY moda</h2>
            <form className='flex justify-between'>
              <input className='email' type="text" name="email" placeholder="Nhập địa chỉ email" />
              <ButtonSqua className='btnSqua'>
                Đăng ký
              </ButtonSqua>
            </form>
          </div>

          <div className='down-app'>
            <p className='text-title'> Download App</p>
            <div className=''>
              <img className='mb-4' src="https://pubcdn.ivymoda.com/ivy2/images/appstore.png" alt="" />
              <img src="https://pubcdn.ivymoda.com/ivy2/images/googleplay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='p-9'>
        <div className='text-site'>©IVYmoda All rights reserved</div>
      </div>
    </footer>
  )
}

export default FooterComponent

const cssFooter = css`
    padding: 60px 0 0;    
    .main-footer{
    border-bottom: 2px solid #D1D2D4;    
    border-top: 2px solid #D1D2D4;    
    }
  .column-one{
    max-width:22.05%
  }
  .column-two{
    max-width:11.9%
  }
  .column-three{
    max-width:21.75%
  }
  .column-four{
    max-width:11.9%
  }
  .column-five{
    max-width:23.75%
  }

  .text-title{
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #221F20;
    margin-bottom: 20px;
  }
  
  .text-content p{
    font-size: 14px;
    line-height: 24px;
    color: #57585A;
    margin-bottom: 16px;
    display: block;
  }
  .hotline a{
    background: #221F20;
    border-radius: 16px 0px;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #F7F8F9;
    padding: 12px 24px;
    font-family: 'Roboto', sans-serif
  }

  .form{
    border: 4px solid #E7E8E9;
    border-radius: 56px 0px;
    padding: 24px 12px;
  }

  .email{
    padding: 9px;    
    border-bottom: 2px solid #BCBDC0;
    max-width:52%;
    outline:none
  }

  .down-app{
    margin-top:24px;
  }
  .text-site{
    font-size: 16px;
    line-height: 20px;
    color: #57585A;
    text-align: center;
  }
  .btnSqua{
    padding:12px 27px;
    border-radius:24px 0;
  }
  
@media (min-width: 0) and (max-width: 739px) {  
  }
`