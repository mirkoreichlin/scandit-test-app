import { Component } from '@angular/core';
import { ScanSettings, Barcode, CameraSettings, ScanResult } from 'scandit-sdk-angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html'
})
export class ScannerComponent {
  public scanSettings = new ScanSettings({
    enabledSymbologies: [Barcode.Symbology.CODE128],
    maxNumberOfCodesPerFrame: 1,
    searchArea: {x: 0.2, y: 0.4, width: 0.6, height: 0.2}
  });
  public cameraSettings: CameraSettings = {resolutionPreference: CameraSettings.ResolutionPreference.ULTRA_HD};

  public onScan(scanResult: ScanResult) {
    alert(scanResult.barcodes[0].data);
  }
}
