import Header from '../component/Header';
import Footer from '../component/Footer';

export function Login(){
    return(
    <>        
        <Header></Header>
        <div id="container">
		    <div className="container_in">

                <div className="mypage_ctn_wrap">
                    <div className="mypage_320 mypage_login"> 
                        <h3 className="h4_fs_24 txt_center fw_500 txt_black2">로그인</h3>
		                <p className="mypage_top_text txt_black2">로그인에 대한 안내 문구를 넣을 수 있습니다. 선택사항입니다.</p>
                        <div className="box_mypage ">
                            <p className="title_18 pd_b20 txt_center txt_black2">아이디(ID)로 로그인</p> 
                            <div className="single_input"> 
                                <input type="text" clanpm className="w_txt" placeholder="아이디"/>
                                <a href="#none" className="icon" onclick=""></a>
                                <div className="join_strong_txt" id="useridError">입력하신 아이디 정보를찾을 수 없습니다.</div>
                            </div>       
                            <div className="single_input"> 
                                <input type="text" className="w_txt" placeholder="비밀번호"/>
                                <a href="#none" className="icon" onclick=""></a>
                                <div className="join_strong_txt" id="useridError">입력하신 아이디 정보를찾을 수 없습니다.</div>
                            </div>   
                            <div className="single_input"> 
                                <input type="checkbox" className="i_chk" id="idSaveCheck" />
                                <label for="idSaveCheck">아이디 저장</label>
                            </div>          
                        </div>    
        
         
                    </div>
                </div>




            </div>    
        </div>
        <Footer></Footer>
    </>
        
    )
}