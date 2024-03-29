import styled from "styled-components";

const getType = ({type}) => {
    switch (type) {
        case 'dark':
            return {
                background: "transparent",
                border: '1px solid #fff',
                color: "#fff"
            }
        case "light":
            return {
                background: "#fff",
                border: "1px solid #e6e9ec",
                color: "#0d263b"
            }
        case "primamry":
            return {
                background: "#0061de",
                border: "none",
                color: "#fff"
            }
        default:
            return {
                background: "#0061de",
                border: "none",
                color: "#fff"
            }
    }
}

export const Container = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 2px;
 min-width: 120px;
 font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "14px"};
 height: ${({ height }) => height ? `${height}px` : "44px"};
 width: ${({ width }) => width ? `${width}px` : "130px"};
 ${getType};
 cursor:pointer;
 :active{
    opacity: 0.7;
 }
`