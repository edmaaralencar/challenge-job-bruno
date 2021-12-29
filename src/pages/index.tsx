import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { api } from '../services/api';

import * as S from '../styles/pages/Home';

import trashIcon from '../assets/icons/trash-icon.svg';
import penIcon from '../assets/icons/pen-icon.svg';

import EnterpriseItem from '../components/EnterpriseItem';
import { useEffect, useState } from 'react';

interface HomeProps {
    enterprises: Array<{
        id: string;
        name: string;
        status: string;
        purpose: string;
        ri_number: string;
        address: {
            district: string;
            city: string;
            street: string;
            state: string;
            number: string;
            cep: string;
        };
    }>;
}

export default function Home({ enterprises }: HomeProps) {
    return (
        <>
            <Head>
                <title>Empreendimentos</title>
            </Head>
            <S.Container>
                <S.EnterprisesList>
                    {enterprises.map((enterprise) => (
                        <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
                    ))}
                </S.EnterprisesList>
            </S.Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data: enterprises } = await api.get('/enterprises');

    return {
        props: {
            enterprises,
        },
    };
};
