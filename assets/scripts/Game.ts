import * as Renderer from './Renderer';
import * as Loader from './Loader';

export function setup() {
    const scene = Renderer.getScene();
    Loader.fetchAsset('models/grass.glb').then((object) => {
        if (!scene) return;

        for (let i = -20; i < 20; i++) {
            for (let j = -20; j < 20; j++) {
                const clone = object.clone();
                const rand = Math.random() * 0.5 + 0.5;
                clone.position.set(i, rand, j);
                scene.add(clone);
            }
        }
        scene.add(object);
    });

    const camera = Renderer.getCamera();
    if (camera) {
        camera.position.set(4, 4, 10);
        camera.lookAt(0, 0, 0);
    }

    let angle = 0;
    const loop = () => {
        requestAnimationFrame(loop);
        angle += 0.01;
        const camera = Renderer.getCamera();
        if (camera) {
            camera.position.x = 12 * Math.cos(angle);
            camera.position.z = 12 * Math.sin(angle);
            camera.lookAt(0, 0, 0);
        }
    }
    loop();
}