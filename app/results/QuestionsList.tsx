'use client';

import { PROD_URL, TEST_URL } from '@/lib/urls';
import React, { useEffect, useState } from 'react';

export default function QuestionsListComponent() {
  const [questionsList, setQuestionsList] = useState<string[]>([]);
  const questions = questionsList.map((question) => (
    <li key={question}>{question}</li>
  ));

  const resultsUrl = PROD_URL || TEST_URL + '/query';
  useEffect(() => {
    fetch(resultsUrl)
      .then((res) => res.json())
      .then((data) => setQuestionsList(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Questions List</h1>
      <ul>{questions}</ul>
    </>
  );
}
