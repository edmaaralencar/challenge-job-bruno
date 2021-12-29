import styled from 'styled-components';

// import arrowIcon from '../../assets/icons/arrow_down-icon.svg';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
        margin: 4.8rem 0;
        padding: 3.2rem;

        background-color: #ffffff;
        border-radius: 8px;

        width: Min(90%, 62.2rem);
    }

    .cep {
        display: flex;
        align-items: flex-end;

        button {
            height: 5.4rem;
            border: 0;
            border-bottom: 2px solid #bbb8d9;
            background-color: transparent;
            font-size: 1.6rem;
            color: #4f46bb;
        }
    }

    .button-submit {
        display: inline-block;
        padding: 1rem 4rem;
        border: 0;
        border-radius: 7rem;
        font-size: 1.6rem;
        font-weight: 700;
        background: #4f46bb;
        color: #ffffff;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 700;
    }

    select {
        margin-top: 3.2rem;
        padding: 1.6rem 0;
        font-size: 1.6rem;

        appearance: none;

        width: 100%;

        border: 0;
        border-bottom: 2px solid #bbb8d9;

        outline: transparent;
        color: #302e45;
    }

    input {
        margin-top: 3.2rem;
        padding: 1.6rem 0;
        font-size: 1.6rem;

        appearance: none;

        width: 100%;

        color: #302e45;

        border: 0;
        border-bottom: 2px solid #bbb8d9;
        outline: transparent;

        &::placeholder {
            color: #302e45;
        }
    }

    .adress-info {
        margin-top: 4rem;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: #302e45;
    }
`;
