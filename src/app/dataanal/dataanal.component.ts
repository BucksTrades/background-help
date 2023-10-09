import { Component, HostListener, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { DirectionalLight, AnimationMixer } from 'three'; 

@Component({
  selector: 'app-dataanal',
  templateUrl: './dataanal.component.html',
  styleUrls: ['./dataanal.component.css']
})
export class DataanalComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;


  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader: GLTFLoader;
  private mixer!: AnimationMixer; 
  private clock: THREE.Clock;

  private model!: THREE.Object3D; 
  private secondModel!: THREE.Object3D; 

  constructor() {
    this.loader = new GLTFLoader();
    this.clock = new THREE.Clock();
  }

  ngAfterViewInit(): void {
    // This method will be called after the view has been initialized
    // You can add any additional setup or actions here
  }

  ngOnInit(): void {
    this.initScene();
    this.loadGlbModel();
    this.animate();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 16;
    this.camera.position.x = -4;
    this.camera.position.y = 11;

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
    this.loader.load('/assets/desk/scene.gltf', (gltf: GLTF) => {
      const model = gltf.scene;
      this.model = model; 

      model.position.set(-7.5, 15, 0);
      model.rotation.set(0, 0, 0);
      model.scale.set(2, 2, 2);

      this.scene.add(model);

      this.mixer = new AnimationMixer(model);

      gltf.animations.forEach((clip) => {
        const action = this.mixer.clipAction(clip);
        action.play();
      });
    });

    this.loader.load('/assets/bored/scene.gltf', (gltf: GLTF) => {
      const secondModel = gltf.scene;
      this.secondModel = secondModel; 

      secondModel.position.set(-7.5, 9, 0);
      secondModel.rotation.set(0, Math.PI, 0);
      secondModel.scale.set(3, 4, 3);

      this.scene.add(secondModel);
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

    if (this.secondModel) {
      this.secondModel.rotation.y += 0.001; 
      this.secondModel.position.y = 9 + Math.sin(this.clock.elapsedTime) * 0.2; 
    }

    this.renderer.render(this.scene, this.camera);
  }
}
