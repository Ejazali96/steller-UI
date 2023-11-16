import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Directive({
  selector: '[appMetaTags]'
})
export class MetaTagsDirective implements OnInit, OnDestroy {

  @Input() description: string;
  @Input() ogTitle: string;
  @Input() keywords: string;

  constructor(private meta: Meta) { }

  ngOnInit() {
    debugger
    this.addMetaTags();
  }

  ngOnDestroy() {
    this.removeMetaTags();
  }

  private addMetaTags() {
    if (this.description) {
      this.meta.addTag({ name: 'description', content: this.description });
    }

    if (this.ogTitle) {
      this.meta.addTag({ property: 'og:title', content: this.ogTitle });
    }
    if (this.keywords) {
      this.meta.addTag({ property: 'keywords', content: this.keywords });
    }

    // Add more meta tags as needed
  }

  private removeMetaTags() {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="keywords"');
    // Remove other meta tags as needed
  }
}
