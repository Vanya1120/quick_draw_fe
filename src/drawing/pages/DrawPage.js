import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import DrawContainer from "../containers/DrawContainer";

const Wrapper = styled.div`
    max-width: 500px;
    margin: 15px auto;
`;

const DrawPage = () => {
    return (
        <>
            <Helmet>
                <title>낙서</title>
            </Helmet>
            <Wrapper>
                <DrawContainer />
            </Wrapper>
        </>
    );
};

export default DrawPage;