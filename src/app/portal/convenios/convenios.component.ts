import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Convenio } from 'src/app/models/Convenio';
import { ConveniosService } from 'src/app/services/convenio.service';
import { UploadService } from 'src/app/services/upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  API_URL = `${environment.apiUrl}`;
  list: Convenio [];

  message: string;

  constructor(private ref: ChangeDetectorRef, public conveniosServices: ConveniosService, private uploadService: UploadService) {  }

  ngOnInit() {
    const sb = this.conveniosServices.obtenerConvenios().subscribe(res => {
      this.list = res;
    });
    this.subscriptions.push(sb);
    this.ref.detectChanges();
  }

  
  download(url, original): void {
    this.uploadService.download(url).subscribe((x) => {
        var newBlob = new Blob([x], { type: "application/pdf" });
        const data = window.URL.createObjectURL(newBlob);
        
        var link = document.createElement('a');
        link.href = data;
        link.download = original;
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        
        setTimeout(function () {
            window.URL.revokeObjectURL(data);
            link.remove();
        }, 100);
    });
  }

  toArrayDocumentos(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  toArrayEnlaces(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

}
