/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojFormLayout extends JetElement<ojFormLayoutSettableProperties> {
    colspanWrap: 'nowrap' | 'wrap';
    columns: number;
    direction: 'column' | 'row';
    labelEdge: 'inside' | 'start' | 'top';
    labelWidth: string;
    labelWrapping: 'truncate' | 'wrap';
    maxColumns: number;
    readonly: boolean;
    userAssistanceDensity: 'reflow' | 'efficient' | 'compact';
    addEventListener<T extends keyof ojFormLayoutEventMap>(type: T, listener: (this: HTMLElement, ev: ojFormLayoutEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojFormLayoutSettableProperties>(property: T): ojFormLayout[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojFormLayoutSettableProperties>(property: T, value: ojFormLayoutSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojFormLayoutSettableProperties>): void;
    setProperties(properties: ojFormLayoutSettablePropertiesLenient): void;
    refresh(): void;
}
export namespace ojFormLayout {
    // tslint:disable-next-line interface-over-type-literal
    type colspanWrapChanged = JetElementCustomEvent<ojFormLayout["colspanWrap"]>;
    // tslint:disable-next-line interface-over-type-literal
    type columnsChanged = JetElementCustomEvent<ojFormLayout["columns"]>;
    // tslint:disable-next-line interface-over-type-literal
    type directionChanged = JetElementCustomEvent<ojFormLayout["direction"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelEdgeChanged = JetElementCustomEvent<ojFormLayout["labelEdge"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelWidthChanged = JetElementCustomEvent<ojFormLayout["labelWidth"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelWrappingChanged = JetElementCustomEvent<ojFormLayout["labelWrapping"]>;
    // tslint:disable-next-line interface-over-type-literal
    type maxColumnsChanged = JetElementCustomEvent<ojFormLayout["maxColumns"]>;
    // tslint:disable-next-line interface-over-type-literal
    type readonlyChanged = JetElementCustomEvent<ojFormLayout["readonly"]>;
    // tslint:disable-next-line interface-over-type-literal
    type userAssistanceDensityChanged = JetElementCustomEvent<ojFormLayout["userAssistanceDensity"]>;
}
export interface ojFormLayoutEventMap extends HTMLElementEventMap {
    'colspanWrapChanged': JetElementCustomEvent<ojFormLayout["colspanWrap"]>;
    'columnsChanged': JetElementCustomEvent<ojFormLayout["columns"]>;
    'directionChanged': JetElementCustomEvent<ojFormLayout["direction"]>;
    'labelEdgeChanged': JetElementCustomEvent<ojFormLayout["labelEdge"]>;
    'labelWidthChanged': JetElementCustomEvent<ojFormLayout["labelWidth"]>;
    'labelWrappingChanged': JetElementCustomEvent<ojFormLayout["labelWrapping"]>;
    'maxColumnsChanged': JetElementCustomEvent<ojFormLayout["maxColumns"]>;
    'readonlyChanged': JetElementCustomEvent<ojFormLayout["readonly"]>;
    'userAssistanceDensityChanged': JetElementCustomEvent<ojFormLayout["userAssistanceDensity"]>;
}
export interface ojFormLayoutSettableProperties extends JetSettableProperties {
    colspanWrap: 'nowrap' | 'wrap';
    columns: number;
    direction: 'column' | 'row';
    labelEdge: 'inside' | 'start' | 'top';
    labelWidth: string;
    labelWrapping: 'truncate' | 'wrap';
    maxColumns: number;
    readonly: boolean;
    userAssistanceDensity: 'reflow' | 'efficient' | 'compact';
}
export interface ojFormLayoutSettablePropertiesLenient extends Partial<ojFormLayoutSettableProperties> {
    [key: string]: any;
}
export type FormLayoutElement = ojFormLayout;
export namespace FormLayoutElement {
    // tslint:disable-next-line interface-over-type-literal
    type colspanWrapChanged = JetElementCustomEvent<ojFormLayout["colspanWrap"]>;
    // tslint:disable-next-line interface-over-type-literal
    type columnsChanged = JetElementCustomEvent<ojFormLayout["columns"]>;
    // tslint:disable-next-line interface-over-type-literal
    type directionChanged = JetElementCustomEvent<ojFormLayout["direction"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelEdgeChanged = JetElementCustomEvent<ojFormLayout["labelEdge"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelWidthChanged = JetElementCustomEvent<ojFormLayout["labelWidth"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelWrappingChanged = JetElementCustomEvent<ojFormLayout["labelWrapping"]>;
    // tslint:disable-next-line interface-over-type-literal
    type maxColumnsChanged = JetElementCustomEvent<ojFormLayout["maxColumns"]>;
    // tslint:disable-next-line interface-over-type-literal
    type readonlyChanged = JetElementCustomEvent<ojFormLayout["readonly"]>;
    // tslint:disable-next-line interface-over-type-literal
    type userAssistanceDensityChanged = JetElementCustomEvent<ojFormLayout["userAssistanceDensity"]>;
}
