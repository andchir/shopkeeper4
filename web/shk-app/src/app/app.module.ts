import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule, CalendarModule, ChipsModule } from 'primeng/primeng';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent, AlertModalContent, ConfirmModalContent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { OrdersComponent } from './orders.component';
import { CatalogComponent } from './catalog.component';
import { CatalogCategoryComponent } from './catalog-category.component';
import { ProductModalContent } from './product.component';
import { CategoriesMenuComponent, CategoriesModalComponent, CategoriesListComponent } from './categories.component';
import { ContentTypesComponent, ContentTypeModalContent } from './content-types.component';
import { FieldTypesComponent, FieldTypeModalContent } from './field-types.component';
import { StatisticsComponent } from './stat.component';
import { SettingsComponent } from './settings.component';
import { ListRecursiveComponent } from './list-recursive.component';
import { TableComponent } from './table.component';
import { InputFieldRenderComponent } from './render-input-field';
import { OutputFieldComponent } from './render-output-field';

import { FilterFieldByGroup } from './pipes/filter-field-by-group.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { FilterArrayPipe } from './pipes/filter-array-pipe';

import { AppSettings } from './services/app-settings.service';
import { ProductsService } from './services/products.service';
import { ContentTypesService } from './services/content_types.service';
import { CategoriesService } from './services/categories.service';
import { AppRoutingModule }     from './app-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, 'shk-app/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        EditorModule,
        CalendarModule,
        ChipsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        OrdersComponent,
        CategoriesMenuComponent,
        CatalogComponent,
        CatalogCategoryComponent,
        ContentTypesComponent,
        FieldTypesComponent,
        StatisticsComponent,
        SettingsComponent,
        ListRecursiveComponent,
        TableComponent,
        CategoriesListComponent,
        InputFieldRenderComponent,
        OutputFieldComponent,

        FilterFieldByGroup,
        OrderByPipe,
        FilterArrayPipe,

        AlertModalContent,
        ConfirmModalContent,
        ProductModalContent,
        ContentTypeModalContent,
        CategoriesModalComponent,
        FieldTypeModalContent
    ],
    providers: [
        AppSettings,
        ProductsService,
        ContentTypesService,
        CategoriesService,
        NgbActiveModal,
        NgbTooltipConfig
    ],
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
