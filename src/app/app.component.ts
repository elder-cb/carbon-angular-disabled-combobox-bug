import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComboBoxModule, GridModule, ListItem } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GridModule, FormsModule, ReactiveFormsModule, ComboBoxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Carbon angular: disabled combobox bug';
  formGroup: FormGroup
  listItems: ListItem[] = []

  constructor() {
    this.formGroup = new FormGroup({
      combobox: new FormControl()
    })
  }

  get comboboxControl(): FormControl {
    return this.formGroup.controls['combobox'] as FormControl
  }

  ngOnInit(): void {
    this.listItems = [
      { content: 'Item 1', selected: false },
      { content: 'Item 2', selected: false },
      { content: 'Item 3', selected: true },
      { content: 'Item 4', selected: false },
      { content: 'Item 5', selected: false }
    ]
    this.comboboxControl.setValue('Item 3')
    this.comboboxControl.disable()
  }
}
