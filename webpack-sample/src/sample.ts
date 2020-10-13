function dummy(str: string) {
  console.log("dummy:" + str);
}

export function sample1() {
  const str = "mojimoji";
  console.log("sample " + str);
  dummy("sample1 call");
}
