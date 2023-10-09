import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { DirectionalLight, AnimationMixer } from 'three'; // Import DirectionalLight

@Component({
  selector: 'app-robothello',
  template: '<canvas #roboCanvas></canvas>',
  styleUrls: ['./robothello.component.css']
})
export class RobothelloComponent implements OnInit {
  @ViewChild('roboCanvas', { static: true }) roboCanvas!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader: GLTFLoader;
  private mixer!: AnimationMixer; // Declare the AnimationMixer
  private clock: THREE.Clock;

  constructor() {
    this.loader = new GLTFLoader();
    this.clock = new THREE.Clock();
  }

  ngOnInit(): void {
    this.initScene();
    this.loadGlbModel();
    this.animate();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;
    this.camera.position.x = 0;
    this.camera.position.y = 3;

    const canvasWidth = 900;
    const canvasHeight = 900;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.roboCanvas.nativeElement });
    this.renderer.setSize(canvasWidth, canvasHeight);

    this.renderer.setClearColor(0x000000, 0);

    // Add a directional light
    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 2, 3);
    this.scene.add(directionalLight);
  }

  private loadGlbModel(): void {
    this.loader.load('/assets/healbot/scene.gltf', (gltf: GLTF) => {
      const model = gltf.scene;

      // Adjust position, rotation, and scale of the model as needed
      model.position.set(0, -2.5, 0);
      model.rotation.set(0, 0, 0);
      model.scale.set(12, 12, 12);

      this.scene.add(model);

      // Create an AnimationMixer for the GLTF object
      this.mixer = new AnimationMixer(model);

      // Set up AnimationActions for each animation in the mixer
      gltf.animations.forEach((clip) => {
        const action = this.mixer.clipAction(clip);
        action.play(); // Start playing the animation
      });
    });
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    // Update the animation mixer
    const delta = this.clock.getDelta(); // Use a clock to measure time since the last frame
    if (this.mixer) {
      this.mixer.update(delta); // Update the mixer to progress the animations
    }

    // Render the scene with the camera
    this.renderer.render(this.scene, this.camera);
  }
}