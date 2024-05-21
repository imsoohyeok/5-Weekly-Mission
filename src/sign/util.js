/* 유효한 이메일, 패스워드 */
export const CORRECT_EMAIL = "test@codeit.com";
export const CORRECT_PASSWORD = "codeit101";

/* 폼, 눈 모양 버튼 */
export const form = document.querySelector("#form");
export const eyeBtn = document.querySelectorAll(".password-button");
export const eyeOn = document.querySelectorAll(".eye-on");
export const eyeOff = document.querySelectorAll(".eye-off");
export const eyeBtnCheck = document.querySelectorAll(".password-check-button");
export const eyeOnCheck = document.querySelectorAll(".eye-on-check");
export const eyeOffCheck = document.querySelectorAll(".eye-off-check");

/* 값 검증 함수 */
export const visibleError = (value, errSection, message) => {
  value.textContent = message;
  value.classList.remove("hide");
  errSection.classList.add("input-err");
};

/* 값 통과 함수 */
export const invisibleError = (value, errSection) => {
  value.classList.add("hide");
  errSection.classList.remove("input-err");
};

/* 눈 모양 버튼 작동 함수 */
export const visibleContent = (inputSection, stateOn, stateOff) => {
  inputSection.type = "text";
  stateOn.forEach((element) => element.classList.remove("hide"));
  stateOff.forEach((element) => element.classList.add("hide"));
};

export const invisibleContent = (inputSection, stateOn, stateOff) => {
  inputSection.type = "password";
  stateOn.forEach((element) => element.classList.add("hide"));
  stateOff.forEach((element) => element.classList.remove("hide"));
};

/* accessToken 확인 후 폴더 페이지로 이동시키는 함수 */
export const redirectToFolderIfAccessTokenExists = (accessName) => {
  const accessToken = localStorage.getItem(accessName);
  if (accessToken) {
    location.href = "../folder.html";
  }
};
