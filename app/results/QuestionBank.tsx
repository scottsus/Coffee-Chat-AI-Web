'use client';

import { PROD_URL, TEST_URL } from '@/lib/urls';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function QuestionBank() {
  const [questionsList, setQuestionsList] = useState<string[]>([
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
  ]);
  const questionBank = questionsList.map((question) => (
    <QuestionBox key={question} question={question} />
  ));

  // const resultsUrl = PROD_URL || TEST_URL + '/query';
  // useEffect(() => {
  //   fetch(resultsUrl)
  //     .then((res) => res.json())
  //     .then((data) => setQuestionsList(data))
  //     .catch((err) => console.log(err));
  // }, []);
  return <Carousell>{questionBank}</Carousell>;
}

const Carousell = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
`;

interface IQuestionBox {
  question: string;
}

function QuestionBox({ question }: IQuestionBox) {
  return (
    <QuestionBoxDiv>
      <QuestionText>{question}</QuestionText>
    </QuestionBoxDiv>
  );
}

const QuestionBoxDiv = styled.div`
  min-width: 320px;
  height: 175px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

const QuestionText = styled.p`
  font-size: 21px;
  font-family: Inter;
  font-weight: 600;
  margin: auto;
`;