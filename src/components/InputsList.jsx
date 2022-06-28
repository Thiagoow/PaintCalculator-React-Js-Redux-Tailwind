import React from 'react';
import Input from '../components/Input';

export const FormContext = React.createContext({
  formData: {}
});

export default function InputsList() {
  const [form, setForm] = React.useState({
    doors: 0,
    windows: 0,
    height: 0,
    width: 0
  });

  function handleData(e) {
    const { name, value } = e.target;
    const updatedData = { ...form, [name]: parseInt(value) };
    setForm(updatedData);
    console.log(updatedData);
  }

  return (
    <section className="flex flex-col gap-11 bg-containerColor py-10 my-10 items-center">
      <FormContext.Provider value={{ form, handleData }}>
        <Input
          txtContent="Quantas portas?"
          iconName="ic:baseline-sensor-door"
          name="doors"
        />

        <Input
          txtContent="Quantas janelas?"
          iconName="ic:round-window"
          name="windows"
        />

        <Input
          txtContent="Qual a altura? (m)"
          iconName="ic:round-height"
          name="height"
        />

        <Input
          txtContent="Qual a largura? (m)"
          iconName="ic:round-height"
          rotateIcon={true}
          name="width"
        />
      </FormContext.Provider>
    </section>
  );
}
