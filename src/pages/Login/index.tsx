import {
  AccountCircle,
  CheckCircle,
  CheckCircleOutline,
  Lock,
} from "@mui/icons-material";
import { LoginCantailner } from "./styes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    if (checkbox) {
      localStorage.removeItem("userId");
    } else {
      localStorage.setItem("userId", userId);
    }
    setCheckbox(!checkbox);
  };

  const handleLogin = () => {};

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserId(savedUserId);
      setCheckbox(true);
    }
  }, []);

  return (
    <>
      <LoginCantailner>
        <section>
          <Link to="/">
            <h1>Brunch Story</h1>
          </Link>
          <form action="">
            <label>
              <AccountCircle className="material-icons-outlined" />
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디를 입력하세요"
              />
            </label>
            <label>
              <Lock className="material-icons-outlined" />
              <input type="text" placeholder="비밀번호를 입력하세요" />
            </label>
            <button onClick={handleLogin}>로그인</button>
            <span onClick={handleCheckbox}>
              {checkbox ? (
                <CheckCircle className="material-icons-outlined" />
              ) : (
                <CheckCircleOutline className="material-icons-outlined" />
              )}
              아이디 저장
            </span>
          </form>
          <div>
            <button>회원가입</button>
          </div>
        </section>
      </LoginCantailner>
    </>
  );
};

export default Login;
