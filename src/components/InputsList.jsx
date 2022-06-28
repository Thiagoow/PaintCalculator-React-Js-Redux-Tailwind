import React from 'react';
import Input from '../components/Input';
import WallBtns from '../components/WallBtns';

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
  }

  return (
    <FormContext.Provider value={{ form, handleData }}>
      <WallBtns formData={form} />

      <section className="flex flex-col gap-11 bg-containerColor py-10 my-10 items-center">
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
      </section>
    </FormContext.Provider>
  );
}
