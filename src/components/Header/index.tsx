import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

import * as S from './styles';
import plusIcon from '../../assets/icons/plus-icon.svg';

const Header = () => {
    let title = ''
    const router = useRouter()

    switch (router.pathname) {
        case '/':
            title = 'Empreendimentos'
            break;
        case '/create':
            title = 'Cadastro de empreendimentos'
            break;   
        case '/edit/[id]':
            title = 'Editar empreendimento'
            break;
        default:
            break;
    }

    return (
        <S.Container>
            <div>
                <Link href="/">
                    <h1>{title}</h1>
                </Link>
                <Link href="/create">
                    <button>
                        Adicionar <Image src={plusIcon} alt="Icone" />
                    </button>
                </Link>
            </div>
        </S.Container>
    );
};

export default Header;
