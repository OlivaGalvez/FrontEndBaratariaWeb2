import { ChangeDetectorRef, Component, OnDestroy, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Convenio } from 'src/app/models/Convenio';
import { ConveniosService } from 'src/app/services/convenio.service';
import { UploadService } from 'src/app/services/upload.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  PaginatorState,
} from 'src/app/_metronic_portal/shared/crud-table';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit, OnDestroy {
  paginator: PaginatorState;
  isLoading: boolean;
  private subscriptions: Subscription[] = [];

  API_URL = `${environment.apiUrl}`;

  message: string;
  @Output() paginate: EventEmitter<PaginatorState> = new EventEmitter();

  constructor(private ref: ChangeDetectorRef, public conveniosServices: ConveniosService, private uploadService: UploadService) {  }

  ngOnInit() {
    this.conveniosServices.fetch();
    const sb = this.conveniosServices.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);
    this.paginator = this.conveniosServices.paginator;
    this.conveniosServices.fetch();
  }

    // pagination
    paginate2(paginator: PaginatorState) {
      this.conveniosServices.patchState({ paginator });
      }
  
      
    pageChange(num: number) {
      this.paginator.page = num;
      this.paginate.emit(this.paginator);
      this.paginate2(this.paginator);
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
