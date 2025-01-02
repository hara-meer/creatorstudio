import '../assets/styles/App.css';
import '../assets/styles/header.css';

function App() {
  return (
    <div className="App">

      <header class="header-inner">
          <div class="header-box">
              <div class="logo-box">
                  <a href="/" class="logo">
                      <img src="../image/logo.png" alt="로고이미지" />
                  </a>
              </div>
              <div class="menu_open">
                  <div class="menu-btn"><span></span><span></span></div>
                  <div className="teb-menu">
                    <p>문의하기</p>
                  </div>
              </div>
              <div className="top-box">TOP</div>

              <div class="menu-box">
                  <div class="menu-btn">
                      <div class="menu_close">
                          <span></span>
                          <span></span>
                      </div>
                  </div>
                  <ul class="menu-list">
                      <li><a href="/board/travelInfo/list?bCategory=place" class="">센터소개</a>
                          <ul class="sub-menu01">
                              <li><a href="/board/travelInfo/list?bCategory=place" class="">사업소개</a></li>
                              <li><a href="/board/travelInfo/list?bCategory=food" class="">센터소개</a></li>
                              <li><a href="/board/travelInfo/list?bCategory=accommodation" class="">오시는 길</a></li>
                          </ul>
                      </li>
                      <li><a href="/board/travelRecommend/list?bCategory=scheduledTravel">장비안내</a>
                          <ul class="sub-menu01">
                              <li><a href="/board/travelRecommend/list?bCategory=scheduledTravel">온라인 장비교육 안내</a></li>
                              <li><a href="/board/travelRecommend/list?bCategory=themeTravel">보유 장비목록 안내</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="/board/travelGuide/list?bCategory=preparation">입주실 안내</a>
                          <ul class="sub-menu01">
                              <li><a href="/board/travelGuide/list?bCategory=preparation">입주실 안내</a></li>
                              <li><a href="/board/travelGuide/list?bCategory=guide">지원사항 안내</a></li>
                              <li><a href="/board/travelGuide/list?bCategory=guide">입주사 소개</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="/board/userBoard/list?bCategory=information">프로그램 안내</a>
                          <ul class="sub-menu01">
                              <li><a href="/board/userBoard/list?bCategory=review">지원사업 안내</a></li>
                              <li><a href="/board/userBoard/list?bCategory=review">시설 및 홍보 프로그램</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="/board/festivalBoard/list?bCategory=festival">시설 예약하기</a>
                          <ul class="sub-menu01">
                              <li><a href="/board/festivalBoard/list?bCategory=performance">자주 묻는 질문</a></li>
                              <li><a href="/board/festivalBoard/list?bCategory=festival">센텀 메인센터 예약</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="/board/festivalBoard/list?bCategory=festival">커뮤니티</a>
                          <ul class="sub-menu01">
                              <li><a href="/board/festivalBoard/list?bCategory=performance">공지사항</a></li>
                              <li><a href="/board/festivalBoard/list?bCategory=festival">소식지</a></li>
                              <li><a href="/board/festivalBoard/list?bCategory=festival">1:1문의</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </header>


      {/* 슬라이드 */}
      <div className="main-slide">
        <ul className="main-slide-box">
          <li>
            <div className="text-box">
              <h1>크리에이터</h1> <span>스튜디오</span>
            </div>
          </li>
          <li>
            <h1>크리에이터</h1> <span>스튜디오</span>
          </li>
          <li>
            <h1>크리에이터</h1> <span>스튜디오</span>
          </li>
        </ul>
      </div>

      <div className="sub-box1">
        <h2>크리에이터 스튜디오</h2>
        <p className="add-text">부산광역시 동래구 사직로 77 (사직동, 부산광역시 체육회관)</p>
        <ul className="box1-slide">
          <li className="active" style={{ backgroundImage: 'url("../image/img_01.jpg")' }}>
            <div className="text-box">
              <h3 className="box1-title">
                창작실 3
              </h3>
              <p>소규모 회의 및 모임 공간입니다. 최대 8명까지 수용할 수 있으며, 화이트보드 사용이 가능합니다.</p>
            </div>
          </li>
          <li style={{ backgroundImage: 'url("../image/img_02.jpg")' }}>
            <div className="text-box">
              <h3 className="box1-title">
                창작실 2
              </h3>
              <p>소규모 회의 및 모임 공간입니다. 최대 8명까지 수용할 수 있으며, 화이트보드 사용이 가능합니다.</p>
            </div>
          </li>
          <li style={{ backgroundImage: 'url("../image/img_03.jpg")' }}>
            <div className="text-box">
              <h3 className="box1-title">
                창작실 1
              </h3>
              <p>소규모 회의 및 모임 공간입니다. 최대 8명까지 수용할 수 있으며, 화이트보드 사용이 가능합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="sub-box2">
        <div className="innerbox">
          <div className="box2-txt">
            <span className="box2-logo">부산 콘텐츠 코리아 랩</span>
            <h2>빛나는 작은 아이디어가<br />글로벌 콘텐츠가 되는 그날까지</h2>
            <p>작은 상상력이 창작으로 창업으로 이어지는 건강한 창의생태계 조성을 위해 콘텐츠 코리아랩이 여러분과 함께합니다.</p>
          </div>
          
          <ul className="box2-teb-menu">
            <li className="active">회사소개</li>
            <li>입주실 안내</li>
            <li>장비 예약하기</li>
            <li>시설/공간 예약하기</li>
          </ul>
        </div>
      </div>

      <div className="sub-box3 innerbox">
        <h2>공지사항</h2>
        <ul className="box3-notion">
          <li className="active">
            <div className="date-box">
              2023.01
              <p>27</p>
            </div>
            <div className="box3-text">
              <h3>실내 마스크 착용 권고 안내</h3>
              <p>실내 마스크 착용 권고 안내입니다. 실내 마스크 착용, 서로를 위한 배려입니다. 2023년 1월 30일 부터, 실내 마스크 착용 의무 조정 1단계 시행으로 인해 모두가 마스크 착용 후 참여 부탁드립니다.</p>
              <div className="">View more</div>
            </div>
            <div className="box3-img">
              <img src="./public/image/news_img01" alt="news"/>
            </div>
          </li>
          <li>
            <div className="date-box">
              2023.01
              <p>27</p>
            </div>
            <div className="box3-text">
              <h3>2023년 설 연휴 운영 안내</h3>
              <p>2023년 설 연휴 운영 안내입니다.</p>
              <div className="">View more</div>
            </div>
            <div className="box3-img">
              <img src="./public/image/news_img01" alt="news"/>
            </div>
          </li>
          <li>
            <div className="date-box">
              2023.01
              <p>27</p>
            </div>
            <div className="box3-text">
              <h3>흑토끼의 해, 2023년 계묘년 공지</h3>
              <p>흑토끼의 해, 2023년 계묘년 공지입니다.</p>
              <div className="">View more</div>
            </div>
            <div className="box3-img">
              <img src="./public/image/news_img01" alt="news"/>
            </div>
          </li>
        </ul>
      </div>

      <div className="sub-box4">
        <div className="innerbox">
          <h2>프로그램</h2>
          <div className="box4-teb-box">
            <div>진행중인 프로그램</div>
            <div>마감된 프로그램</div>
          </div>
          <ul className="box4-btn">
            <li><img src="./public/image/news_img01" alt="program"/></li>
            <li><img src="./public/image/news_img01" alt="program"/></li>
            <li><img src="./public/image/news_img01" alt="program"/></li>
          </ul>
          <ul className="box4-board">
            <li>
              <div className="img-box"></div>
              <p>[이벤트]2023 계묘년 EVENT</p>
            </li>
            <li>
              <div className="img-box"></div>
              <p>2023 부산 콘텐츠코리아 랩 온라인 기획</p>
            </li>
            <li>
              <div className="img-box"></div>
              <p>원데이 클래스 &lt;블로그 수익화 나도 낼수 있을까?&gt;</p>
            </li>
            <li>
              <div className="img-box"></div>
              <p>[세미나 및 교육]크리에이트 스튜디오 오프라인 장비교육</p>
            </li>
            <li>
              <div className="img-box"></div>
              <p>[이벤트]부산 콘텐츠코리아 랩 숏폼 댓글 이벤트</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-box5 innerbox">
        <h2>아카이브</h2>
        <ul className="box5-slide">
          <li>
            <p>2021 B CON 스타트앱 사업화지원 프로그램</p>
            <h3>뉴 챔프(NEW Champ)</h3>
            <ul className="box5-title">
              <li>
                <span>기업명</span> 플레이박스
              </li>
              <li>
                <span>대표자</span> 조수진
              </li>
            </ul>
          </li>
          <li>
            <p>2021 B CON 스타트앱 사업화지원 프로그램</p>
            <h3>뉴 챔프(NEW Champ)</h3>
            <ul className="box5-title">
              <li>
                <span>기업명</span> 플레이박스
              </li>
              <li>
                <span>대표자</span> 조수진
              </li>
            </ul>
          </li>
          <li>
            <p>2021 B CON 스타트앱 사업화지원 프로그램</p>
            <h3>뉴 챔프(NEW Champ)</h3>
            <ul className="box5-title">
              <li>
                <span>기업명</span> 플레이박스
              </li>
              <li>
                <span>대표자</span> 조수진
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="footer">
        <div className="innerbox">
          <div className="f-teb-menu">
            <ul className="f-ul">
              <li>개인정보 처리보험</li>
              <li>저작권 정책</li>
              <li>오시는 길</li>
            </ul>
            <ul className="f-sns">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="f-txt">
            <img src="" alt=""/>
            <div className="f-add">
              부산광역시 동래구 사직로 77(사직동, 부산광역시 체육회관)<br />
              COPYRIGHT 2021 CONTENT ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
