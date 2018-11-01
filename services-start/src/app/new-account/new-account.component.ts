import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, 
              private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    );   
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // this.loggingService .logStatusChange(accountStatus);
    this.accountsService.statusUpdated.emit(status);
  }
}
