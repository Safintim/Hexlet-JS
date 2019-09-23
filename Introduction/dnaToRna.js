const dnaToRna = (str) => {
  const rna = 'CGAU';
  const dna = 'GCTA';
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    const indexChar = dna.indexOf(str[i]);

    if (indexChar === -1) {
      return null;
    }
    newStr += rna[indexChar];
  }
  return newStr;
};

export default dnaToRna;