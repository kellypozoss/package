import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit
} from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { HorizontalMenuMedico } from 'src/app/shared/menu-items/horizontal-menu-medico';

@Component({
  selector: 'app-horizontal-medico',
  templateUrl: './horizontal-medico.component.html',
  styleUrls: []
})
export class HorizontalMedicoComponent implements OnDestroy {
  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line - Disables all
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: HorizontalMenuMedico
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line - Disables all
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line - Disables all
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



}
