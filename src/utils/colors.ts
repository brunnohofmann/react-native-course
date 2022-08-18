export const generateColorByString = (colorString: string): string => {
  const colorBase = colorString
    .split('')
    .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);

  return `#${Math.floor(colorBase * 16777215)
    .toString(16)
    .slice(0, 6)}`;
};
