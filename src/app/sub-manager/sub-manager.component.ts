import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// export interface Employee {
//   name: string;
// }

// export interface SubManager {
//   name: string;
//   children: Employee[];
// }


@Component({
  selector: 'app-sub-manager',
  templateUrl: './sub-manager.component.html',
  styleUrl: './sub-manager.component.scss'
})
export class SubManagerComponent {

  // @Input() items: string[] = [];
  // @Output() itemsChanged = new EventEmitter<string[]>();

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  //   this.itemsChanged.emit(this.items);
  // }
  @Input() items: string[] = [];
  @Input() tableName: string = '';
  @Output() itemsChanged = new EventEmitter<{ table1: string[], table2: string[] }>();

  drop(event: CdkDragDrop<string[]>) {
    const previousContainerData = event.previousContainer.data;
    const currentContainerData = event.container.data;

    if (event.previousContainer === event.container) {
      moveItemInArray(currentContainerData, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        previousContainerData,
        currentContainerData,
        event.previousIndex,
        event.currentIndex
      );
    }

    // Emit updated items to parent component
    this.itemsChanged.emit({
      table1: this.tableName === 'Table 1' ? this.items : [],
      table2: this.tableName === 'Table 2' ? this.items : []
    });
  }
}
