import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
    background: #ffffff;

    div {
        width: Min(90%, 1140px);
        margin: 0 auto;
        padding: 2.2rem 0;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 2.4rem;
            line-height: 2.4rem;
            font-weight: 700;
            color: #4f46bb;
            font-family: Montserrat, sans-serif;
            cursor: pointer;
        }

        button {
            display: inline-block;
            padding: 1rem 4rem;
            border: 0;
            border-radius: 7rem;
            font-size: 1.6rem;
            font-weight: 700;
            background: #4f46bb;
            color: #ffffff;

            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;
