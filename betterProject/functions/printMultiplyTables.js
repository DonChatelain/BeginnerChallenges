
export const printMultiplyTables = (num) => {
  const tables = [];
  for (let i = 1; i <= 5; i++) {
    tables.push(`${num} x ${i} = ${num * i}`)
  }
  return tables;
};
