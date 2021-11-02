import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ListaProduccionComponent } from './lista-produccion.component';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { GuardarProductoService } from 'src/app/services/guardar-producto.service';

describe('ListaProduccionComponent', () => {
  let component: ListaProduccionComponent;
  let fixture: ComponentFixture<ListaProduccionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProduccionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
