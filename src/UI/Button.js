import styled from "styled-components";

const Button = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 30px;
    width: 70px;
    height: 70px;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export default Button;
