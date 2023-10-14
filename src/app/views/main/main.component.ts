import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modal')
  private modal!: TemplateRef<ElementRef>;
  // private modal!: ElementRef;

  private observable: Observable<TemplateRef<ElementRef>>;
  private subscription: Subscription | null = null;
  public isShown: boolean = false;

  constructor(private modalService: NgbModal) {
    this.observable = new Observable((observer) => {
      const timeout = setTimeout(() => {
        observer.next(this.modal);
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    });
  }

  // close() {
  //   this.modal.nativeElement.style.display = 'none';
  // }


  // ngOnInit() {
  //   this.subscription = this.observable.subscribe((param) => {
  //    param.nativeElement.style.display = 'block';
  //   })
  // }

  ngOnInit() {
    console.log(environment.production);
  }

  ngAfterViewInit() {
    this.subscription = this.observable.subscribe((param) => {
      this.modalService.open(param, {});
    })
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
