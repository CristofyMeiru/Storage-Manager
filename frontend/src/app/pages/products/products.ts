import { TitleCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ZardButtonGroupComponent, ZardButtonGroupDividerComponent } from '@shared/components/button-group/button-group.component';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { ZardCheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { ZardDividerComponent } from '@shared/components/divider/divider.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { ZardInputDirective } from '@shared/components/input/input.directive';
import {
  ZardTableBodyComponent,
  ZardTableCellComponent,
  ZardTableHeadComponent,
  ZardTableHeaderComponent,
  ZardTableRowComponent,
} from '@shared/components/table/table.component';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { ThemeService } from 'src/app/core/services/theme.service';
import { NavigationService } from '../../core/services/navigation.service';
import { ProductsService } from './products.service';

export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  brand: string;
  createdAt: string;
  updatedAt: string;
}

const ELEMENT_DATA: Product[] = [];

@Component({
  selector: 'page-products',
  imports: [
    ZardButtonComponent,
    ZardIconComponent,
    ZardCardComponent,
    ZardDividerComponent,
    ZardTableHeaderComponent,
    ZardTableRowComponent,
    TitleCasePipe,
    ZardTableBodyComponent,
    ZardTableCellComponent,
    ZardInputDirective,
    ZardTableHeadComponent,
    ZardButtonGroupComponent,
    ZardCheckboxComponent,
    ZardCheckboxComponent,
    ZardButtonGroupDividerComponent
],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsPage {
  public readonly themeService = inject(ThemeService);
  private readonly productsService = inject(ProductsService);
  private readonly queryClient = inject(QueryClient);
  public readonly navigationService = inject(NavigationService);

  public selectedItems = signal<Set<string>>(new Set());

  productsQuery = injectQuery(() => ({
    queryKey: ['products'],
    queryFn: async () => await this.productsService.getProducts(),
  }));

  public displayedColumns: (keyof Product)[] = ['name', 'price', 'stock', 'category', 'brand'];
  dataSource = ELEMENT_DATA;

  toggle(id: string) {
    this.selectedItems.update((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  isSelected(id: string) {
    return this.selectedItems().has(id);
  }

  allSelected() {
    return this.productsQuery.data()?.every((p) => this.selectedItems().has(p.id)) as boolean;
  }

  toggleAll(checked: boolean) {
    this.selectedItems.set(
      checked ? new Set(this.productsQuery.data()?.map((p) => p.id) ?? []) : new Set()
    );
  }
}
