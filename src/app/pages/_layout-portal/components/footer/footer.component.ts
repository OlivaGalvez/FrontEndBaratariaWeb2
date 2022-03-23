import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LayoutService } from '../../../../_metronic_portal/core';
import KTLayoutFooter from '../../../../../assets/js/layout/base/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  footerContainerCSSClasses: string;
  currentDateStr: string = "2022";

  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.footerContainerCSSClasses = this.layout.getStringCSSClasses(
      'footer_container'
    );
  }

  ngAfterViewInit() {
    // Init Footer
    KTLayoutFooter.init('kt_footer');
  }
}
