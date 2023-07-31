import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
      <h3 className="hidden">하단메뉴</h3>		
      <div className="ftbody">
         
        <div className="ftmenu">
          <div className="ftmenu_wrap">					
            <ul className="f_link clearFix">
              <li className="first"><a href="#none">개인정보처리방침</a></li>
              <li><a href="#none">이용약관</a></li> 
              <li><a href="#none">부정부조리신고 안내</a></li>
              <li><a href="#none">오시는길</a></li>
            </ul>
             
            <div className="family_site">
              <div className="family_site_wrap">
                <select className="select_ty1" name="relationSite" title="관련사이트">
                  <option value="">관련사이트</option>
                  <option value="http://www.">aaa</option> 
                  <option value="http://www.r">bbb</option>
                  <option value="http://www.">ccc</option>
                  <option value="http://www.">sss</option> 
                </select>		
                <a href="#none" className="site_move" onclick="familySiteMove();">이동</a>
              </div>
            </div>
             
          </div>
        </div>
                 
        <div className="ftcopy">
          <div className="ftcopy_wrap clearFix">
            <div className="ftlogo">
              <img
              src={`${process.env.PUBLIC_URL}/img/img_logo.png`}
              className='img_logo'
              alt='디딤유'
              />
            </div>
            <div className="copyright">
              <p>주소new  / 사업자등록번호 000-00-0000</p>
              <p>대표전화번호: 000-0000-0000  / 대표팩스번호: 000-0000-0000 / 이메일:admin@cms.com</p>
              <p className="copy">COPYRIGHT TORD CMS. ALL RIGHTS RESERVED.</p>
            </div>	
          </div>
        </div>			
      </div> 

    </footer>
  )
}
