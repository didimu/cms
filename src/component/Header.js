import React from 'react'; 



export default function Header() {
  return (
 <div>
  <header id="header" className="pc">
    <div className="header_wrap">
      <h1>
        <a href="/" title="홈바로가기"><em className="hidden">디딤유-CMS</em>
          <img
          src={`${process.env.PUBLIC_URL}/img/img_logo.png`}
          className='img_logo'
          alt='디딤유'
          />
        </a>
      </h1> 

      <nav>
        <ul>
          <li><a href="#none">회사소개22</a>
          <ul className="nav_depth02">
            <li className="first"><a href="#none">CEO인사말</a></li>
            <li><a href="#none">연혁</a></li>
            <li><a href="#none">조직도</a></li>
            <li><a href="#none">찾아오시는길</a></li>
          </ul> 
        </li> 
        <li><a href="#none">사업소개</a>
            <ul className="nav_depth02">
            <li className="first"><a href="#none">제품소개</a></li>
            <li><a href="#none">Content2-2</a></li>
          </ul> 
        </li> 
        <li><a href="#none">일정</a>
          <ul className="nav_depth02">
          <li className="first"><a href="#none">행사일정</a></li>

          </ul> 
        </li> 
        <li><a href="#none">새소식</a>
          <ul className="nav_depth02">
            <li className="first"><a href="#none">공지사항</a></li>
            <li><a href="#none">보도자료</a></li>
            <li><a href="#none">포토갤러리</a></li>
            <li><a href="#none">자료실</a></li>

          </ul> 
        </li> 
        <li><a href="#none">커뮤니티</a>
          <ul className="nav_depth02">
            <li className="first"><a href="#none">자주하는질문</a></li>
            <li><a href="#none">게시판tt</a></li>
            <li><a href="#none">묻고답하기</a></li>
            <li><a href="#none">설문조사</a></li>
            <li><a href="#none">동영상게시판</a></li>
            <li><a href="#none">폼메일보내기</a></li>
            <li><a href="#none">민원게시판</a></li>

          </ul> 
        </li> 

        </ul>
        <div className="gnb-bg" ></div>
      </nav>

      <div className="etc">
				<div id="gnb">
					<h2 className="hidden">사용자메뉴</h2> 
					<div className="gnb pc">
						<ul className="clearFix">
							<li><a href="#none">topNavi1</a></li>
							<li><a href="#none">topNavi2</a></li>
						</ul>
					</div>
					<div className="global pc">
						<ul className="clearFix">
							<li><a href="#none">로그인</a></li>
							<li><a href="#none">회원가입</a></li>
							<li className="last"><a href="#none">사이트맵</a></li>
						</ul>
					</div>
				</div>
			</div>



    </div>
  </header>
</div>   

  )
}
