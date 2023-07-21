import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private mixer!: THREE.AnimationMixer;
  private clock: THREE.Clock;

  constructor(private renderer2: Renderer2) {
    this.clock = new THREE.Clock();
  }

  ngOnInit(): void {
    // Create the scene
    this.scene = new THREE.Scene();

    // Create the camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 3, 9);

    // Create the GLTFLoader instance
    const loader = new GLTFLoader();

    // Load the GLB model
    loader.load('/assets/robot_playground-glb.glb', (gltf: GLTF) => {
      console.log(gltf.animations);
      const model = gltf.scene;

      // Position, rotate, or scale the model as needed
      model.position.set(-2.5, -3, -.2);
      model.rotation.set(0, 0, 0);
      model.scale.set(3, 3, 3); // Increase the scale as needed

      // Add the model to the scene
      this.scene.add(model);

      // Create an AnimationMixer for the GLTF object
      this.mixer = new THREE.AnimationMixer(model);

      // Set up AnimationActions for each animation in the mixer
      gltf.animations.forEach((clip) => {
        const action = this.mixer.clipAction(clip);
        action.play(); // Start playing the animation
      });
    });
  }

  ngAfterViewInit(): void {
    // Create the renderer with alpha set to true
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });

    // Set clearColor to control background transparency
    this.renderer.setClearColor(0x000000, 0); // 0 means fully transparent, 1 means fully opaque

    // Set the size of the canvas
    const width = 900; // Set your desired width here
    const height = 900; // Set your desired height here
    this.renderer.setSize(width, height);

    // Create OrbitControls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Set the target to the center of the scene (optional)
    controls.target.set(0, 0, 0);

    // Enable damping (smooth camera movements)
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Set the maximum distance the camera can zoom out (optional)
    controls.minDistance = 1;
    controls.maxDistance = 10;

    controls.enableZoom = false;

    // Separate the animation update from the rendering loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update animations
      const delta = this.clock.getDelta(); // Use a clock to measure time since the last frame
      if (this.mixer) {
        this.mixer.update(delta); // Update the mixer to progress the animations
      }

      // Render the scene with the camera
      this.renderer.render(this.scene, this.camera);
    };
    
    animate();
  }
}
