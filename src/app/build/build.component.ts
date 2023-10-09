import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { DirectionalLight, AnimationMixer } from 'three'; 

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;


  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader: GLTFLoader;
  private mixer!: AnimationMixer; 
  private clock: THREE.Clock;

  private model!: THREE.Object3D; 

  constructor() {
    this.loader = new GLTFLoader();
    this.clock = new THREE.Clock();
  }

  ngOnInit(): void {
    this.initScene();
    this.loadGlbModel();
    this.animate();
  }

  ngAfterViewInit(): void {
    // Code for ngAfterViewInit goes here
  }

  private initScene(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 16;
    this.camera.position.x = -3;
    this.camera.position.y = 13;

    const pitchAngle = -Math.PI / 10;
    this.camera.rotation.set(pitchAngle, -0.5, 0);

    const canvasWidth = 1500;
    const canvasHeight = 1500;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement });
    this.renderer.setSize(canvasWidth, canvasHeight);

    this.renderer.setClearColor(0x000000, 0);

    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 5, 3);
    this.scene.add(directionalLight);
  }

  private loadGlbModel(): void {
    this.loader.load('/assets/infochart/scene.gltf', (gltf: GLTF) => {
      const model = gltf.scene;
      this.model = model; 

      model.position.set(-5.7, 4, 0);
      model.rotation.set(0, 0, 0);
      model.scale.set(18, 18, 18);

      this.scene.add(model);

      this.mixer = new AnimationMixer(model);

      gltf.animations.forEach((clip) => {
        const action = this.mixer.clipAction(clip);
        action.play();
      });
    });
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
    }

    if (this.model) {
      this.model.rotation.y += 0.001; 
      this.model.position.y = 9 + Math.sin(this.clock.elapsedTime) * 0.2; 
    }

    this.renderer.render(this.scene, this.camera);
  }
}
