function dummy(str: string) {
  console.log("dummy:" + str);
}

function square(num: number): number {
  return num * num;
}

export function sample1() {
  const str = "mojimoji";
  console.log("sample " + str);
  dummy("sample1 call");
  let sq = square(5);
  console.log(sq);
}
