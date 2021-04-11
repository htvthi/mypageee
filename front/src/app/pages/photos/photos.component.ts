import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../shared/backend.service";
import { Data } from '../../shared/data';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  pix: Data[];
  pic: Data;
  selectedId: number;
  error: HttpErrorResponse;

  constructor(private cs: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId)
    }

  }
  trackByData(index: number, data: Data): number { return data.id; }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => this.pix = response,
      error => console.log(error)
    );
  }
  readOne(id: number): void {
    this.cs.getDataById(id).subscribe(
      (response: Data) => this.pic = response,
      error =>this.error = error,

    )
  }

  update(data: Data): void {
    this.pic = data;
    this.cs.update(this.pic.id, this.pic);
  }

  deleteOne(id: number): void {
    this.cs.deleteOne(id);
    window.location.reload();
  }

  update1(): void {

  }

  delete(): void {

  }
}
