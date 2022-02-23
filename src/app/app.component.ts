import { Component } from '@angular/core';
import { AlertService } from './alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alert-Service-Angular';

  options = {
    autoClose: true,
    keepAfterRouteChange: false,
  };
  constructor(

    private alertService: AlertService
  ) { }

  public Success(): void {
    this.alertService.success('Success');
  }

  public Error(): void {
    this.alertService.error('Error');
  }

  public Info(): void {
    this.alertService.info('Info');
  }

  public Warn(): void {
    this.alertService.warn('Warn');
  }

  public Danger(): void {
    this.alertService.danger('Danger');
  }

  public AutoSuccess(): void {
    this.alertService.success('AutoSuccess', this.options);
  }

  public AutoError(): void {
    this.alertService.error('AutoError', this.options);
  }

  public AutoInfo(): void {
    this.alertService.info('AutoInfo', this.options);
  }

  public AutoWarn(): void {
    this.alertService.warn('AutoWarn', this.options);
  }

  public AutoDanger(): void {
    this.alertService.danger('AutoDanger', this.options);
  }
}