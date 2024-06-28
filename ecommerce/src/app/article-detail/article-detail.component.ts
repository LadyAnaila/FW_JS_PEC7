import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;
  articles: Article[] = [
    {
      id: 1,
      name: 'Article 1',
      description: 'Description for Article 1',
      imageUrl: 'https://via.placeholder.com/150',
      price: 100,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 2,
      name: 'Article 2',
      description: 'Description for Article 2',
      imageUrl: 'https://via.placeholder.com/150',
      price: 150,
      isOnSale: false,
      quantityInCart: 0
    },
    // más artículos...
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.article = this.articles.find(article => article.id === Number(id));
    }
}
  incrementInCart() {
    if (this.article) {
      this.article.quantityInCart++;
    }
  }

  decrementInCart() {
    if (this.article && this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
