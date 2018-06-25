import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NgAdvancedDropdownComponent } from './ng-advanced-dropdown/ng-advanced-dropdown.component';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	
	protected dataService: CompleterData;
	@ViewChildren(NgAdvancedDropdownComponent) selectors: QueryList<NgAdvancedDropdownComponent>;
	public text: string;

	public list = [
		{
			name: "Arthur",
			value: "branco e preto"
		},
		{
			name: "Trillian",
			value: "preto"
		}
	];

	constructor(
		private completerService: CompleterService
	) {
		this.dataService = completerService.local(this.list, 'name', 'name');
	}
	public onSelect(item: any) {
		console.log(item);
	}
	public onItemCreate(item: any) {
		console.log(item);
		this.list.push({
			name: item,
			value: null
		});
	}
}
