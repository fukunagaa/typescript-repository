function dummy(str: string) {
  console.log("dummy:" + str);
}

const add = (num: number): number => {
  return num + num;
};

const square = (num: number): number => {
  return num * num;
};

const call = (num: number): number => {
  return square(add(num));
};

function say(message: string) {
  console.log(message);
  const cityList = [
    { name: "東京", value: "1" },
    { name: "神奈川", value: "2" },
    { name: "千葉", value: "3" },
    { name: "埼玉", value: "4" },
  ];

  const target = cityList.find((city): boolean => {
    return city.name === "東京";
  });

  console.log(target);
}

export function sample1(): void {
  const str = "mojimoji";
  console.log("sample " + str);
  dummy("sample1 call");
  const sq = square(5);
  console.log(sq);
  console.log(call(3));
  say("東京");
}
