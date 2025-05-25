import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404 - 페이지를 찾을 수 없습니다.</h1>
            <button onClick={() => navigate("/")}>홈으로 가기</button>
        </div>
    );
};

export default NotFound;
