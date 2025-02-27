/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojDefer extends JetElement<ojDeferSettableProperties> {
    addEventListener<T extends keyof ojDeferEventMap>(type: T, listener: (this: HTMLElement, ev: ojDeferEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojDeferSettableProperties>(property: T): ojDefer[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDeferSettableProperties>(property: T, value: ojDeferSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDeferSettableProperties>): void;
    setProperties(properties: ojDeferSettablePropertiesLenient): void;
}
// These interfaces are empty but required to keep the event chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface ojDeferEventMap extends HTMLElementEventMap {
}
// These interfaces are empty but required to keep the component chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface ojDeferSettableProperties extends JetSettableProperties {
}
export interface ojDeferSettablePropertiesLenient extends Partial<ojDeferSettableProperties> {
    [key: string]: any;
}
export type DeferElement = ojDefer;
