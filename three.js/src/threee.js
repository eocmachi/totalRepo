import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const Threee = () => {
  //Scene
  const scene = new THREE.Scene();

  // const texture = new THREE.TextureLoader().load(
  //   process.env.PUBLIC_URL + "/images/dot.png"
  // );

  //Create our sphere
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const meterial = new THREE.MeshStandardMaterial({
    color: "#0081C9",
    roughness: 0.5,
    // map: texture,
  });
  const mesh = new THREE.Mesh(geometry, meterial);
  scene.add(mesh);

  //Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  //Light
  const light = new THREE.PointLight(0xffffff, 3, 100);
  light.position.set(0, 10, 10);
  light.intensity = 1.25;
  scene.add(light);

  //Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 10;
  scene.add(camera);

  //Renderer
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);
  renderer.setClearColor(0x000000, 0);

  //Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;

  //Resize
  window.addEventListener("resize", () => {
    //Update Sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //Update Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  //TimeLine magiccc
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

  //Mouse Animation Color
  let mouseDown = false;
  let rgb = [];
  window.addEventListener("mousedown", () => (mouseDown = true));
  window.addEventListener("mouseup", () => (mouseDown = false));

  window.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      rgb = [
        Math.round((e.pageX / sizes.width) * 255),
        Math.round((e.pageY / sizes.height) * 255),
        150,
      ];
      //Let's animate
      let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
      gsap.to(mesh.material.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
      });
    }
  });
};

export default Threee;
