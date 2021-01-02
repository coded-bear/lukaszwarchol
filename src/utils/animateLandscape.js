import gsap from "gsap";

export const animateLandscape = landscapeWrapper => {
  const [elements] = landscapeWrapper.current.children;

  const mountains = elements.getElementById("mountains");
  const tree = elements.getElementById("tree");
  const plants = elements.getElementById("plants");
  const sunshine = elements.getElementById("sunshine");
  const cloud1 = elements.getElementById("cloud1");
  const cloud2 = elements.getElementById("cloud2");

  gsap.set([mountains, tree, plants, sunshine, cloud1, cloud2], { autoAlpha: 0 });

  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
  tl.to(mountains, { duration: 0.5, autoAlpha: 1 })
    .fromTo(tree, { y: "+=200", scaleY: 0 }, { duration: 1, y: "-=200", scaleY: 1, autoAlpha: 1 }, "-=0.5")
    .fromTo(plants, { y: "+=100", scaleY: 0 }, { duration: 1, y: "-=100", scaleY: 1, autoAlpha: 1 }, "-=0.5")
    .fromTo(sunshine, { x: "+=100", y: "+=400" }, { duration: 3, x: "-=100", y: "-=400", autoAlpha: 1 }, "-=1")
    .fromTo(cloud1, { x: "-=150" }, { duration: 1.5, x: "+=150", autoAlpha: 1 }, "-=1")
    .fromTo(cloud2, { x: "+=150" }, { duration: 1.5, x: "-=150", autoAlpha: 1 }, "-=0.5");
};
