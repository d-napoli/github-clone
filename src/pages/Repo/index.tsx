import React from 'react';

import { Link } from 'react-router-dom';

import {
    Container,
    Breadcrumb,
    RepoIcon,
    Stats,
    StarIcon,
    ForksIcon,
    LinkButton,
    GithubIcon
} from './styles';

const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                <Link className={'username'} to={'/d-napoli'}>
                    d-napoli
                </Link>
                
                <span>/</span>
                
                <Link className={'reponame'} to={'/d-napoli/twitter-clone'}>Twitter Clone</Link>
            </Breadcrumb>

            <p>Clone do Twitter utilizando ReactJS</p>
            <Stats>
                <li>
                    <StarIcon />
                    <b>9</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForksIcon />
                    <b>0</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href={'https://github.com/d-napoli/twitter-clone'}>
                <GithubIcon />
                <span>View on Github</span>
            </LinkButton>
        </Container>
    );
}

export default Repo;