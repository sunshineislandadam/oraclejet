/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import ojDataGrid = require('../ojdatagrid');
import ojTable = require('../ojtable');
import { DataProvider } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojRowExpander<K, D> extends baseComponent<ojRowExpanderSettableProperties<K, D>> {
    context: (ojTable.ojTable.RowTemplateContext<K, D> | ojTable.ojTable.CellTemplateContext<K, D> | ojDataGrid.ojDataGrid.CellContext<K, D> | ojDataGrid.ojDataGrid.CellContext<K, D>);
    translations: {
        accessibleLevelDescription?: string;
        accessibleRowCollapsed?: string;
        accessibleRowDescription?: string;
        accessibleRowExpanded?: string;
        accessibleStateCollapsed?: string;
        accessibleStateExpanded?: string;
    };
    addEventListener<T extends keyof ojRowExpanderEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojRowExpanderEventMap<K, D>[T]) => any, options?: (boolean |
       AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojRowExpanderSettableProperties<K, D>>(property: T): ojRowExpander<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojRowExpanderSettableProperties<K, D>>(property: T, value: ojRowExpanderSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojRowExpanderSettableProperties<K, D>>): void;
    setProperties(properties: ojRowExpanderSettablePropertiesLenient<K, D>): void;
    refresh(): void;
}
export namespace ojRowExpander {
    interface ojCollapse extends CustomEvent<{
        rowKey: any;
        [propName: string]: any;
    }> {
    }
    interface ojExpand<K> extends CustomEvent<{
        rowKey: any;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type contextChanged<K, D> = JetElementCustomEvent<ojRowExpander<K, D>["context"]>;
    // tslint:disable-next-line interface-over-type-literal
    type Context<K, D> = {
        datasource: DataProvider<K, D> | null;
        isLeaf: boolean;
        key: K;
        keys: {
            column: K;
            row: K;
        };
        parentKey: K;
        treeDepth: number;
    };
}
export interface ojRowExpanderEventMap<K, D> extends baseComponentEventMap<ojRowExpanderSettableProperties<K, D>> {
    'ojCollapse': ojRowExpander.ojCollapse;
    'ojExpand': ojRowExpander.ojExpand<K>;
    'contextChanged': JetElementCustomEvent<ojRowExpander<K, D>["context"]>;
}
export interface ojRowExpanderSettableProperties<K, D> extends baseComponentSettableProperties {
    context: (ojTable.ojTable.RowTemplateContext<K, D> | ojTable.ojTable.CellTemplateContext<K, D> | ojDataGrid.ojDataGrid.CellContext<K, D> | ojDataGrid.ojDataGrid.CellContext<K, D>);
    translations: {
        accessibleLevelDescription?: string;
        accessibleRowCollapsed?: string;
        accessibleRowDescription?: string;
        accessibleRowExpanded?: string;
        accessibleStateCollapsed?: string;
        accessibleStateExpanded?: string;
    };
}
export interface ojRowExpanderSettablePropertiesLenient<K, D> extends Partial<ojRowExpanderSettableProperties<K, D>> {
    [key: string]: any;
}
export type RowExpanderElement<K, D> = ojRowExpander<K, D>;
export namespace RowExpanderElement {
    interface ojCollapse extends CustomEvent<{
        rowKey: any;
        [propName: string]: any;
    }> {
    }
    interface ojExpand<K> extends CustomEvent<{
        rowKey: any;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type contextChanged<K, D> = JetElementCustomEvent<ojRowExpander<K, D>["context"]>;
    // tslint:disable-next-line interface-over-type-literal
    type Context<K, D> = {
        datasource: DataProvider<K, D> | null;
        isLeaf: boolean;
        key: K;
        keys: {
            column: K;
            row: K;
        };
        parentKey: K;
        treeDepth: number;
    };
}
