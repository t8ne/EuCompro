import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  searchTerm: string = '';
  recentSearches: string[] = [];
  searchResults: any[] = [];
  selectedProduct: any = null;
  showGrid: boolean = false;

  randomStore1: string = '';
  randomStore2: string = '';
  discountedPrice: number = 0;
  priceDifference: number = 0;

  supermarkets: string[] = ['Pingo Doce', 'Continente', 'Aldi', 'Lidl', 'Jumbo'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadLists();
  }

  async loadLists() {
    try {
      // Load your lists if necessary
    } catch (error) {
      console.error('Error loading lists:', error);
    }
  }

  filterItems(event: any) {
    const searchTerm = this.normalizeString(event.target.value.toLowerCase());

    if (searchTerm && searchTerm.trim() !== '') {
      this.http.get<any[]>('assets/produtos.json').subscribe((data: any[]) => {
        const normalizedData = data.map(item => ({
          ...item,
          normalizedName: this.normalizeString(item.name.toLowerCase())
        }));

        let startsWith = normalizedData.filter((item: any) =>
          item.normalizedName.startsWith(searchTerm)
        );

        let contains = normalizedData.filter((item: any) =>
          item.normalizedName.includes(searchTerm) &&
          !item.normalizedName.startsWith(searchTerm)
        );

        this.searchResults = startsWith.concat(contains).slice(0, 5);
      });

      this.selectedProduct = null;
      this.showGrid = false;
    } else {
      this.searchResults = [];
      this.showGrid = false;
    }
  }

  normalizeString(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  selectItem(item: any) {
    this.searchTerm = item.name;
    this.searchResults = [];
    this.showGrid = false;
    this.selectedProduct = item;
    this.randomStore1 = this.getRandomStore();
    this.randomStore2 = this.getRandomStore(this.randomStore1);
    this.calculateDiscountedPrice();
  }

  getRandomStore(excludeStore: string = ''): string {
    const filteredStores = this.supermarkets.filter(store => store !== excludeStore);
    return filteredStores[Math.floor(Math.random() * filteredStores.length)];
  }

  calculateDiscountedPrice() {
    this.discountedPrice = parseFloat((this.selectedProduct.preco * 0.8).toFixed(2));
    this.priceDifference = parseFloat((this.selectedProduct.preco - this.discountedPrice).toFixed(2));
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchResults = [];
    this.selectedProduct = null;
    this.showGrid = false;
  }
}
