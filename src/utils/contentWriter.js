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

// export const contentWriter = ({ destination, textList, time }) => {
//   // ANIMATE TEXT
//   const animateText = text => {
//     text.forEach((letter, j) => {
//       setTimeout(() => {
//         destination.innerHTML += letter;
//       }, j * time);
//     });

//     setTimeout(() => {
//       destination.classList.add("with-bg");
//     }, (text.length - 1) * time + 500);

//     setTimeout(() => {
//       destination.innerHTML = "";
//       destination.classList.remove("with-bg");
//     }, (text.length - 1) * time + 800);
//   };

//   // TEXT LIST FOREACH
//   textList.forEach((elem, i) => {
//     const text = elem.split("");
//     let difference = 0;
//     if (i === 0) difference = 0;
//     else difference = 1300;

//     setTimeout(() => {
//       animateText(text);
//     }, i * (text.length - 1) * time + difference);
//   });
// };
