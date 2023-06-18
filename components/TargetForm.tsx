'use client';

import { PROD_URL, TEST_URL } from '@/lib/urls';
import { IFormData } from '@/types/formData';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function TargetForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    twitterUrl: '',
    linkedInUrl: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onButtonClick = () => {
    clearTimeout(
      setTimeout(() => {
        setFormData({
          name: '',
          twitterUrl: '',
          linkedInUrl: '',
        });
      }, 1000)
    );
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formUrl = PROD_URL || TEST_URL + '/formData';
    fetch(formUrl, {
      method: 'POST',
      body: convertFormData(formData),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(`Status: ${res.status} ❌`);
          throw new Error();
        }
        return res.json();
      })
      .then((json) => console.log(`Response:`, json))
      .catch((err) => console.log(`Error:`, err));

    router.push('/results');
  };

  return (
    <FormDiv onSubmit={onSubmit}>
      <Field>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </Field>

      <Field>
        <label>Twitter URL: </label>
        <input
          type="text"
          name="twitterUrl"
          value={formData.twitterUrl}
          onChange={onChange}
        />
      </Field>

      <SubmitButton type="submit" onClick={onButtonClick}>
        Submit
      </SubmitButton>
    </FormDiv>
  );
}

const convertFormData = (formData: IFormData) => {
  const nativeFormData = new FormData();
  nativeFormData.append('name', formData.name);
  nativeFormData.append('twitterUrl', formData.twitterUrl);

  return nativeFormData;
};

const FormDiv = styled.main`
  width: 50%;
  margin: 20px auto;
`;

const Field = styled.div`
  display: flex;
`;

const Label = styled.label``;

const Input = styled.input``;

const SubmitButton = styled.button`
  background-color: blue;
`;
