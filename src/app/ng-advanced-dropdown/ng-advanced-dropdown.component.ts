import { Component, OnInit, EventEmitter, Input, Output, OnChanges, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'ng-advanced-dropdown',
	templateUrl: './ng-advanced-dropdown.component.html',
	styleUrls: ['./ng-advanced-dropdown.component.scss']
})
export class NgAdvancedDropdownComponent implements OnInit, OnChanges, OnDestroy {
	
	@Input() faIcon: string;
	@Input() list: any[];
	@Input() label: string;
	@Input() selected: any;

	@Output() select: EventEmitter<any> = new EventEmitter();
	@Output() newItem: EventEmitter<string> = new EventEmitter();
	
	public opened: boolean = false;
	public currentItem: any;

	public onType$: Subject<string> = new Subject();
	public typed: string;
	public typed$: Subscription;
	
	constructor() { }
	
	ngOnInit() {
		if (!this.selected) {
			this.currentItem = this.list[0];
		}
		this.onType$
			// .debounceTime(500)
			.subscribe(
				textValue => {
					console.log(textValue);
					this.typed = textValue;
				}
			);
	}

	ngOnDestroy(): void {
		this.onType$.unsubscribe();
	}

	ngOnChanges(changes) {
		console.log(changes);
	}
	
	public toggleDropdown(): void {
		this.opened = !this.opened;
	}
	public createItem(newItem: string): void {
		this.newItem.emit(newItem);
		this.selectItem(newItem);
	}
	public selectItem(item: any): void {
		this.currentItem = item;
		this.select.emit(item);
	}
	public renderLabel(item: any): string {
		return item[this.label];
	}
	public onType(event) {
		this.onType$.next(event.target.value);
	}
	public resetTyped(): void {
		this.onType$.next('');
	}
}
