<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

  /** @type {string} */
  let glbSrc = "/3d/booper-trophy.glb";

  /** @type {HTMLDivElement} */
  let container;

  let dim = 200
  onMount(() => {
    /** @type {THREE.Scene} */
    const scene = new THREE.Scene();

    /** @type {*} */
    const camera = new THREE.PerspectiveCamera(75, dim / dim, 0.1, 1000);

    /** @type {THREE.WebGLRenderer} */
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(dim, dim);
    renderer.setClearColor(0xffffff, 1);  // Set renderer clear color to white
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    /** @type {OrbitControls} */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true
    controls.enableDamping = true;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    /** @type {*}*/
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    /** @type {GLTFLoader} */
    const loader = new GLTFLoader();

    loader.load(
      glbSrc, 
      /** @param {*} gltf */
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Center the camera on the loaded model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) + 20;

        camera.position.set(center.x, center.y + 10, center.z + cameraZ);
        controls.target.set(center.x, center.y, center.z);

        camera.updateProjectionMatrix();
        controls.update();
      },
      /** @param {ProgressEvent} progress */
      (progress) => {
        console.log((progress.loaded / progress.total * 100) + '% loaded');
      },
      /** @param {Error} error */
      (error) => {
        console.error('An error happened', error);
      }
    );

    /** @type {() => void} */
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // const handleResize = () => {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    // };

    // window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup function
    //   window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="threejs-container"></div>

<style>
  .threejs-container {
    width: 200px;
    height: 200px;
  }
</style>