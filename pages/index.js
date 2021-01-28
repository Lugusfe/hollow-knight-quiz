/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// eslint-disable-next-line no-unused-vars
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.section`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>Quiz Hollow Knight</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Hollow Knight Quiz</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste os seus conhecimentos sobre a história do vasto mundo de Hollow Night!</p>
            <small>⚠ Este quiz contem spoilers do jogo</small>
            <form onSubmit={function (infosEventos) {
              infosEventos.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosEventos) => { setName(infosEventos.target.value); }}
                placeholder="Coloque o seu nome para jogar!"
                value={name}
              />
              <Button type="submit" disabled={name.length <= 2}>
                {`Vamos Jogar ${name}!`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Outros Quizes</h1>

            <p>Lorem Ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner />

    </QuizBackground>

  );
}
