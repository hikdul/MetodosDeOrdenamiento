
 const generateRandomInteger = (min: number, max: number): number => 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomIntegerList = (length: number, min: number, max: number): number[]  =>
{
  const list: number[] = [];
  for (let i = 0; i < length; i++) {
    const randomInt = generateRandomInteger(min, max);
    list.push(randomInt);
  }
  return list;
}
