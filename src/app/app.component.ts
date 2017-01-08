import { Component } from '@angular/core';
import { IntegrationService } from './services/integration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  renderer: Electron.IpcRenderer;
  main: Electron.BrowserWindow;
  messageFromElectron: string;

  constructor(private integrationService: IntegrationService) {
    let electron = integrationService.getElectron();
    this.renderer = electron.ipcRenderer;
    this.main = electron.remote.getCurrentWindow();
    this.renderer.on('sendHiToAngular', () => {
      this.messageFromElectron = 'Electron says hi to Angular';
    })
  }

  clickButton() {
    this.main.emit('sendHelloToElectron');
  }
}
