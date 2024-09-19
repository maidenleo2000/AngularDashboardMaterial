import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-options-buttom-sheet',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
  ],
  templateUrl: './options-buttom-sheet.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsButtomSheetComponent {

  openLink(event: MouseEvent){
    console.log('openLink', event)
  }
 }
