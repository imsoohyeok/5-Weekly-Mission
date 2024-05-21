export const loginId = document.querySelector(".sign-email");
export const emailErr = document.querySelector(".email-err");

/* 필요한 기능 가져오기 */
import { visibleError, invisibleError, CORRECT_EMAIL } from "./util.js";

/* 로그인 이메일 검증 함수 */
export function signInEmailErr() {
  if (loginId.value === "") {
    visibleError(emailErr, loginId, "이메일을 입력해주세요.");
  } else if (loginId.value.indexOf("@") == -1) {
    visibleError(emailErr, loginId, "올바른 이메일 주소가 아닙니다.");
  } else {
    invisibleError(emailErr, loginId);
  }
}

/* 회원가입 이메일 검증 함수 */
export function signUpEmailErr() {
  if (loginId.value === "") {
    visibleError(emailErr, loginId, "이메일을 입력해주세요.");
  } else if (loginId.value === CORRECT_EMAIL) {
    visibleError(emailErr, loginId, "이미 사용 중인 이메일입니다.");
  } else if (loginId.value.indexOf("@") == -1) {
    visibleError(emailErr, loginId, "올바른 이메일 주소가 아닙니다.");
  } else {
    invisibleError(emailErr, loginId);
  }
}
