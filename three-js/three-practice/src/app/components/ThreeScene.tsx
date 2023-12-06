"use client"
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




const ThreeScene = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGL1Renderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);

        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        

        const loader = new GLTFLoader();

        loader.load( '/model/untitled.gltf', function ( gltf ) {

            scene.add( gltf.scene );

        }, undefined, function ( error ) {

            console.error( error );

        } ); 

        // const fbxLoader = new FBXLoader()
        // fbxLoader.load(
        //     '/model/bee.fbx',
        //     (object) => {
        //         // object.traverse(function (child) {
        //         //     if ((child as THREE.Mesh).isMesh) {
        //         //         // (child as THREE.Mesh).material = material
        //         //         if ((child as THREE.Mesh).material) {
        //         //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
        //         //         }
        //         //     }
        //         // })
        //         // object.scale.set(.01, .01, .01)
        //         scene.add(object)
        //     },
        //     (xhr) => {
        //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        //     },
        //     (error) => {
        //         console.log(error)
        //     }
        // )

        camera.position.z = 5;
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();


    }, [])

    return <div ref={containerRef} />;
}

export default ThreeScene