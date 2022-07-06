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

  let results = {
    liters: [],
    canQty: []
  };

  if (paintArea < 1) {
    paintArea = 0;
  }

  Object.keys(canOfPaints).forEach((e) => {
    //const eName = e;
    const liters = canOfPaints[e];
    const canQty = Math.round(paintNeeded / liters);

    if (canQty < 1) {
      return 0;
    } else {
      results.liters.push(liters);
      results.canQty.push(canQty);
      paintNeeded = paintNeeded - liters * canQty;
    }
  });

  return results;
}
