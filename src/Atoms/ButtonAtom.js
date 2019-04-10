import styled from "styled-components";

export const ButtonAtom = styled.div`
    text-transform: capitalize;
    font-size: 16px;
    background: transparent;
    border: 0.05rem solid #FF69B4;
    border-color: ${props => props.cart ? "#283747" : "#FF69B4"};
    color: ${props => props.cart ? "#283747" : "#FF69B4"};
    border-radius: 0.3rem !important;
    padding: 0.4rem 1rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all .5s ease-in-out;
    &:hover {
        background: ${props => props.cart ? "#283747" : "#FF69B4"};
        color: #FFF;
    }
    &:focus {
        outline: none;
    }
`;