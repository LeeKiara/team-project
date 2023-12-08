import { AccountCircle, CheckCircle, CheckCircleOutline, Lock } from "@mui/icons-material";
import { LoginCantailner } from "./styles";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { Link } from "react-router-dom";
import home_icon from "../../assets/homepage-icon.png";
import { isLocalhost } from "@/modules/books/data";

const Login = () => {
  const [userid, setUserid] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const serverAddress = isLocalhost();
  const [loginAddress, setLoginAddress] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);

  const handleCheckbox = () => {
    if (checkbox) {
      localStorage.removeItem("userid");
    } else {
      localStorage.setItem("userid", userid);
    }
    setCheckbox(!checkbox);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (formRef !== null && userid !== "" && password !== "") {
      formRef.current.submit();
    }
  };

  const handleLoginClick = (e) => {
    if (userid === "" && password === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
    } else if (userid === "" && password !== "") {
      alert("아이디를 입력해주세요.");
    } else if (userid !== "" && password === "") {
      alert("비밀 번호를 입력해주세요");
    }
    handleLogin(e);
  };

  const handleKeyUp = (e) => {
    // Enter 키 눌렀을 때 로그인 처리
    if (e.key === "Enter") {
      handleLoginClick(e);
    }
  };

  useEffect(() => {
    const savedUserId = localStorage.getItem("userid");
    console.log(savedUserId);
    if (savedUserId) {
      setUserid(savedUserId);
      setCheckbox(true);
    }
  }, []);

  useEffect(() => {
    setLoginAddress(serverAddress + "/auth/signin");
  }, [serverAddress]);

  return (
    <>
      <LoginCantailner>
        <section>
          <Link to="/">
            <img src={home_icon} alt="home icon" height={80} />
          </Link>
          <form ref={formRef} action={loginAddress} onSubmit={handleLogin} method="post">
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
              <input
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </label>
            <button onClick={handleLoginClick} onKeyUp={handleKeyUp}>
              로그인
            </button>
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
