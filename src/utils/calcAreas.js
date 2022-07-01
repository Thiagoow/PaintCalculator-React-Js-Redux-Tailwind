//==========Business Rules:
const defaultWin = {
  wid: 2,
  hei: 1.2
};
const winDefaultArea = defaultWin.wid * defaultWin.hei;
const defaultDoor = {
  wid: 0.8,
  hei: 1.9
};
const doorDefaultArea = defaultDoor.wid * defaultDoor.hei;

//==========Possible errors:
const errors = {
  invalidSize: '😵 Altura ou largura não permitida(s) 😕',
  invalidArea:
    '⚠ Área de portas e janelas devem ser no máximo METADE da área da parede❗',
  smallerThanDoor: '⚠ Altura da parede deve ser 30cm maior do que a porta❗'
};

//==========Main function:
export default function calcAreas(height, width, doors, wins) {
  const wallsArea = height * width;
  let paintArea = 0;

  if (wallsArea >= 1 && wallsArea <= 50) {
    const doorsArea = doors * doorDefaultArea;
    const winsArea = wins * winDefaultArea;

    if (wallsArea / (winsArea + doorsArea) >= 2) {
      if (doors > 0) {
        if (height - defaultDoor.hei >= 0.3) {
          paintArea = wallsArea - (winsArea + doorsArea);
          return { wallsArea, paintArea };
        } //Else:
        return errors.smallerThanDoor;
      } //Else:
      paintArea = wallsArea - (winsArea + doorsArea);
      return { wallsArea, paintArea };
    } //Else:
    return errors.invalidArea;
  } else {
    return errors.invalidSize;
  }
}
