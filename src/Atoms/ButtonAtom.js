import styled from "styled-components";

export const ButtonAtom = styled.div`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid #FF69B4;
    color: #FF69B4;
    borderRadius: 0.3rem;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all .5s ease-in-out;
    &:hover {
        background: #FF69B4;
        color: #283747;
    }
    &:focus {
        outline: none;
    }
`;