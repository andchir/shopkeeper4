import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, AlertModalContent, ConfirmModalContent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { OrdersComponent } from './orders.component';
import { CatalogComponent } from './catalog.component';
import { ProductModalContent } from './product.component';
import { CategoriesMenuComponent, CategoriesModalComponent, CategoriesListComponent } from './categories.component';
import { ContentTypesComponent, ContentTypeModalContent } from './content-types.component';
import { FieldTypesComponent, FieldTypeModalContent } from './field-types.component';
import { StatisticsComponent } from './stat.component';
import { SettingsComponent } from './settings.component';
import { ListRecursiveComponent } from './list-recursive.component';
import { TableComponent } from './table.component';

import { filterFieldByGroup } from "./filter-field-by-group.pipe";

import { ProductsService } from './services/products.service';
import { ContentTypesService } from './services/content_types.service';
import { CategoriesService } from './services/categories.service';
import { AppRoutingModule }     from './app-routing.module';

import { NgbModule, NgbActiveModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        OrdersComponent,
        CategoriesMenuComponent,
        CatalogComponent,
        ContentTypesComponent,
        FieldTypesComponent,
        StatisticsComponent,
        SettingsComponent,
        filterFieldByGroup,
        ListRecursiveComponent,
        TableComponent,
        CategoriesListComponent,

        AlertModalContent,
        ConfirmModalContent,
        ProductModalContent,
        ContentTypeModalContent,
        CategoriesModalComponent,
        FieldTypeModalContent
    ],
    providers: [ ProductsService, ContentTypesService, CategoriesService, NgbActiveModal, NgbTooltipConfig ],
    entryComponents: [
        AlertModalContent,
        ConfirmModalContent,
        ProductModalContent,
        ContentTypeModalContent,
        CategoriesModalComponent,
        FieldTypeModalContent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
