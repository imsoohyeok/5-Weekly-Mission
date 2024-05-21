import { loginId, emailErr, signInEmailErr } from "./email.js";
import { loginPwd, passwordErr, signInPasswordErr } from "./password.js";

/* 필요한 기능 가져오기 */
import {
  CORRECT_EMAIL,
  CORRECT_PASSWORD,
  form,
  eyeBtn,
  eyeOn,
  eyeOff,
  visibleContent,
  invisibleContent,
  visibleError,
  invisibleError,
  redirectToFolderIfAccessTokenExists,
} from "./util.js";

/* form submit 시 동작 함수 */
const mainSignInFunction = (e) => {
  e.preventDefault();

  if (loginId.value === CORRECT_EMAIL && loginPwd.value !== CORRECT_PASSWORD) {
    invisibleError(emailErr, loginId);
    visibleError(passwordErr, loginPwd, "비밀번호를 확인해 주세요.");
  } else if (
    loginId.value !== CORRECT_EMAIL &&
    loginPwd.value === CORRECT_PASSWORD
  ) {
    visibleError(emailErr, loginId, "이메일을 확인해 주세요.");
    invisibleError(passwordErr, loginPwd);
  } else {
    signInApi(loginId.value, loginPwd.value);
  }
};

/* 실제 눈 모양 버튼 동작 함수 패스워드 부분 */
const eyeBtnFunction = () => {
  if (loginPwd.type === "password") {
    visibleContent(loginPwd, eyeOn, eyeOff);
  } else {
    invisibleContent(loginPwd, eyeOn, eyeOff);
  }
};

/* 로그인 api 함수 */
const signInApi = async (email, password) => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("로그인 실패");
    }
    const result = await response.json();
    localStorage.setItem("signInToken", result.data.accessToken);
    location.href = "../folder.html";

    /* accessToken 확인 함수 */
    redirectToFolderIfAccessTokenExists("signInToken");
    return true;
  } catch (error) {
    console.log(error);
    visibleError(emailErr, loginId, "이메일을 확인해 주세요.");
    visibleError(passwordErr, loginPwd, "비밀번호를 확인해 주세요.");
    return false;
  }
};

/* 이벤트 할당 */
loginId.addEventListener("focusout", signInEmailErr);
loginPwd.addEventListener("focusout", signInPasswordErr);
form.addEventListener("submit", mainSignInFunction);
eyeBtn.forEach((btn) => {
  btn.addEventListener("click", eyeBtnFunction);
});
