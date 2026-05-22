import * as THREE from "three";

let camera: THREE.PerspectiveCamera|undefined;
let scene: THREE.Scene|undefined;
let renderer: THREE.WebGLRenderer|undefined;

export function setup(canvas: HTMLCanvasElement) {
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    scene = new THREE.Scene();

    window.addEventListener("resize", () => {
        if (!renderer || !camera) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.bias = -0.01;
    scene.add(directionalLight);

    const render = () => {
        requestAnimationFrame(render);
        if (renderer && scene && camera) {
            renderer.render(scene, camera);
        }
    }
    render();
}

export function getCamera() {
    return camera;
}

export function getScene() {
    return scene;
}

export function getRenderer() {
    return renderer;
}

export function getCanvas() {
    return renderer?.domElement;
}
