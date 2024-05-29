import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  categories: string[] = [];
  halfCategories1: string[] = [];
  halfCategories2: string[] = [];
  filteredProducts1: any[] = [];
  filteredProducts2: any[] = [];
  productsByCategory: { [key: string]: any[] } = {};
  lists: any[] = [];
  isModalOpen: boolean = false;
  selectedProduct: any = null;
  selectedList: string = '';
  selectedCategory1: string = '';
  selectedCategory2: string = '';

  constructor(
    private http: HttpClient,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.loadLists();
    this.loadProducts();
  }

  async loadLists() {
    try {
      this.lists = await this.listService.getLists();
      console.log('Lists loaded:', this.lists); // Debugging line to check if lists are loaded
    } catch (error) {
      console.error('Error loading lists:', error);
    }
  }

  loadProducts() {
    this.http.get<any[]>('assets/produtos.json').subscribe((data: any[]) => {
      this.categories = [...new Set(data.map(item => item.categoria))];
      this.halfCategories1 = this.categories.slice(0, Math.ceil(this.categories.length / 2));
      this.halfCategories2 = this.categories.slice(Math.ceil(this.categories.length / 2));
      this.categories.forEach(category => {
        this.productsByCategory[category] = data
          .filter(product => product.categoria === category)
          .slice(0, 3); // Get 3 products per category
      });

      if (this.halfCategories1.length > 0) {
        this.selectedCategory1 = this.halfCategories1[0];
        this.filteredProducts1 = this.productsByCategory[this.selectedCategory1];
      }

      if (this.halfCategories2.length > 0) {
        this.selectedCategory2 = this.halfCategories2[0];
        this.filteredProducts2 = this.productsByCategory[this.selectedCategory2];
      }
    });
  }

  categoryChanged1(event: any) {
    this.filteredProducts1 = this.productsByCategory[this.selectedCategory1] || [];
  }

  categoryChanged2(event: any) {
    this.filteredProducts2 = this.productsByCategory[this.selectedCategory2] || [];
  }

  async showProductDetails(product: any) {
    this.selectedProduct = { ...product, quantity: 1 }; // Default quantity to 1
    await this.loadLists(); // Ensure lists are loaded before showing modal
    this.isModalOpen = true;
  }

  async addProductToList() {
    if (this.selectedList && this.selectedProduct) {
      await this.listService.addItemToList(this.selectedList, {
        name: this.selectedProduct.name,
        preco: this.selectedProduct.preco,
        quantity: this.selectedProduct.quantity,
      });
      this.isModalOpen = false;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  incrementQuantity() {
    if (this.selectedProduct) {
      this.selectedProduct.quantity++;
    }
  }
  
  decrementQuantity() {
    if (this.selectedProduct && this.selectedProduct.quantity > 1) {
      this.selectedProduct.quantity--;
    }
  }
}