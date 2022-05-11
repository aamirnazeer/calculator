import styled from "styled-components";

const Display = styled.input`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 25px;
    width: 272px;
    height: 40px;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export default Display;
