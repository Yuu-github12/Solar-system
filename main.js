
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Scene, Camera, Renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
renderer.render(scene, camera);

// set size render dan aspect ratio camera when screen size change
function resizeCanvas() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// Resize canvas function
resizeCanvas();

// Resize canvas when screen size change
window.addEventListener('resize', resizeCanvas);

// Light setup
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientlight);

// Controls setup
const controls = new OrbitControls(camera, renderer.domElement);

// Adding Stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(3000).fill().forEach(addStar);

// Setting background
const spaceTexture = new THREE.TextureLoader().load('galaxy.webp');
scene.background = spaceTexture;

// Sun setup
const suntex = new THREE.TextureLoader().load('sun.jpg');
const sun = new THREE.Mesh(new THREE.SphereGeometry(15, 64, 64), new THREE.MeshBasicMaterial({ map: suntex }));
scene.add(sun);

// Mercury setup
const mercuryDistanceFromSun = 30;
const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg');
const mercury = new THREE.Mesh(new THREE.SphereGeometry(2.5, 32, 32), new THREE.MeshBasicMaterial({ map: mercuryTexture }));
scene.add(mercury);

// Venus setup
const venusDistanceFromSun = 40;
const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const venus = new THREE.Mesh(new THREE.SphereGeometry(3.5, 32, 32), new THREE.MeshBasicMaterial({ map: venusTexture }));
scene.add(venus);

// Earth setup
const earthtex = new THREE.TextureLoader().load('earth.webp');
const earth = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshBasicMaterial({ map: earthtex }));
scene.add(earth);
const earthDistanceFromSun = 60;
earth.position.set(earthDistanceFromSun, 0, 0);

// Moon setup
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshStandardMaterial({ map: moonTexture })
);
scene.add(moon);
const moonDistanceFromEarth = 5;
moon.position.set(earthDistanceFromSun + moonDistanceFromEarth, 0, 0);

// Mars setup
const marsDistanceFromSun = 80;
const marsTexture = new THREE.TextureLoader().load('mars.jpg');
const mars = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshBasicMaterial({ map: marsTexture }));
scene.add(mars);

// Mars' moon setup
const marsMoonDistanceFromMars = 10;
const marsMoonTexture = new THREE.TextureLoader().load('mars_moon.jpg');
const marsMoon = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), new THREE.MeshBasicMaterial({ map: marsMoonTexture }));
mars.add(marsMoon);
marsMoon.position.set(marsMoonDistanceFromMars, 0, 0);

// Jupiter setup
const jupiterDistanceFromSun = 120;
const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
const jupiter = new THREE.Mesh(new THREE.SphereGeometry(8, 64, 64), new THREE.MeshBasicMaterial({ map: jupiterTexture }));
scene.add(jupiter);

// Jupiter's moon setup
const jupiterMoonDistanceFromJupiter = 12;
const jupiterMoonTexture = new THREE.TextureLoader().load('jupiter_moon.jpg');
const jupiterMoon = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({ map: jupiterMoonTexture }));
jupiter.add(jupiterMoon);
jupiterMoon.position.set(jupiterMoonDistanceFromJupiter, 0, 0);

// Saturn setup
const saturnDistanceFromSun = 160;
const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');
const saturn = new THREE.Mesh(new THREE.SphereGeometry(7, 64, 64), new THREE.MeshBasicMaterial({ map: saturnTexture }));
scene.add(saturn);

// Saturn ring setup
const saturnRingTexture = new THREE.TextureLoader().load('saturn_ring.png');
const saturnRing = new THREE.Mesh(
  new THREE.RingGeometry(9, 12, 64),
  new THREE.MeshBasicMaterial({ map: saturnRingTexture, side: THREE.DoubleSide })
);
saturn.add(saturnRing);
saturnRing.rotation.x = THREE.MathUtils.degToRad(60);

// Uranus setup
const uranusDistanceFromSun = 220;
const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');
const uranus = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), new THREE.MeshBasicMaterial({ map: uranusTexture }));
scene.add(uranus);

// Uranus' moon setup
const uranusMoonDistanceFromUranus = 8;
const uranusMoonTexture = new THREE.TextureLoader().load('uranus_moon.jpg');
const uranusMoon = new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 32), new THREE.MeshBasicMaterial({ map: uranusMoonTexture }));
uranus.add(uranusMoon);
uranusMoon.position.set(uranusMoonDistanceFromUranus, 0, 0);

// Neptune setup
const neptuneDistanceFromSun = 240;
const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');
const neptune = new THREE.Mesh(new THREE.SphereGeometry(5.5, 32, 32), new THREE.MeshBasicMaterial({ map: neptuneTexture }));
scene.add(neptune);

// Neptune's moon setup
const neptuneMoonDistanceFromNeptune = 10;
const neptuneMoonTexture = new THREE.TextureLoader().load('neptune_moon.jpg');
const neptuneMoon = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({ map: neptuneMoonTexture }));
neptune.add(neptuneMoon);
neptuneMoon.position.set(neptuneMoonDistanceFromNeptune, 0, 0);

// Pluto setup
const plutoDistanceFromSun = 260;
const plutoTexture = new THREE.TextureLoader().load('pluto.jpg');
const pluto = new THREE.Mesh(new THREE.SphereGeometry(2.5, 32, 32), new THREE.MeshBasicMaterial({ map: plutoTexture }));
scene.add(pluto);


// Circular path for objects' orbits
function drawCircularPath(radius) {
  const segments = 360;
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const geometry = new THREE.BufferGeometry().setFromPoints(
    Array.from({ length: segments + 1 }, (_, i) => {
      const angle = (Math.PI / 180) * (i * (360 / segments));
      return new THREE.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle));
    })
  );
  const line = new THREE.Line(geometry, material);
  scene.add(line);
}

// Drawing circular paths
drawCircularPath(mercuryDistanceFromSun);
drawCircularPath(venusDistanceFromSun);
drawCircularPath(earthDistanceFromSun);
drawCircularPath(marsDistanceFromSun);
drawCircularPath(jupiterDistanceFromSun);
drawCircularPath(saturnDistanceFromSun);
drawCircularPath(uranusDistanceFromSun);
drawCircularPath(neptuneDistanceFromSun);
drawCircularPath(plutoDistanceFromSun);

let prevScrollY = window.scrollY; // Store the previous scroll position
let isAnimatingToTop = false; // Flag to indicate if camera animation to top is in progress

// Function to smoothly animate camera position when reaching the top of the page
function animateCameraToTop() {
  const targetPosition = new THREE.Vector3(0, 0, 30); // New camera position when reaching the top
  const startPosition = camera.position.clone(); // Store the current camera position
  const duration = 1000; // Animation duration in milliseconds
  const startTime = performance.now();

  function updateCameraPosition(timestamp) {
    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Clamp the progress to [0, 1]

    // Calculate the new camera position using linear interpolation
    const newPosition = startPosition.clone().lerp(targetPosition, progress);

    camera.position.copy(newPosition);
    controls.update();

    if (progress < 1) {
      requestAnimationFrame(updateCameraPosition);
    } else {
      // Enable camera controls and re-enable page scrolling after the animation finishes
      enableCameraControlsAndScroll();
      isAnimatingToTop = false;
    }
  }

  // Start the animation
  requestAnimationFrame(updateCameraPosition);
}
// Camera on scroll
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  const earthOrbitSpeed = 0.001;
  const moonOrbitSpeed = 0.003;

  earth.position.x = earthDistanceFromSun * Math.cos(t * earthOrbitSpeed);
  earth.position.z = earthDistanceFromSun * Math.sin(t * earthOrbitSpeed);
  moon.position.x = (earthDistanceFromSun + moonDistanceFromEarth) * Math.cos(t * moonOrbitSpeed);
  moon.position.z = (earthDistanceFromSun + moonDistanceFromEarth) * Math.sin(t * moonOrbitSpeed);

  camera.position.y = t * -0.093;
  camera.rotation.y = t * -0.0001;
  camera.position.x = t * -0.20;
  camera.rotation.x = t * -0.9;
  camera.position.z = t * -0.0092;
  controls.update();
  if (window.scrollY === 0 && !isAnimatingToTop) {
    isAnimatingToTop = true; // Set the flag to indicate that the animation to top is in progress
    animateCameraToTop(); // Animate the camera to the top position
  }

  // Update the previous scroll position
  prevScrollY = window.scrollY;
}

document.body.onscroll = moveCamera;
moveCamera();

let isAnimationRunning = true; // Flag to check if animation is running

// Function to stop the animation
function stopAnimation() {
  isAnimationRunning = false;
}

// Function to resume the animation
function resumeAnimation() {
  isAnimationRunning = true;
}


function animate() {
  if (isAnimationRunning) {
    requestAnimationFrame(animate);

    mercury.rotation.y += 0.003;
    mercury.rotation.x += 0.003;
    venus.rotation.y += 0.003;
    venus.rotation.x += 0.003;
    earth.rotation.y += 0.003;
    sun.rotation.y += 0.005;
    sun.rotation.z += 0.005;
    saturnRing.rotation.y += 0.0001;
    saturnRing.rotation.z += 0.002;
    moon.rotation.y += 0.003;
    jupiter.rotation.y += 0.003;
    mars.rotation.y += 0.003;
    jupiterMoon.rotation.y += 0.003;
    marsMoon.rotation.y += 0.003;
    neptune.rotation.y += 0.003;
    neptune.rotation.x += 0.003;
    neptuneMoon.rotation.y += 0.003;
    uranus.rotation.y += 0.003;
    uranusMoon.rotation.y += 0.003;
    pluto.rotation.y += 0.003;

    const mercuryOrbitSpeed = 0.0002;
    mercury.position.x = mercuryDistanceFromSun * Math.cos(performance.now() * mercuryOrbitSpeed);
    mercury.position.z = mercuryDistanceFromSun * Math.sin(performance.now() * mercuryOrbitSpeed);

    const venusOrbitSpeed = 0.0003;
    venus.position.x = venusDistanceFromSun * Math.cos(performance.now() * venusOrbitSpeed);
    venus.position.z = venusDistanceFromSun * Math.sin(performance.now() * venusOrbitSpeed);

    const moonOrbitSpeed = 0.001;
    moon.position.x = earth.position.x + moonDistanceFromEarth * Math.cos(performance.now() * moonOrbitSpeed);
    moon.position.z = earth.position.z + moonDistanceFromEarth * Math.sin(performance.now() * moonOrbitSpeed);

    const marsOrbitSpeed = 0.001;
    mars.position.x = marsDistanceFromSun * Math.cos(performance.now() * marsOrbitSpeed);
    mars.position.z = marsDistanceFromSun * Math.sin(performance.now() * marsOrbitSpeed);

    const marsMoonOrbitSpeed = 0.001;
    marsMoon.position.x = marsMoonDistanceFromMars * Math.cos(performance.now() * marsMoonOrbitSpeed);
    marsMoon.position.z = marsMoonDistanceFromMars * Math.sin(performance.now() * marsMoonOrbitSpeed);

    const jupiterOrbitSpeed = 0.0007;
    jupiter.position.x = jupiterDistanceFromSun * Math.cos(performance.now() * jupiterOrbitSpeed);
    jupiter.position.z = jupiterDistanceFromSun * Math.sin(performance.now() * jupiterOrbitSpeed);

    const jupiterMoonOrbitSpeed = 0.002;
    jupiterMoon.position.x = jupiterMoonDistanceFromJupiter * Math.cos(performance.now() * jupiterMoonOrbitSpeed);
    jupiterMoon.position.z = jupiterMoonDistanceFromJupiter * Math.sin(performance.now() * jupiterMoonOrbitSpeed);

    const saturnOrbitSpeed = 0.0005;
    saturn.position.x = saturnDistanceFromSun * Math.cos(performance.now() * saturnOrbitSpeed);
    saturn.position.z = saturnDistanceFromSun * Math.sin(performance.now() * saturnOrbitSpeed);

    const neptuneOrbitSpeed = 0.0006;
    neptune.position.x = neptuneDistanceFromSun * Math.cos(performance.now() * neptuneOrbitSpeed);
    neptune.position.z = neptuneDistanceFromSun * Math.sin(performance.now() * neptuneOrbitSpeed);

    const neptuneMoonOrbitSpeed = 0.002;
    neptuneMoon.position.x = neptuneMoonDistanceFromNeptune * Math.cos(performance.now() * neptuneMoonOrbitSpeed);
    neptuneMoon.position.z = neptuneMoonDistanceFromNeptune * Math.sin(performance.now() * neptuneMoonOrbitSpeed);

    const uranusOrbitSpeed = 0.0004;
    uranus.position.x = uranusDistanceFromSun * Math.cos(performance.now() * uranusOrbitSpeed);
    uranus.position.z = uranusDistanceFromSun * Math.sin(performance.now() * uranusOrbitSpeed);

    const uranusMoonOrbitSpeed = 0.002;
    uranusMoon.position.x = uranusMoonDistanceFromUranus * Math.cos(performance.now() * uranusMoonOrbitSpeed);
    uranusMoon.position.z = uranusMoonDistanceFromUranus * Math.sin(performance.now() * uranusMoonOrbitSpeed);

    const plutoOrbitSpeed = 0.0004;
    pluto.position.x = plutoDistanceFromSun * Math.cos(performance.now() * plutoOrbitSpeed);
    pluto.position.z = plutoDistanceFromSun * Math.sin(performance.now() * plutoOrbitSpeed);

    controls.update();
    renderer.render(scene, camera);

  } else {

    requestAnimationFrame(animate);

    mercury.rotation.y += 0.003;
    mercury.rotation.x += 0.003;
    venus.rotation.y += 0.003;
    venus.rotation.x += 0.003;
    earth.rotation.y += 0.003;
    sun.rotation.y += 0.005;
    sun.rotation.z += 0.005;
    saturnRing.rotation.y += 0.005;
    moon.rotation.y += 0.003;
    jupiter.rotation.y += 0.003;
    mars.rotation.y += 0.003;
    jupiterMoon.rotation.y += 0.003;
    marsMoon.rotation.y += 0.003;
    neptune.rotation.y += 0.003;
    neptune.rotation.x += 0.003;
    neptuneMoon.rotation.y += 0.003;
    uranus.rotation.y += 0.003;
    uranusMoon.rotation.y += 0.003;
    pluto.rotation.y += 0.003;

    const mercuryOrbitSpeed = 0;
    mercury.position.x = mercuryDistanceFromSun * Math.cos(performance.now() * mercuryOrbitSpeed);
    mercury.position.z = mercuryDistanceFromSun * Math.sin(performance.now() * mercuryOrbitSpeed);

    const venusOrbitSpeed = 0;
    venus.position.x = venusDistanceFromSun * Math.cos(performance.now() * venusOrbitSpeed);
    venus.position.z = venusDistanceFromSun * Math.sin(performance.now() * venusOrbitSpeed);

    const moonOrbitSpeed = 0.001;
    moon.position.x = earth.position.x + moonDistanceFromEarth * Math.cos(performance.now() * moonOrbitSpeed);
    moon.position.z = earth.position.z + moonDistanceFromEarth * Math.sin(performance.now() * moonOrbitSpeed);

    const marsOrbitSpeed = 0;
    mars.position.x = marsDistanceFromSun * Math.cos(performance.now() * marsOrbitSpeed);
    mars.position.z = marsDistanceFromSun * Math.sin(performance.now() * marsOrbitSpeed);

    const marsMoonOrbitSpeed = 0.001;
    marsMoon.position.x = marsMoonDistanceFromMars * Math.cos(performance.now() * marsMoonOrbitSpeed);
    marsMoon.position.z = marsMoonDistanceFromMars * Math.sin(performance.now() * marsMoonOrbitSpeed);

    const jupiterOrbitSpeed = 0;
    jupiter.position.x = jupiterDistanceFromSun * Math.cos(performance.now() * jupiterOrbitSpeed);
    jupiter.position.z = jupiterDistanceFromSun * Math.sin(performance.now() * jupiterOrbitSpeed);

    const jupiterMoonOrbitSpeed = 0.002;
    jupiterMoon.position.x = jupiterMoonDistanceFromJupiter * Math.cos(performance.now() * jupiterMoonOrbitSpeed);
    jupiterMoon.position.z = jupiterMoonDistanceFromJupiter * Math.sin(performance.now() * jupiterMoonOrbitSpeed);

    const saturnOrbitSpeed = 0;
    saturn.position.x = saturnDistanceFromSun * Math.cos(performance.now() * saturnOrbitSpeed);
    saturn.position.z = saturnDistanceFromSun * Math.sin(performance.now() * saturnOrbitSpeed);

    const neptuneOrbitSpeed = 0;
    neptune.position.x = neptuneDistanceFromSun * Math.cos(performance.now() * neptuneOrbitSpeed);
    neptune.position.z = neptuneDistanceFromSun * Math.sin(performance.now() * neptuneOrbitSpeed);

    const neptuneMoonOrbitSpeed = 0.002;
    neptuneMoon.position.x = neptuneMoonDistanceFromNeptune * Math.cos(performance.now() * neptuneMoonOrbitSpeed);
    neptuneMoon.position.z = neptuneMoonDistanceFromNeptune * Math.sin(performance.now() * neptuneMoonOrbitSpeed);

    const uranusOrbitSpeed = 0;
    uranus.position.x = uranusDistanceFromSun * Math.cos(performance.now() * uranusOrbitSpeed);
    uranus.position.z = uranusDistanceFromSun * Math.sin(performance.now() * uranusOrbitSpeed);

    const uranusMoonOrbitSpeed = 0.002;
    uranusMoon.position.x = uranusMoonDistanceFromUranus * Math.cos(performance.now() * uranusMoonOrbitSpeed);
    uranusMoon.position.z = uranusMoonDistanceFromUranus * Math.sin(performance.now() * uranusMoonOrbitSpeed);

    const plutoOrbitSpeed = 0;
    pluto.position.x = plutoDistanceFromSun * Math.cos(performance.now() * plutoOrbitSpeed);
    pluto.position.z = plutoDistanceFromSun * Math.sin(performance.now() * plutoOrbitSpeed);

    controls.update();
    renderer.render(scene, camera);

  }
}

animate();

function showinfo() {
  const lightSection = document.getElementById('menubutton');
  const solarSection = document.getElementById('solarsystem');
  lightSection.classList.remove('light-hidden');
  lightSection.classList.add('light-show');
  solarSection.classList.remove('light-hidden');
  solarSection.classList.add('light-show');
}

function hideinfo() {
  const lightSection = document.getElementById('menubutton');
  const solarSection = document.getElementById('solarsystem');
  lightSection.classList.remove('light-show');
  lightSection.classList.add('light-hidden');
  solarSection.classList.remove('light-show');
  solarSection.classList.add('light-hidden');
}


let lastCameraPosition = new THREE.Vector3();
let lastLookAtPosition = new THREE.Vector3();

// Function to focus the camera on the Sun
// Declare a variable to track if camera controls are enabled or disabled
let cameraControlsEnabled = true;

let preventScroll = false;

// Function to disable camera controls and page scrolling
function disableCameraControlsAndScroll() {
  controls.enabled = false;
  cameraControlsEnabled = false;
  document.body.classList.add("no-scroll"); // Add the class to hide the scrollbar
}

// Function to enable camera controls and re-enable page scrolling
function enableCameraControlsAndScroll() {
  controls.enabled = true;
  cameraControlsEnabled = true;
  document.body.classList.remove("no-scroll"); // Remove the class to restore the scrollbar
}

// Event listener for the 'mousewheel' and 'touchmove' events to handle scrolling
function handleScroll(event) {
  // Check the flag and prevent scrolling if necessary
  if (preventScroll) {
    event.preventDefault();
  }
}

// Add the event listener to the window object
window.addEventListener("mousewheel", handleScroll, { passive: false });
window.addEventListener("touchmove", handleScroll, { passive: false });


// Function to focus the camera on the Sun
function focusOnSun() {
  // Check if the camera controls are already disabled
  if (!cameraControlsEnabled) {
    return;
  }

  // Get the current position of the camera
  const currentPosition = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  };

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Move the camera to the position of the Sun
  const targetPosition = {
    x: sun.position.x,
    y: sun.position.y + 10,
    z: sun.position.z + 50, // Move slightly above the Sun to get a better view
  };

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  stopAnimation();

  // Animation to smoothly move the camera to the target position
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const sunElement = document.getElementById("sun");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");
      sunElement.classList.add("hidden-planetinfo-show");
      sunElement.classList.remove("hidden");
      sunElement.classList.remove("hidden-planetinfo");


      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = {
      x: easeProgress * (targetPosition.x - currentPosition.x) + currentPosition.x,
      y: easeProgress * (targetPosition.y - currentPosition.y) + currentPosition.y,
      z: easeProgress * (targetPosition.z - currentPosition.z) + currentPosition.z,
    };
    camera.position.set(newPosition.x, newPosition.y, newPosition.z);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

// Function to focus the camera on the Earth
function focusOnEarth() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Earth coordinates
  const targetPosition = new THREE.Vector3(earth.position.x + 10, earth.position.y, earth.position.z);

  // Animation to smoothly move the camera to the target position and look at Earth
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(earth.position);
      controls.target.copy(earth.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const earthElement = document.getElementById("earth");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      earthElement.classList.add("hidden-planetinfo-show");
      earthElement.classList.remove("hidden");
      earthElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (earth.position.x - camera.position.x) + camera.position.x,
      easeProgress * (earth.position.y - camera.position.y) + camera.position.y,
      easeProgress * (earth.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

// Function to focus the camera on Jupiter's coordinates (x=120, y=0, z=0)
function focusOnJupiter() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Jupiter's coordinates
  const targetPosition = new THREE.Vector3(120, 0, 20);

  // Animation to smoothly move the camera to the target position and look at Jupiter
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(jupiter.position);
      controls.target.copy(jupiter.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const jupiterElement = document.getElementById("jupiter");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      jupiterElement.classList.add("hidden-planetinfo-show");
      jupiterElement.classList.remove("hidden");
      jupiterElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (jupiter.position.x - camera.position.x) + camera.position.x,
      easeProgress * (jupiter.position.y - camera.position.y) + camera.position.y,
      easeProgress * (jupiter.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function focusOnMercury() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Mercury's coordinates
  const targetPosition = new THREE.Vector3(30, 0, 8);

  // Animation to smoothly move the camera to the target position and look at Mercury
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(mercury.position);
      controls.target.copy(mercury.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const mercuryElement = document.getElementById("mercury");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      mercuryElement.classList.add("hidden-planetinfo-show");
      mercuryElement.classList.remove("hidden");
      mercuryElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (mercury.position.x - camera.position.x) + camera.position.x,
      easeProgress * (mercury.position.y - camera.position.y) + camera.position.y,
      easeProgress * (mercury.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function focusOnVenus() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Venus coordinates
  const targetPosition = new THREE.Vector3(40, 0, 10);

  // Animation to smoothly move the camera to the target position and look at Venus
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(venus.position);
      controls.target.copy(venus.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const venusElement = document.getElementById("venus");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      venusElement.classList.add("hidden-planetinfo-show");
      venusElement.classList.remove("hidden");
      venusElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (venus.position.x - camera.position.x) + camera.position.x,
      easeProgress * (venus.position.y - camera.position.y) + camera.position.y,
      easeProgress * (venus.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}


function focusOnMars() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Mars coordinates
  const targetPosition = new THREE.Vector3(80, 0, 10);

  // Animation to smoothly move the camera to the target position and look at Mars
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(mars.position);
      controls.target.copy(mars.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const marsElement = document.getElementById("mars");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      marsElement.classList.add("hidden-planetinfo-show");
      marsElement.classList.remove("hidden");
      marsElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (mars.position.x - camera.position.x) + camera.position.x,
      easeProgress * (mars.position.y - camera.position.y) + camera.position.y,
      easeProgress * (mars.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function focusOnSaturn() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Saturn coordinates
  const targetPosition = new THREE.Vector3(160, 0, 20);

  // Animation to smoothly move the camera to the target position and look at Saturn
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(saturn.position);
      controls.target.copy(saturn.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const saturnElement = document.getElementById("saturn");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      saturnElement.classList.add("hidden-planetinfo-show");
      saturnElement.classList.remove("hidden");
      saturnElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (saturn.position.x - camera.position.x) + camera.position.x,
      easeProgress * (saturn.position.y - camera.position.y) + camera.position.y,
      easeProgress * (saturn.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function focusOnUranus() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Uranus coordinates
  const targetPosition = new THREE.Vector3(220, 0, 20);

  // Animation to smoothly move the camera to the target position and look at Uranus
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(uranus.position);
      controls.target.copy(uranus.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const uranusElement = document.getElementById("uranus");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      uranusElement.classList.add("hidden-planetinfo-show");
      uranusElement.classList.remove("hidden");
      uranusElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (uranus.position.x - camera.position.x) + camera.position.x,
      easeProgress * (uranus.position.y - camera.position.y) + camera.position.y,
      easeProgress * (uranus.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function focusOnNeptune() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Neptune coordinates
  const targetPosition = new THREE.Vector3(240, 0, 20);

  // Animation to smoothly move the camera to the target position and look at Neptune
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(neptune.position);
      controls.target.copy(neptune.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const neptuneElement = document.getElementById("neptune");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      neptuneElement.classList.add("hidden-planetinfo-show");
      neptuneElement.classList.remove("hidden");
      neptuneElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (neptune.position.x - camera.position.x) + camera.position.x,
      easeProgress * (neptune.position.y - camera.position.y) + camera.position.y,
      easeProgress * (neptune.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function focusOnPluto() {
  // Check if the camera animation is already running, and if so, return
  if (!cameraControlsEnabled) {
    return;
  }

  lastCameraPosition.copy(camera.position);
  lastLookAtPosition.copy(controls.target);
  // Stop the animation of all planets
  stopAnimation();

  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Define the target position to focus on Pluto coordinates
  const targetPosition = new THREE.Vector3(260, 0, 10);

  // Animation to smoothly move the camera to the target position and look at Pluto
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();
  function moveCameraToTarget(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(targetPosition);
      camera.lookAt(pluto.position);
      controls.target.copy(pluto.position);
      controls.update();
      const backButtonElement = document.getElementById("backBtn");
      const plutoElement = document.getElementById("pluto");
      const infoButton = document.getElementById("showinfo");
      backButtonElement.classList.add("hidden-info-show");
      backButtonElement.classList.remove("hidden");
      backButtonElement.classList.remove("hidden-info");
      plutoElement.classList.add("hidden-planetinfo-show");
      plutoElement.classList.remove("hidden");
      plutoElement.classList.remove("hidden-planetinfo");
      infoButton.classList.remove("hidden-showinfo");
      infoButton.classList.add("hidden-showinfo-show");

      return;
    }
    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (targetPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (targetPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (targetPosition.z - camera.position.z) + camera.position.z,
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (pluto.position.x - camera.position.x) + camera.position.x,
      easeProgress * (pluto.position.y - camera.position.y) + camera.position.y,
      easeProgress * (pluto.position.z - camera.position.z) + camera.position.z,
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);
    hideinfo();

    controls.update();
    requestAnimationFrame(moveCameraToTarget);
  }

  requestAnimationFrame(moveCameraToTarget);
}

function moveCameraBack() {
  // Define the animation duration
  const duration = 2000; // Animation duration in milliseconds
  const start = performance.now();

  isAnimationRunning = true;
  // Disable camera controls and page scrolling during the animation
  disableCameraControlsAndScroll();

  // Animation to smoothly move the camera back to its last stored positions
  function moveCameraToLastPositions(timestamp) {
    const elapsed = timestamp - start;
    if (elapsed >= duration) {
      camera.position.copy(lastCameraPosition);
      camera.lookAt(lastLookAtPosition);
      controls.target.copy(lastLookAtPosition);
      controls.update();

      // Enable camera controls and re-enable page scrolling after the animation finishes
      enableCameraControlsAndScroll();

      showinfo();

      return;
    }

    const progress = elapsed / duration;
    const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    const newPosition = new THREE.Vector3(
      easeProgress * (lastCameraPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (lastCameraPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (lastCameraPosition.z - camera.position.z) + camera.position.z
    );
    camera.position.copy(newPosition);

    // Update the camera lookAt target during the animation
    const newLookAt = new THREE.Vector3(
      easeProgress * (lastLookAtPosition.x - camera.position.x) + camera.position.x,
      easeProgress * (lastLookAtPosition.y - camera.position.y) + camera.position.y,
      easeProgress * (lastLookAtPosition.z - camera.position.z) + camera.position.z
    );
    camera.lookAt(newLookAt);
    controls.target.copy(newLookAt);

    controls.update();
    requestAnimationFrame(moveCameraToLastPositions);
  }

  requestAnimationFrame(moveCameraToLastPositions);
}

// Add event listener to the "Mercury" button
const mercuryButton = document.getElementById('mercuryBtn');
mercuryButton.addEventListener('click', focusOnMercury);

const venusButton = document.getElementById('venusBtn');
venusButton.addEventListener('click', focusOnVenus);

const earthButton = document.getElementById('earthBtn');
earthButton.addEventListener('click', focusOnEarth);

const marsButton = document.getElementById('marsBtn');
marsButton.addEventListener('click', focusOnMars);

const saturnButton = document.getElementById('saturnBtn');
saturnButton.addEventListener('click', focusOnSaturn);

const uranusButton = document.getElementById('uranusBtn');
uranusButton.addEventListener('click', focusOnUranus);

const neptuneButton = document.getElementById('neptuneBtn');
neptuneButton.addEventListener('click', focusOnNeptune);

const plutoButton = document.getElementById('plutoBtn');
plutoButton.addEventListener('click', focusOnPluto);

// Add event listener to the "Jupiter" button
const jupiterButton = document.getElementById('jupiterBtn');
jupiterButton.addEventListener('click', focusOnJupiter);

// Get the "View Sun" button and add an event listener to handle the click event
const viewSunButton = document.getElementById("viewSunBtn");
viewSunButton.addEventListener("click", focusOnSun);

const infoButton = document.getElementById("showinfo");
infoButton.addEventListener("click", () => {

  const suninfo = document.getElementById("suninfo");
  const jupiterinfo = document.getElementById("jupiterinfo");
  const mercuryinfo = document.getElementById("mercuryinfo");
  const venusinfo = document.getElementById("venusinfo");
  const earthinfo = document.getElementById("earthinfo");
  const marsinfo = document.getElementById("marsinfo");
  const saturninfo = document.getElementById("saturninfo");
  const uranusinfo = document.getElementById("uranusinfo");
  const neptuneinfo = document.getElementById("neptuneinfo");
  const plutoinfo = document.getElementById("plutoinfo");
  const sunElement = document.getElementById("sun");
  const jupiterElement = document.getElementById("jupiter");
  const mercuryElement = document.getElementById("mercury");
  const venusElement = document.getElementById("venus");
  const earthElement = document.getElementById("earth");
  const marsElement = document.getElementById("mars");
  const saturnElement = document.getElementById("saturn");
  const uranusElement = document.getElementById("uranus");
  const neptuneElement = document.getElementById("neptune");
  const plutoElement = document.getElementById("pluto");

  if (sunElement.classList.contains("hidden-planetinfo-show")) {
    suninfo.classList.toggle("info-show");
  }
  if (jupiterElement.classList.contains("hidden-planetinfo-show")) {
    jupiterinfo.classList.toggle("info-show");
  }
  if (mercuryElement.classList.contains("hidden-planetinfo-show")) {
    mercuryinfo.classList.toggle("info-show");
  }
  if (venusElement.classList.contains("hidden-planetinfo-show")) {
    venusinfo.classList.toggle("info-show");
  }
  if (earthElement.classList.contains("hidden-planetinfo-show")) {
    earthinfo.classList.toggle("info-show");
  }
  if (marsElement.classList.contains("hidden-planetinfo-show")) {
    marsinfo.classList.toggle("info-show");
  }
  if (saturnElement.classList.contains("hidden-planetinfo-show")) {
    saturninfo.classList.toggle("info-show");
  }
  if (uranusElement.classList.contains("hidden-planetinfo-show")) {
    uranusinfo.classList.toggle("info-show");
  }
  if (neptuneElement.classList.contains("hidden-planetinfo-show")) {
    neptuneinfo.classList.toggle("info-show");
  }
  if (plutoElement.classList.contains("hidden-planetinfo-show")) {
    plutoinfo.classList.toggle("info-show");
  }
  
  // Toggle the button text
  if (infoButton.innerHTML === 'Information') {
    infoButton.innerHTML = 'Close';
  } else {
    infoButton.innerHTML = 'Information';

  }
});


const backButton = document.getElementById("backBtn");
backButton.addEventListener("click", () => {
  moveCameraBack();
  backButton.classList.remove("hidden-info-show");
  backButton.classList.add("hidden-info");

  const sunElement = document.getElementById("sun");
  const jupiterElement = document.getElementById("jupiter");
  const mercuryElement = document.getElementById("mercury");
  const venusElement = document.getElementById("venus");
  const earthElement = document.getElementById("earth");
  const marsElement = document.getElementById("mars");
  const saturnElement = document.getElementById("saturn");
  const uranusElement = document.getElementById("uranus");
  const neptuneElement = document.getElementById("neptune");
  const plutoElement = document.getElementById("pluto");
  const infoButton = document.getElementById("showinfo");
  const suninfo = document.getElementById("suninfo");
  const jupiterinfo = document.getElementById("jupiterinfo");
  const mercuryinfo = document.getElementById("mercuryinfo");
  const venusinfo = document.getElementById("venusinfo");
  const earthinfo = document.getElementById("earthinfo");
  const marsinfo = document.getElementById("marsinfo");
  const saturninfo = document.getElementById("saturninfo");
  const uranusinfo = document.getElementById("uranusinfo");
  const neptuneinfo = document.getElementById("neptuneinfo");
  const plutoinfo = document.getElementById("plutoinfo");

  infoButton.classList.remove("hidden-showinfo-show");
  infoButton.classList.add("hidden-showinfo");
  suninfo.classList.remove("info-show");
  jupiterinfo.classList.remove("info-show");
  mercuryinfo.classList.remove("info-show");
  venusinfo.classList.remove("info-show");
  earthinfo.classList.remove("info-show");
  marsinfo.classList.remove("info-show");
  saturninfo.classList.remove("info-show");
  uranusinfo.classList.remove("info-show");
  neptuneinfo.classList.remove("info-show");
  plutoinfo.classList.remove("info-show");
  infoButton.innerHTML = 'Information';


  if (sunElement.classList.contains("hidden-planetinfo-show")) {
    sunElement.classList.remove("hidden-planetinfo-show");
    sunElement.classList.add("hidden-planetinfo");
    sunElement.classList.add("hidden");
  }
  if (jupiterElement.classList.contains("hidden-planetinfo-show")) {
    jupiterElement.classList.remove("hidden-planetinfo-show");
    jupiterElement.classList.add("hidden-planetinfo");
    jupiterElement.classList.add("hidden");
  }

  if (mercuryElement.classList.contains("hidden-planetinfo-show")) {
    mercuryElement.classList.remove("hidden-planetinfo-show");
    mercuryElement.classList.add("hidden-planetinfo");
    mercuryElement.classList.add("hidden");
  }

  if (venusElement.classList.contains("hidden-planetinfo-show")) {
    venusElement.classList.remove("hidden-planetinfo-show");
    venusElement.classList.add("hidden-planetinfo");
    venusElement.classList.add("hidden");
  }

  if (earthElement.classList.contains("hidden-planetinfo-show")) {
    earthElement.classList.remove("hidden-planetinfo-show");
    earthElement.classList.add("hidden-planetinfo");
    earthElement.classList.add("hidden");
  }

  if (marsElement.classList.contains("hidden-planetinfo-show")) {
    marsElement.classList.remove("hidden-planetinfo-show");
    marsElement.classList.add("hidden-planetinfo");
    marsElement.classList.add("hidden");
  }
  if (saturnElement.classList.contains("hidden-planetinfo-show")) {
    saturnElement.classList.remove("hidden-planetinfo-show");
    saturnElement.classList.add("hidden-planetinfo");
    saturnElement.classList.add("hidden");
  }
  if (uranusElement.classList.contains("hidden-planetinfo-show")) {
    uranusElement.classList.remove("hidden-planetinfo-show");
    uranusElement.classList.add("hidden-planetinfo");
    uranusElement.classList.add("hidden");
  }
  if (neptuneElement.classList.contains("hidden-planetinfo-show")) {
    neptuneElement.classList.remove("hidden-planetinfo-show");
    neptuneElement.classList.add("hidden-planetinfo");
    neptuneElement.classList.add("hidden");
  }
  if (plutoElement.classList.contains("hidden-planetinfo-show")) {
    plutoElement.classList.remove("hidden-planetinfo-show");
    plutoElement.classList.add("hidden-planetinfo");
    plutoElement.classList.add("hidden");
  }
});
