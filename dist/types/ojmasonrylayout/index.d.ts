/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojMasonryLayout extends baseComponent<ojMasonryLayoutSettableProperties> {
    reorderHandle: string | null;
    translations: {
        labelCut?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
    };
    addEventListener<T extends keyof ojMasonryLayoutEventMap>(type: T, listener: (this: HTMLElement, ev: ojMasonryLayoutEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojMasonryLayoutSettableProperties>(property: T): ojMasonryLayout[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMasonryLayoutSettableProperties>(property: T, value: ojMasonryLayoutSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMasonryLayoutSettableProperties>): void;
    setProperties(properties: ojMasonryLayoutSettablePropertiesLenient): void;
    insertTile(selector: string, index: number): void;
    refresh(): void;
    removeTile(selector: string): void;
    resizeTile(selector: string, sizeStyleClass: string): void;
}
export namespace ojMasonryLayout {
    interface ojAnimateEnd extends CustomEvent<{
        action: string;
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: string;
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeInsert extends CustomEvent<{
        index: number;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRemove extends CustomEvent<{
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeReorder extends CustomEvent<{
        fromIndex: number;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeResize extends CustomEvent<{
        previousSizeStyleClass: string;
        sizeStyleClass: string;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojInsert extends CustomEvent<{
        index: number;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojRemove extends CustomEvent<{
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojReorder extends CustomEvent<{
        fromIndex: number;
        tile: Element;
        toIndex: number;
        [propName: string]: any;
    }> {
    }
    interface ojResize extends CustomEvent<{
        previousSizeStyleClass: string;
        sizeStyleClass: string;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type reorderHandleChanged = JetElementCustomEvent<ojMasonryLayout["reorderHandle"]>;
}
export interface ojMasonryLayoutEventMap extends baseComponentEventMap<ojMasonryLayoutSettableProperties> {
    'ojAnimateEnd': ojMasonryLayout.ojAnimateEnd;
    'ojAnimateStart': ojMasonryLayout.ojAnimateStart;
    'ojBeforeInsert': ojMasonryLayout.ojBeforeInsert;
    'ojBeforeRemove': ojMasonryLayout.ojBeforeRemove;
    'ojBeforeReorder': ojMasonryLayout.ojBeforeReorder;
    'ojBeforeResize': ojMasonryLayout.ojBeforeResize;
    'ojInsert': ojMasonryLayout.ojInsert;
    'ojRemove': ojMasonryLayout.ojRemove;
    'ojReorder': ojMasonryLayout.ojReorder;
    'ojResize': ojMasonryLayout.ojResize;
    'reorderHandleChanged': JetElementCustomEvent<ojMasonryLayout["reorderHandle"]>;
}
export interface ojMasonryLayoutSettableProperties extends baseComponentSettableProperties {
    reorderHandle: string | null;
    translations: {
        labelCut?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
    };
}
export interface ojMasonryLayoutSettablePropertiesLenient extends Partial<ojMasonryLayoutSettableProperties> {
    [key: string]: any;
}
export type MasonryLayoutElement = ojMasonryLayout;
export namespace MasonryLayoutElement {
    interface ojAnimateEnd extends CustomEvent<{
        action: string;
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: string;
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeInsert extends CustomEvent<{
        index: number;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRemove extends CustomEvent<{
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeReorder extends CustomEvent<{
        fromIndex: number;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeResize extends CustomEvent<{
        previousSizeStyleClass: string;
        sizeStyleClass: string;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojInsert extends CustomEvent<{
        index: number;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojRemove extends CustomEvent<{
        tile: Element;
        [propName: string]: any;
    }> {
    }
    interface ojReorder extends CustomEvent<{
        fromIndex: number;
        tile: Element;
        toIndex: number;
        [propName: string]: any;
    }> {
    }
    interface ojResize extends CustomEvent<{
        previousSizeStyleClass: string;
        sizeStyleClass: string;
        tile: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type reorderHandleChanged = JetElementCustomEvent<ojMasonryLayout["reorderHandle"]>;
}
