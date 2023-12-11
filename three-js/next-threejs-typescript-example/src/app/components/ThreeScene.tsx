import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AnaglyphEffect } from 'three/addons/effects/AnaglyphEffect.js';
import { cos, sign, sin } from 'three/examples/jsm/nodes/Nodes.js';

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();

            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshPhysicalMaterial({ color: 0x00ff00,metalness: 0.9 });
            const loader = new GLTFLoader();

            const sphere = new THREE.SphereGeometry(0.5, 50, 50);
           

            const clock = new THREE.Clock();
            var light1 = new THREE.AmbientLight(new THREE.Color('white'), 10);
            scene.add(light1);
            // scene.add(camera);

            const light2 = new THREE.PointLight(0xffffff, 100);
            light2.add(new THREE.Mesh(sphere, new THREE.MeshPhysicalMaterial({clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                metalness: 0.9,
                roughness: 0.0,
                color: 0xffffff,
                ior:0,
                reflectivity:1,
                iridescence:1,
                iridescenceIOR:2
            // emissive: 0xffffff
        })));
            light2.position.set( 1, 1, -2 );
            const light3 = new THREE.PointLight(0xffffff, 100);
            light3.position.set(1, 1, -2);
            scene.add(light3);
            scene.add(light2);



            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('jsm/libs/draco/gltf/');


            loader.setDRACOLoader(dracoLoader)
            loader.load('model/itcamp19.gltf', function (gltf: any) {
                gltf.scene.scale.set(50, 50, 50);
                const root = gltf.scene;
                scene.add(root);
                const renderScene = () => {
                    
                    // const [state, setState] = useState(1)
                    // root.rotation.y += 0.01;
                    // switch (state) {
                    //     case 1:
                    //         root.rotation.y += 0.01 
                    //         root.rotation.y > 4 ? setState(2) : setState(1);

                    //     case 2:
                    //         root.rotation.y += 0.01 
                    //         root.rotation.y < -4 ? setState(1) : setState(2);
                      

                    //     default:
                           
                    // }
                    renderer.render(scene, camera);
                    requestAnimationFrame(renderScene);
                    console.log(root.rotation.y)

                };

                // Call the renderScene function to start the animation loop
                animate()
                renderScene();

            }, undefined, function (error: any) {

                console.error(error);

            });
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.target.set(0, 0.5, 0);
            controls.update();
            controls.enablePan = false;
            controls.enableDamping = true;
            controls.maxAzimuthAngle = 4
            controls.maxPolarAngle = 2
            controls.minAzimuthAngle = -4
            controls.minPolarAngle = -2
            controls.enableZoom = false


            let mouseX = 0;
            let mouseY = 0;

            let windowHalfX = window.innerWidth / 2;
            let windowHalfY = window.innerHeight / 2;

            const onDocumentMouseMove = (event: any) => {

                mouseX = (event.clientX - windowHalfX) / 100;
                mouseY = (event.clientY - windowHalfY) / 100;

                console.log(`x ${mouseX} y ${mouseY}`)
                if (mouseX < -2) {
                    mouseX = -2
                }
                if (mouseX > 2) {
                    mouseX = 2
                }
                if (mouseY < -2) {
                    mouseY = -2
                }
                if (mouseY > 2) {
                    mouseY = 2
                }

            }

            // const Rig =()=> {
            //     const { camera, mouse } = useThree()
            //     const vec = new THREE.Vector3()
            //     return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02))
            //   }
            // Rig()
            // new THREE.ImageLoader()
            //     .setPath('model/eiei/')
            //     .load('IMG_0525.png', function (texture: any) {

            //         const geometry = new THREE.PlaneGeometry(1, 1);
            //         const material = new THREE.MeshBasicMaterial({ map:texture});
            //         const plane = new THREE.Mesh(geometry, material);
            //         scene.add(plane);
            //     })
            // var img = new THREE.MeshBasicMaterial({ //CHANGED to MeshBasicMaterial
            //     map:THREE.ImageUtils.loadTexture('model/eiei/IMG_0525.png')
            // });
            // img.map.needsUpdate = true; //ADDED

            // // plane
            // var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200),img);
            // plane.overdraw = true;
            // scene.add(plane);



            renderer.setClearColor(0x000000, 1);
            // const cube = new THREE.Mesh(geometry, material);
            // scene.add(cube);

            // Render the scene and camera
            // renderer.render(scene, camera);
            // const animate =()=> {
            //     requestAnimationFrame( animate );
            //     renderer.render( scene, camera );
            // }
            // animate();

            const render = () => {

                const timer = 0.0001 * Date.now();

                camera.position.x += (mouseX - camera.position.x) * 0.01;
                camera.position.y += (-mouseY - camera.position.y) * 0.01;

                light2.position.set( (-mouseX - camera.position.x) * 0.05, (-mouseY - camera.position.y) * 0.05, 0 );

                if (camera.position.x < -2) {
                    camera.position.x = -2
                }
                if (camera.position.x > 2) {
                    camera.position.x = 2
                }
                if (camera.position.y < -1) {
                    camera.position.y = -1
                }
                if (camera.position.y > 1) {
                    camera.position.y = 1
                }

                camera.lookAt(scene.position);


                // for ( let i = 0, il = spheres.length; i < il; i ++ ) {

                // 	const sphere = spheres[ i ];

                // 	sphere.position.x = 5 * Math.cos( timer + i );
                // 	sphere.position.y = 5 * Math.sin( timer + i * 1.1 );

                // }

                renderer.render(scene, camera);

            }

            const animate = () => {

                requestAnimationFrame(animate);

                const delta = clock.getDelta();

                // mixer.update(  );

                controls.update(delta);

                // stats.update();

                renderer.render(scene, camera);
                render()

            }



            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            };

            window.addEventListener('resize', handleResize);
            document.addEventListener('mousemove', onDocumentMouseMove);

            // Clean up the event listener when the component is unmounted
            return () => {
                window.removeEventListener('resize', handleResize);
                document.removeEventListener('mousemove', onDocumentMouseMove);
            };
        }
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeScene;