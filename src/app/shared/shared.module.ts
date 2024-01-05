import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MainHeaderComponent } from '../components/main-header/main-header.component';
import { CustomerSectionComponent } from '../components/customer-section/customer-section.component';
import { SecuritySectionComponent } from '../components/security-section/security-section.component';
import { SecurityPackageSectionComponent } from '../components/security-package-section/security-package-section.component';
import { PreInstalledAppsSectionsComponent } from '../components/pre-installed-apps-sections/pre-installed-apps-sections.component';
import { PreInstalledAppCardComponent } from '../components/pre-installed-app-card/pre-installed-app-card.component';
import { OpenSourceSectionComponent } from '../components/open-source-section/open-source-section.component';
import { EmbracSectionComponent } from '../components/embrac-section/embrac-section.component';
import { FeatureSectionComponent } from '../components/feature-section/feature-section.component';
import { YourDevicesSectionComponent } from '../components/your-devices-section/your-devices-section.component';
import { TermsPageComponent } from '../pages/terms-page/terms-page.component';
import { PrivacyPageComponent } from '../pages/privacy-page/privacy-page.component';
import { CheckoutPageComponent } from '../pages/checkout-page/checkout-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MetaTagsDirective } from '../directives/meta-tags.directive';
import {CustomerReviewsComponent} from "../components/customer-reviews/customer-reviews.component";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainHeaderComponent,
    CustomerSectionComponent,
    SecuritySectionComponent,
    SecurityPackageSectionComponent,
    PreInstalledAppsSectionsComponent,
    PreInstalledAppCardComponent,
    OpenSourceSectionComponent,
    EmbracSectionComponent,
    FeatureSectionComponent,
    YourDevicesSectionComponent,
    TermsPageComponent,
    PrivacyPageComponent,
    CheckoutPageComponent,
    CustomerReviewsComponent,
    MetaTagsDirective
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MainHeaderComponent,
    CustomerSectionComponent,
    SecuritySectionComponent,
    SecurityPackageSectionComponent,
    PreInstalledAppsSectionsComponent,
    PreInstalledAppCardComponent,
    OpenSourceSectionComponent,
    EmbracSectionComponent,
    FeatureSectionComponent,
    YourDevicesSectionComponent,
    CustomerReviewsComponent,
    TranslateModule,
    MetaTagsDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forChild(),
  ]
})
export class SharedModule { }
