type CategoryColorType = 'green' | 'purple' | 'blue' | 'yellow' | 'red' | 'cyan' | 'pink';

const CategoryColorScheme: CategoryColorType[] = [
  'green',
  'purple',
  'blue',
  'yellow',
  'red',
  'cyan',
  'pink',
];

const CategoryColor = (category: string) => {
  const codeSum = category
    .toLowerCase()
    .split('')
    .reduce((acc, cur) => {
      acc += cur.charCodeAt(0);
      return acc;
    }, 0);
  return CategoryColorScheme[codeSum % CategoryColorScheme.length];
};

export { CategoryColor };
