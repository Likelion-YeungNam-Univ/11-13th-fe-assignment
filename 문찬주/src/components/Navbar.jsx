import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const linkStyle = (path) => ({
        marginRight: "15px",
        textDecoration: location.pathname === path ? "underline" : "none",
        fontWeight: location.pathname === path ? "bold" : "normal",
    });

    return (
        <nav style={{ marginBottom: "20px" }}>
            <NavLink to="/" style={() => linkStyle("/")}>홈</NavLink>
            <NavLink to="/projects" style={() => linkStyle("/projects")}>프로젝트</NavLink>
            <NavLink to="/about" style={() => linkStyle("/about")}>자기소개</NavLink>
        </nav>
    );
};

export default Navbar;
