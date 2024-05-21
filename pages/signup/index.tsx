/* 피드백 받고 수정 (기존 html, css 코드를 react로)
    <header>
      <h1>
        <a class="logo-link" href="index.html">
          <img
            class="header-logo"
            src="./images/logo.svg"
            alt="홈으로 돌아가는 로고 이미지"
          />
        </a>
      </h1>
      <div class="sign-check-box">
        <span class="sign-check-text">이미 회원이신가요?</span>
        <a class="signiup-link" href="signin.html">로그인하기</a>
      </div>
    </header>
    <div class="sign-box">
      <form id="form">
        <div class="sign-input-boxs">
          <div class="sign-input-box">
            <label for="sign-email">이메일</label>
            <input
              id="sign-email"
              class="sign-email"
              name="sign-email"
              type="email"
            />
            <div class="email-err hide err-font">이메일을 입력해주세요.</div>
          </div>
          <div class="sign-input-box">
            <label for="sign-password">비밀번호</label>
            <div class="sign-input-password-box">
              <input
                id="sign-password"
                class="sign-password"
                name="sign-password"
                type="password"
              />
              <button class="password-button" type="button">
                <img
                  class="eye-on hide"
                  src="./images/eye-on.svg"
                  alt="패스워드 눈 뜬 모양 이미지"
                />
                <img
                  class="eye-off"
                  src="./images/eye-off.svg"
                  alt="패스워드 눈 감은 모양 이미지"
                />
              </button>
            </div>
            <div class="password-err hide err-font">
              비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.
            </div>
          </div>
          <div class="sign-input-password">
            <label for="sign-password-check">비밀번호 확인</label>
            <div class="sign-input-password-box">
              <input
                id="sign-password-check"
                class="sign-password-check"
                name="sign-password-check"
                type="password"
              />
              <button class="password-check-button" type="button">
                <img
                  class="eye-on-check hide"
                  src="./images/eye-on.svg"
                  alt="패스워드 눈 뜬 모양 이미지"
                />
                <img
                  class="eye-off-check"
                  src="./images/eye-off.svg"
                  alt="패스워드 눈 감은 모양 이미지"
                />
              </button>
            </div>
            <div class="password-err-check hide err-font">
              비밀번호가 일치하지 않아요.
            </div>
          </div>
          <button type="submit" class="cta">회원가입</button>
        </div>
      </form>
      <div class="other-sign">
        <span class="other-sign-text">다른 방식으로 가입하기</span>
        <div class="icon">
          <div class="icon-box">
            <a href="https://www.google.com/" target="_blank">
              <img src="./images/sign-googleback.svg" />
              <img class="box-in-icon" src="./images/sign-google.png" />
            </a>
          </div>
          <div class="icon-box">
            <a href="https://www.kakaocorp.com/page/" target="_blank">
              <img src="./images/sign-kakaoback.svg" />
              <img class="box-in-icon" src="./images/sign-kakao.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
    */
