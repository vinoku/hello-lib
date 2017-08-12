import {
  Component,
  OnInit
} from '@angular/core';
import { LibService } from '../lib/lib.service';

@Component({
  selector: 'my-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  meaning: number;

  constructor(private libService: LibService) {
  }

  ngOnInit(): void {
    this.meaning = this.libService.getMeaning();
  }
}
