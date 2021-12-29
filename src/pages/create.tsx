import React, { useState } from 'react';

import * as S from '../styles/pages/Create';

import { api } from '../services/api';
import { toast } from 'react-toastify';

export default function Create() {
    const [cep, setCep] = useState('');
    const [formAddress, setFormAddress] = useState({
        logradouro: '',
        cep: '',
        bairro: '',
        localidade: '',
        uf: '',
    });
    const [formData, setFormData] = useState({
        name: '',
        status: 'Breve lançamento',
        purpose: 'Residencial',
        ri_number: '123321',
        address: {
            street: '',
            number: '',
            cep: '',
            state: '',
            district: '',
            city: '',
        },
    });

    const { address, purpose, status, name } = formData;

    const handleCep = async () => {
        if (cep) {
            const { data } = await api.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            if (data.erro) {
                toast.error('CEP inexistente.');
                return;
            }

            setFormAddress({
                logradouro: data.logradouro,
                cep: data.cep,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf,
            });

            setFormData({
                ...formData,
                address: {
                    street: data.logradouro,
                    number: '',
                    cep: data.cep,
                    state: data.uf,
                    district: data.bairro,
                    city: data.localidade,
                },
            });

            return;
        }

        toast.error('Preencha o campo para poder checar');
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            address: {
                ...address,
                number: event.target.value,
            },
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (name && status && purpose && cep && address.number) {
            await api.post('/enterprises', formData);
            setFormData({
                name: '',
                status: 'Breve lançamento',
                purpose: 'Residencial',
                ri_number: '123321',
                address: {
                    street: '',
                    number: '',
                    cep: '',
                    state: '',
                    district: '',
                    city: '',
                },
            })
            toast.success('Empreendimento cadastrado com sucesso');
            return;
        }

        toast.error('Preencha todos os campos');
    };

    return (
        <S.Container onSubmit={handleSubmit}>
            <div className="wrapper">
                <h2>Informações</h2>

                <select
                    onChange={(event) =>
                        setFormData({ ...formData, status: event.target.value })
                    }
                    value={status}
                >
                    <option value="Breve lançamento">Breve lançamento</option>
                    <option value="Lançamento">Lançamento</option>
                    <option value="Em obras">Em obras</option>
                    <option value="Pronto pra morar">Pronto pra morar</option>
                </select>

                <input
                    name="name"
                    type="text"
                    placeholder="Nome do empreendimento"
                    onChange={(event) =>
                        setFormData({ ...formData, name: event.target.value })
                    }
                    value={name}
                />

                <select
                    onChange={(event) =>
                        setFormData({
                            ...formData,
                            purpose: event.target.value,
                        })
                    }
                    value={purpose}
                >
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                </select>

                <div className="cep">
                    <input
                        placeholder="00000-000"
                        onChange={(event) => setCep(event.target.value)}
                        maxLength={8}
                        type="text"
                    />
                    <button type="button" onClick={handleCep}>
                        Checar
                    </button>
                </div>

                {formAddress?.bairro?.length !== 0 && (
                    <div className="adress-info">
                        {formAddress.logradouro} <br />
                        {formAddress.bairro} <br />
                        {formAddress.localidade} <br />
                        {formAddress.uf}
                    </div>
                )}

                <input
                    placeholder="000"
                    type="number"
                    onChange={handleNumberChange}
                />
            </div>

            <button className="button-submit" type="submit">
                Cadastrar
            </button>
        </S.Container>
    );
}
