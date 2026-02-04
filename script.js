// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Temporary object (THIS WILL BE THE WOLF LATER)
const geometry = new THREE.IcosahedronGeometry(1.5, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x888888,
  metalness: 0.6,
  roughness: 0.3
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// Animate
function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.003;
  mesh.rotation.x += 0.001;

  renderer.render(scene, camera);
}

animate();

// Resize support
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
