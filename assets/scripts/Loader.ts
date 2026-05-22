import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const loader = new GLTFLoader();

export async function fetchAsset(url: string): Promise<THREE.Object3D> {
    return new Promise((resolve, reject) => {
        loader.load(
            url,
            (gltf) => {
                const object = gltf.scene;
                object.traverse((child) => {
                    if ((child as any).isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                resolve(object);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
                console.error("An error happened", error);
                reject(error);
            }
        );
    });
}
