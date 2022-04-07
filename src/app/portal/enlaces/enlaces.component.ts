import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Enlace } from 'src/app/models/Enlace';
import { EnlaceService } from 'src/app/services/enlace.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.scss']
})
export class EnlacesComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  API_URL = `${environment.apiUrl}`;
  list: Enlace [];

  message: string;

  constructor(private ref: ChangeDetectorRef, public enlaceServices: EnlaceService){}

  ngOnInit(): void {
    const sb = this.enlaceServices.obtenerEnlaces().subscribe(res => {
      this.list = res;
    });
    this.subscriptions.push(sb);
    this.ref.detectChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

}
