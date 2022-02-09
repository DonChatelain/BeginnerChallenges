export const kilosToMiles = (kilos) => {
  return kilos / 1.609;
};

{
  // got this from a calculator
  const expected = 6.215040397762586
  const actual = kilosToMiles(10);

  if (expected === actual) {
    console.log('Pass kilosToMiles');
  } else {
    console.error('kilosToMiles failed');
  }
}
