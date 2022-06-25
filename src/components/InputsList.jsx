import React from 'react';
import Input from '../components/Input';

function InputsList() {
  return (
    <section className="flex flex-col gap-10 bg-containerColor py-10 my-10 items-center">
      <Input txtContent="Quantas portas?" iconName="ic:baseline-sensor-door" />

      <Input txtContent="Quantas janelas?" iconName="ic:round-window" />

      <Input txtContent="Qual a altura? (m)" iconName="ic:round-height" />

      <Input
        txtContent="Qual a largura? (m)"
        iconName="ic:round-height"
        rotateIcon={true}
      />
    </section>
  );
}

export default InputsList;
