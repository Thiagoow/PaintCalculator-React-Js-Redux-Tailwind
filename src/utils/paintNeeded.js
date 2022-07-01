//==========Business Rules:
const literCapacity = 5;

const canOfPaints = {
  large: 18,
  medium: 3.6,
  small: 2.5,
  tiny: 0.5
};

//==========Main function:
export default function calcPaintNeed(paintArea) {
  //const canModelsQty = Object.keys(canOfPaints).length;
  let paintNeeded = paintArea / literCapacity;

  if (paintArea < 1) {
    return 0;
  }

  Object.keys(canOfPaints).forEach((e) => {
    const iName = e;
    const liters = canOfPaints[e];
    const canQty = Math.round(paintNeeded / liters);

    if (canQty < 1) {
      return 0;
    } else {
      console.log(`${liters}: ${canQty}`);
      paintNeeded = paintNeeded - liters;
    }
  });

  // return { liters, canQty };
}
