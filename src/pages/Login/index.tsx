import { AccountCircle, CheckCircle, CheckCircleOutline, Lock } from "@mui/icons-material";
import { LoginCantailner } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckbox = () => {
    if (checkbox) {
      localStorage.removeItem("userid");
    } else {
      localStorage.setItem("userid", userid);
    }
    setCheckbox(!checkbox);
  };

  const handleLogin = () => {};

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserid(savedUserId);
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
          <form action="http://localhost:8081/auth/signin" method="post">
            <label>
              <AccountCircle className="material-icons-outlined" />
              <input
                type="text"
                value={userid}
                name="userid"
                onChange={(e) => setUserid(e.target.value)}
                placeholder="아이디를 입력하세요"
              />
            </label>
            <label>
              <Lock className="material-icons-outlined" />
              <input type="password" name="password" placeholder="비밀번호를 입력하세요" />
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
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </div>
        </section>
      </LoginCantailner>
    </>
  );
};

export default Login;
