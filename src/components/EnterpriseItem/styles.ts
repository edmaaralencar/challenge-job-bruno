import styled from 'styled-components';

export const Container = styled.div`
    padding: 3.2rem;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    box-shadow: 0px 2px 4px 0px #302e450f;
    border-radius: 8px;

    .link {
        background: transparent;
        border: 0;
        display: flex;
        align-items: center;
    }

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .info {
            display: flex;

            h2 {
                font-size: 2rem;
                font-weight: 700;
                color: #302e45;
            }

            .actions {
                margin-left: 1.8rem;
                display: flex;
                gap: 1rem;

                .cursor {
                    cursor: pointer;
                }
            }
        }

        .labels {
            display: flex;
            gap: 1.6rem;

            span {
                display: inline-block;
                padding: 0.8rem 2.4rem;
                color: #302e45;
                border-radius: 70px;
                border: 1px solid #8385ff;
                font-size: 1.2rem;
                text-transform: uppercase;
            }
        }
    }

    .address {
        font-size: 1.4rem;
        color: #6d6c7b;
    }
`;
