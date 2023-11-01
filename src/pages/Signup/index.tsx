import { Link, useNavigate } from "react-router-dom";
import {
  PersonOutline,
  Lock,
  Portrait,
  PhoneAndroid,
  MailOutline,
  CalendarMonth,
  Bookmarks,
  LockPerson,
} from "@mui/icons-material";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import axios from "axios";
import { SignUpContainer } from "./styles";
import signup from "../../../assets/signup.gif";

const SignUp = () => {
  const navigate = useNavigate();

  //회원정보값
  const userid = useRef() as MutableRefObject<HTMLInputElement>;
  const password = useRef() as MutableRefObject<HTMLInputElement>;
  const verifiedPassword = useRef() as MutableRefObject<HTMLInputElement>;
  const nickname = useRef() as MutableRefObject<HTMLInputElement>;
  const phone = useRef() as MutableRefObject<HTMLInputElement>;
  const email = useRef() as MutableRefObject<HTMLInputElement>;
  const birth = useRef() as MutableRefObject<HTMLInputElement>;

  //제대로 입력이 됐는지 확인하는 상태값
  const [verify, setVerify] = useState(false);

  const [passwordValue, setPasswordValue] = useState(null);
  const [verifiedPasswordValue, setVerifiedPasswordValue] = useState(null);
  const [userIdValue, setUserIdValue] = useState(null);

  const [nicknameValue, setNicknameValue] = useState(null);
  const [phoneValue, setPhoneValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [birthValue, setBirthValue] = useState(null);
  const [bookmarkValue, setBookmarkValue] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    if (bookmarkValue === "") {
      alert("선호장르를 골라주세요.");
    }
    if (Array.from(birthValue).length > 7) {
      alert("주민번호 앞 7자리만 입력해주세요");
    }

    const signupRequest = {
      userid: userIdValue,
      password: passwordValue,
      nickname: nicknameValue,
      phone: phoneValue,
      email: emailValue,
      birth: birthValue,
      bookmark: bookmarkValue,
    };
    (async () => {
      if (
        userIdValue !== "" &&
        passwordValue !== "" &&
        nicknameValue !== "" &&
        phoneValue !== "" &&
        emailValue !== "" &&
        birthValue !== "" &&
        bookmarkValue !== "" &&
        Array.from(birthValue).length < 8
      ) {
        try {
          const response = await axios.post(`http://localhost:8081/auth/signup`, signupRequest);
          console.log(response.status);
          if (response.status === 201) {
            alert("회원가입을 축하합니다.");
            navigate("/login");
          }
        } catch (e: any) {
          console.log(e);
          if (e.response && e.response.status === 409) {
            alert("기존 회원 정보와 일치합니다. 다시 입력해주세요.");
          } else {
            alert("회원가입에 실패했습니다.");
          }
        }
      }
    })();
  };

  const handleBookmarkChange = (e) => {
    setBookmarkValue(e.target.value);
  };

  useEffect(() => {
    // input 값이 변경될 때 상태 업데이트
    if (password.current.value !== null) {
      setPasswordValue(password.current.value);
    }
    if (verifiedPassword.current.value !== null) {
      setVerifiedPasswordValue(verifiedPassword.current.value);
    }
    if (password.current.value !== "" && password.current.value === verifiedPassword.current.value) {
      setVerify(true);
      setPasswordValue(password.current.value);
    }
  }, [passwordValue, verifiedPasswordValue]);

  return (
    <>
      <SignUpContainer>
        <section>
          <Link to="/">
            <img src={signup} alt="home icon" height={80} />
          </Link>
          <form>
            <div>
              <label className={userIdValue === "" ? "verify" : ""}>
                <PersonOutline className="material-icons-outlined" />
                <input
                  type="text"
                  placeholder="아이디"
                  ref={userid}
                  onChange={(e) => {
                    setUserIdValue(e.target.value);
                  }}
                />
              </label>
              <label className={passwordValue === "" && verify ? "verify" : ""}>
                <Lock className="material-icons-outlined" />
                <input
                  type="password"
                  placeholder="비밀번호"
                  ref={password}
                  onChange={(e) => {
                    setPasswordValue(e.target.value);
                  }}
                />
              </label>
              {/* <label className={passwordValue === verifiedPasswordValue ? "verifiedPassword" : "password"}>
                  <LockOpen className="material-icons-outlined" />
                  <input
                    type="password"
                    placeholder="비밀번호 확인"
                    ref={verifiedPassword}
                    onChange={(e) => {
                      setVerifiedPasswordValue(e.target.value);
                    }}
                  />
                </label> */}
              <label
                className={
                  passwordValue === verifiedPasswordValue
                    ? verify
                      ? "verifiedPassword"
                      : "password"
                    : verify
                    ? "verifiedPassword verify"
                    : "password verify"
                }>
                <LockPerson className="material-icons-outlined" />
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  ref={verifiedPassword}
                  onChange={(e) => {
                    setVerifiedPasswordValue(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="prerequisite">
              {userIdValue === "" && <p>* 아이디를 입력해주세요.</p>}
              {passwordValue === "" && verify && <p>* 비밀번호를 입력해주세요.</p>}
            </div>
            <div>
              <label className={nicknameValue === "" ? "verify" : ""}>
                <Portrait className="material-icons-outlined" />
                <input
                  type="text"
                  placeholder="닉네임"
                  ref={nickname}
                  onChange={(e) => {
                    setNicknameValue(e.target.value);
                  }}
                />
              </label>
              <label className={phoneValue === "" ? "verify" : ""}>
                <PhoneAndroid className="material-icons-outlined" />
                <input
                  type="text"
                  placeholder="전화번호"
                  ref={phone}
                  onChange={(e) => {
                    setPhoneValue(e.target.value);
                  }}
                />
              </label>
              <label className={emailValue === "" ? "verify" : ""}>
                <MailOutline className="material-icons-outlined" />
                <input
                  type="text"
                  placeholder="이메일"
                  ref={email}
                  onChange={(e) => {
                    setEmailValue(e.target.value);
                  }}
                />
              </label>
              <label className={birthValue === "" ? "verify" : ""}>
                <CalendarMonth className="material-icons-outlined" />
                <input
                  type="text"
                  placeholder="생년월일 7자리"
                  ref={birth}
                  onChange={(e) => {
                    setBirthValue(e.target.value);
                  }}
                />
              </label>
              <label>
                <Bookmarks className="material-icons-outlined" />
                <select className="categoryButtonList" value={bookmarkValue} onChange={handleBookmarkChange}>
                  <option value="">선호장르</option>
                  <option value="소설/시/희곡">소설/시/희곡</option>
                  <option value="사회과학">사회과학</option>
                  <option value="에세이">에세이</option>
                  <option value="여행">여행</option>
                  <option value="역사">역사</option>
                  <option value="예술/대중문화">예술/대중문화</option>
                  <option value="어린이">어린이</option>
                  <option value="외국어">외국어</option>
                  <option value="요리/살림">요리/살림</option>
                  <option value="유아">유아</option>
                  <option value="인문학">인문학</option>
                  <option value="자기계발">자기계발</option>
                  <option value="종교/역학">종교/역학</option>
                  <option value="과학">과학</option>
                  <option value="경제경영">경제경영</option>
                  <option value="건강/취미">건강/취미</option>
                  <option value="만화">만화</option>
                </select>
                {/* <input
                  type="text"
                  placeholder="선호장르"
                  ref={bookmarks}
                  onChange={(e) => {
                    setBookmarkValue(e.target.value);
                  }}
                /> */}
              </label>
              <div className="prerequisite">
                {nicknameValue === "" && <p>* 닉네임을 입력해주세요.</p>}
                {phoneValue === "" && <p>* 전화번호를 입력해주세요.</p>}
                {emailValue === "" && <p>* 이메일을 입력해주세요.</p>}
                {birthValue === "" && <p>* 생년월일을 입력해주세요.</p>}
              </div>
            </div>
            <button
              onClick={(e) => {
                handleSignUp(e);
              }}>
              회원가입
            </button>
          </form>
        </section>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
