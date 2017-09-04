import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { QueryOptions } from './models/query-options';
import * as _ from "lodash";

@Component({
    selector: 'cmp-table',
    templateUrl: 'templates/cmp-table.html'
})
export class TableComponent implements OnInit {
    @Input() items: any[];
    @Input() tableFields: any[];
    @Input() collectionSize: number;
    @Input() currentPage: number;
    @Input() queryOptions: QueryOptions;
    @Input() loading: boolean;
    @Output() actionRequest = new EventEmitter();
    selectedIds: string[] = [];

    constructor(public router: Router) {
    }

    ngOnInit(): void {
        this.queryOptions.sortBy = this.tableFields[0].name;
    }

    selectSortBy(fieldName: string): void {
        if (this.queryOptions.sortBy == fieldName) {
            this.queryOptions.sortDir = this.queryOptions.sortDir == 'asc' ? 'desc' : 'asc';
        } else {
            this.queryOptions.sortBy = fieldName;
        }
        this.actionRequest.emit(['changeQuery', this.queryOptions]);
    }

    selectAll(event): void {
        this.selectedIds = [];
        if (event.target.checked) {
            for (let item of this.items) {
                this.selectedIds.push(item.id);
            }
        }
    }

    setSelected(event, itemId: string): void {
        const index = this.selectedIds.indexOf(itemId);
        if (event.target.checked) {
            if (index == -1) {
                this.selectedIds.push(itemId);
            }
        } else if (index > -1) {
            this.selectedIds.splice(index, 1);
        }
    }

    pageChange(): void{
        this.actionRequest.emit(['changeQuery', this.queryOptions]);
    }

    action(actionName: string, actionValue ?: number): void {
        this.actionRequest.emit([actionName, actionValue]);
    }

    getIsSelected(itemId: string): boolean {
        return this.selectedIds.lastIndexOf(itemId) > -1;
    }

}