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
