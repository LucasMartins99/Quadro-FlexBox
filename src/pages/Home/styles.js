import styled from 'styled-components';

export const Container = styled.div`
    background: #0000;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: #ffff;
    font-size: 30px;
`;
export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #ffff;
    font-size: 20px;
    padding-top: 30px;
    p {
        padding-top: 10px;
    }
`;
export const Atual = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    h2 {
        padding-top: 25px;
    }
    h3 {
    }
`;
export const Text = styled.text`
    float: initial;
    color: ${props => (props.t1p ? 'green' : 'red')};
    font-size: 23px;
`;
export const H2 = styled.h2`
    padding-top: 20px;
    color: ${props => (props.t1p ? 'green' : 'red')};
`;
export const Table = styled.table`
    width: 600px;
    text-align: center;
    padding-top: 50px;
    td {
        padding: 15px;
    }
    th {
        font-size: 25px;
    }
    tbody {
        padding-top: 20px;
    }
`;
export const TD = styled.td`
    padding: 15px;
    color: ${props => (props.t1p ? 'green' : 'red')};
`;
