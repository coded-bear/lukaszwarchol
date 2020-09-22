export const contentWriter = ({ destination, textList, time }) => {
  let number = 0;
  let text = textList[number].split("");

  let x = 0;

  const start = () => {
    const interval = setInterval(() => {
      destination.innerHTML += text[x];

      if (x >= text.length - 1) {
        clearInterval(interval);

        setTimeout(() => {
          if (number >= textList.length - 1) number = 0;
          else number++;
          text = textList[number].split("");
          x = 0;
          destination.classList.add("with-bg");

          setTimeout(() => {
            destination.classList.remove("with-bg");
            destination.innerHTML = "";

            start();
          }, 300);
        }, 800);
      } else x++;
    }, time);
  };
  start();
};
