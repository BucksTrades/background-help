import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { DirectionalLight } from 'three'; // Import DirectionalLight


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
  private characterModel!: THREE.Object3D;
  private cursorPosition: THREE.Vector2 = new THREE.Vector2();

  constructor(private renderer2: Renderer2) {
    this.clock = new THREE.Clock();
  }

  ngOnInit(): void {
    // Create the scene
    this.scene = new THREE.Scene();

    // Create the camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(1, 3, 9);

    // Create the GLTFLoader instance
    const loader = new GLTFLoader();

    // Load the GLB model
    loader.load('/assets/robot_playground-glb.glb', (gltf: GLTF) => {
      const model = gltf.scene;
      this.characterModel = model;

      // Position, rotate, or scale the model as needed
      model.position.set(0, 1, -0.2);
      model.rotation.set(0.5, 0, 0);
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

    // Add a directional light
    const directionalLight = new DirectionalLight(0xffffff, 1); // Color: white, Intensity: 1
    directionalLight.position.set(1, 2, 3); // Set the light's position
    this.scene.add(directionalLight);

    // Set the size of the canvas
    const width = 900; // Set your desired width here
    const height = 900; // Set your desired height here
    this.renderer.setSize(width, height);

    // Separate the animation update from the rendering loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update animations
      const delta = this.clock.getDelta(); // Use a clock to measure time since the last frame
      if (this.mixer) {
        this.mixer.update(delta); // Update the mixer to progress the animations
      }

      // Rotate the character to look at the cursor
      if (this.characterModel && this.cursorPosition) {
        const characterPosition = new THREE.Vector2(this.characterModel.position.x, this.characterModel.position.z);
        const angle = Math.atan2(this.cursorPosition.y - characterPosition.y, this.cursorPosition.x - characterPosition.x);
        this.characterModel.rotation.y = angle + Math.PI / 2;
      }

      // Render the scene with the camera
      this.renderer.render(this.scene, this.camera);
    };

    // Add event listener for cursor movement
    document.addEventListener('mousemove', (event) => {
      const rect = this.canvasRef.nativeElement.getBoundingClientRect();
      this.cursorPosition.x = ((event.clientX - rect.left) / rect.width) * 5 - 1;
      this.cursorPosition.y = -((event.clientY - rect.top) / rect.height) * 5 + 1;
    });

    animate();
  }
}
