import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

import trashIcon from '../../assets/icons/trash-icon.svg';
import penIcon from '../../assets/icons/pen-icon.svg';
import { api } from '../../services/api';

interface EnterpriseItemProps {
    enterprise: {
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
    };
}

const EnterpriseItem = ({ enterprise }: EnterpriseItemProps) => {
    const handleDeleteItem = async (id: string) => {
        await api.delete(`/enterprises/${id}`);
    };

    return (
        <S.Container>
            <div className="top">
                <div className="info">
                    <h2>{enterprise.name}</h2>
                    <div className="actions">
                        <Image
                            className="cursor"
                            src={trashIcon}
                            alt="Apagar"
                            onClick={() => handleDeleteItem(enterprise.id)}
                        />
                        <Link href={`/edit/${enterprise.id}`}>
                            <button className='link'>
                                <Image
                                    className="cursor"
                                    src={penIcon}
                                    alt="Editar"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="labels">
                    <span>{enterprise.status}</span>
                    <span>{enterprise.purpose}</span>
                </div>
            </div>
            <div className="address">
                <span>
                    {enterprise.address.street}, {enterprise.address.number} -{' '}
                    {enterprise.address.district}, {enterprise.address.city}
                </span>
            </div>
        </S.Container>
    );
};

export default EnterpriseItem;
