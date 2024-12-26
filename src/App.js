import './App.css';

function App() {
  return (
    <div className="App">

      {/* 메뉴 */}
      <header className="header">
        LOGO
        <ul className="menu">
          <li>센터 소개
            <ul>
              <li>사업소개</li>
              <li>센터소개</li>
              <li>오시는 길</li>
            </ul>
          </li>
          <li>시설 안내</li>
          <li>프로그램 안내</li>
          <li>커뮤니티</li>
          <li>아카이브</li>
        </ul>
      </header>
      <div className="teb-menu">
        <p>문의하기</p>
        <div className="top-box">TOP</div>
      </div>

      {/* 슬라이드 */}
      <div className="main-slide">
        <ul className="main-slide-box">
          <li>
            <h1>크리에이터 <span>스튜디오</span></h1>
          </li>
          <li>
            <h1>크리에이터 <span>스튜디오</span></h1>
          </li>
          <li><h1>크리에이터 <span>스튜디오</span></h1></li>
        </ul>
      </div>

      <div className="sub-box1">
        <h2>크리에이터 스튜디오</h2>
        <p className="add-text">부산광역시 동래구 사직로 77 (사직동, 부산광역시 체육회관)</p>
        <ul className="box1-slide">
          <li>
            <h3 className="box1-title">
              창작실 3
            </h3>
            <p>소규모 회의 및 모임 공간입니다. 최대 8명까지 수용할 수 있으며, 화이트보드 사용이 가능합니다.</p>
          </li>
          <li>
            <h3 className="box1-title">
              창작실 2
            </h3>
            <p>소규모 회의 및 모임 공간입니다. 최대 8명까지 수용할 수 있으며, 화이트보드 사용이 가능합니다.</p>
          </li>
          <li>
            <h3 className="box1-title">
              창작실 1
            </h3>
            <p>소규모 회의 및 모임 공간입니다. 최대 8명까지 수용할 수 있으며, 화이트보드 사용이 가능합니다.</p>
          </li>
        </ul>
      </div>

      <div className="sub-box2">
        <span className="box2-logo"></span>
        <h2>빛나는 작은 아이디어가<br />글로벌 콘텐츠가 되는 그날까지</h2>
        <p>작은 상상력이 창작으로 창업으로 이어지는 건강한 창의생태계 조성을 위해 콘텐츠 코리아랩이 여러분과 함께합니다.</p>
        
        <ul className="box2-teb-menu">
          <li>회사소개</li>
          <li>입주실 안내</li>
          <li>장비 예약하기</li>
          <li>시설/공간 예약하기</li>
        </ul>
      </div>

      <div className="sub-box3">
        <h2>공지사항</h2>
        <ul className="box3-notion">
          <li>
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
              <h3>실내 마스크 착용 권고 안내</h3>
              <p>실내 마스크 착용 권고 안내입니다. 실내 마스크 착용, 서로를 위한 배려입니다. 2023년 1월 30일 부터, 실내 마스크 착용 의무 조정 1단계 시행으로 인해 모두가 마스크 착용 후 참여 부탁드립니다.</p>
              <div className="">View more</div>
            </div>
            <div className="box3-img">
              <img src="./public/image/news_img01" alt="news"/>
            </div>
          </li>
        </ul>
      </div>

      <div className="sub-box4">
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

      <div className="sub-box5">
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
  );
}

export default App;
