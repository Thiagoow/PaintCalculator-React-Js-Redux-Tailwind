//==========Business Rules:
const literCapacity = 5;

const canOfPaints = {
  tiny: 0.5,
  small: 2.5,
  medium: 3.6,
  large: 18
};

//==========Main function:
export default function calcPaintNeed(paintArea) {
  const canModelsQty = Object.keys(canOfPaints).length;
  //Calculate the number of paint needed:
  const paintNeeded = paintArea / literCapacity;

  if (paintArea < 1) {
    return 0;
  }

  Object.keys(canOfPaints).forEach((e) => {
    //e: Attribute name | e.value: Attribute value;
    const howMuch = paintNeeded / canOfPaints[e];
    if (howMuch < 1) {
      return 0;
    } else {
      console.log(`${e}: ${howMuch}`);
    }
  });

  // return { liters, paints };
}
