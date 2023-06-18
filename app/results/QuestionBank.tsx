'use client';

import { useSearchParams } from 'next/navigation';
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

  const rawData = useSearchParams().get('data');
  useEffect(() => {
    const questions = rawData?.split('|||');
    setQuestionsList(questions || []);
  }, []);

  return <Carousell>{questionBank}</Carousell>;
}

const Carousell = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
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
  width: 350px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin: 0 20px 40px 0;
  padding: 0 20px;
`;

const QuestionText = styled.p`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  width: 300px;
  white-space: initial;
`;
