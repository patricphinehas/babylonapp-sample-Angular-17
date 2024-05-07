import { Component, ElementRef, Input, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { Scene,Camera, Engine, FreeCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from 'babylonjs';

@Component({
  selector: 'app-three-d',
  standalone: true,
  imports: [],
  templateUrl: './three-d.component.html',
  styleUrl: './three-d.component.scss'
})
export class ThreeDComponent implements OnInit{

  @ViewChild('canvasApp3Dholder', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;
  @Output() engine!: Engine;
  @Output() scene!: Scene;
  @Output() camera!: FreeCamera;

  constructor(){}

  ngOnInit(): void {
    
    this.engine = new Engine(this.canvas.nativeElement, true);
    this.scene = new Scene(this.engine);

    // creating camera
    this.camera = this.createCamera(this.scene);

    // allow mouse deplacement
    this.camera.attachControl(this.canvas.nativeElement, true);

    // creating minimal scean
    this.createScene(this.scene, this.canvas.nativeElement);

    // running babylonJS
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createCamera(scene: Scene) {
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

    camera.setTarget(Vector3.Zero());

    return camera;
  }

  createScene(scene: Scene, canvas: HTMLCanvasElement) {
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    const sphere = Mesh.CreateSphere('sphere', 16, 2, scene);
    sphere.position.y = 1;

    Mesh.CreateGround('ground', 6, 6, 2, scene);
  }


}
