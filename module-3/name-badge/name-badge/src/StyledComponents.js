import styled from "styled-components";

const Badge = styled.div`
    width: 700px;
    height: fit-content;
    margin: 0 auto 50px auto;
    padding: 0;
    border-radius: 46px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
`

const H1 = styled.h1`
    text-align: center;
    width: fit-content;
    color: #ffffff;
    line-height: 1;
    margin: 0;
`

const H5 = styled.h5`
    text-align: center;
    width: fit-content;
    color: #ffffff;
    margin-top: 0px;
`

const P = styled.p`
    font-weight: 400;
    font-size: 20px;
    width: fit-content;
    margin: 5px;
`

const Comments = styled.p`
    font-weight: 400;
    font-size: 20px;
    width: fit-content;
    margin: 5px;
    grid-row: 4 / 7;
    grid-column: 1 / 3;
`

const HeaderBand = styled.div`
    display: flex;
    font-size: 48px;
    font-weight: 500;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif,;
    justify-content: center;
    align-items: center;
    width: 700px;
    min-height: 187px;
    max-height: 187px;
    padding-top: 24px;
    background-color: #9B1B1B;
    border-radius: 46px 46px 0 0;
`

const BodyBand = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr 1fr 3fr;
    width: 700px;
    height: 230px;
    padding: 30px 30px;
    
`

const BottomBand = styled.div`
    min-height: 46px;
    max-height: 46px;
    width: 700px;
    border-radius: 0 0 46px 46px;
    background-color: #9B1B1B;
`
export {
        Badge,
        H1,
        H5,
        P,
        Comments,
        HeaderBand,
        BodyBand,
        BottomBand
    }