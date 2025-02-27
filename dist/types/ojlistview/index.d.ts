/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import CommonTypes = require('../ojcommontypes');
import { KeySet } from '../ojkeyset';
import { DataProvider, ItemMetadata } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojListView<K, D> extends baseComponent<ojListViewSettableProperties<K, D>> {
    as: string;
    currentItem: K;
    data: DataProvider<K, D>;
    display: 'list' | 'card';
    dnd: {
        drag?: {
            items: {
                dataTypes?: string | string[];
                drag?: ((param0: Event) => void);
                dragEnd?: ((param0: Event) => void);
                dragStart?: ((param0: Event, param1: {
                    items: Element[];
                }) => void);
            };
        };
        drop?: {
            items: {
                dataTypes?: string | string[];
                dragEnter?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragLeave?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragOver?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                drop?: ((param0: Event, param1: ojListView.ItemsDropContext) => void);
            };
        };
        reorder: {
            items: 'enabled' | 'disabled';
        };
    };
    drillMode: 'collapsible' | 'none';
    expanded: KeySet<K>;
    readonly firstSelectedItem: CommonTypes.ItemContext<K, D>;
    gridlines: {
        item: 'visible' | 'visibleExceptLast' | 'hidden';
    };
    groupHeaderPosition: 'static' | 'sticky';
    item: {
        focusable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
        renderer?: ((param0: ojListView.ItemContext<K, D>) => {
            insert: Element | string;
        } | undefined) | null;
        selectable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
    };
    scrollPolicy: 'auto' | 'loadAll' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize?: number;
        maxCount?: number;
        scroller?: Element | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | string;
    };
    scrollPosition: {
        index?: number;
        key?: K;
        offsetX?: number;
        offsetY?: number;
        parent?: K;
        x?: number;
        y?: number;
    };
    scrollToKey: 'auto' | 'capability' | 'always' | 'never';
    selected: KeySet<K>;
    selection: K[];
    selectionMode: 'none' | 'single' | 'multiple';
    selectionRequired: boolean;
    translations: {
        accessibleNavigateSkipItems?: string;
        accessibleReorderAfterItem?: string;
        accessibleReorderBeforeItem?: string;
        accessibleReorderInsideItem?: string;
        accessibleReorderTouchInstructionText?: string;
        indexerCharacters?: string;
        labelCopy?: string;
        labelCut?: string;
        labelPaste?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
        msgFetchingData?: string;
        msgItemsAppended?: string;
        msgNoData?: string;
    };
    addEventListener<T extends keyof ojListViewEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojListViewEventMap<K, D>[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojListViewSettableProperties<K, D>>(property: T): ojListView<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojListViewSettableProperties<K, D>>(property: T, value: ojListViewSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojListViewSettableProperties<K, D>>): void;
    setProperties(properties: ojListViewSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojListView.ContextByNode<K> | null;
    getDataForVisibleItem(context: {
        key?: K;
        index?: number;
        parent?: Element;
    }): D;
    refresh(): void;
    scrollToItem(item: {
        key: K;
    }): void;
}
export namespace ojListView {
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
    interface ojBeforeCollapse<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentItem<K> extends CustomEvent<{
        item: Element;
        key: K;
        previousItem: Element;
        previousKey: K;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeExpand<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojCollapse<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojCopy extends CustomEvent<{
        items: Element[];
        [propName: string]: any;
    }> {
    }
    interface ojCut extends CustomEvent<{
        items: Element[];
        [propName: string]: any;
    }> {
    }
    interface ojExpand<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojItemAction<K, D> extends CustomEvent<{
        context: CommonTypes.ItemContext<K, D>;
        originalEvent: Event;
        [propName: string]: any;
    }> {
    }
    interface ojPaste extends CustomEvent<{
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojReorder extends CustomEvent<{
        items: Element[];
        position: string;
        reference: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type asChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["as"]>;
    // tslint:disable-next-line interface-over-type-literal
    type currentItemChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["currentItem"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dataChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["data"]>;
    // tslint:disable-next-line interface-over-type-literal
    type displayChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["display"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dndChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["dnd"]>;
    // tslint:disable-next-line interface-over-type-literal
    type drillModeChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["drillMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type expandedChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["expanded"]>;
    // tslint:disable-next-line interface-over-type-literal
    type firstSelectedItemChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["firstSelectedItem"]>;
    // tslint:disable-next-line interface-over-type-literal
    type gridlinesChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["gridlines"]>;
    // tslint:disable-next-line interface-over-type-literal
    type groupHeaderPositionChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["groupHeaderPosition"]>;
    // tslint:disable-next-line interface-over-type-literal
    type itemChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["item"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollPolicy"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyOptionsChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollPolicyOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPositionChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollPosition"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollToKeyChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollToKey"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectedChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selected"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selection"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionModeChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selectionMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionRequiredChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selectionRequired"]>;
    // tslint:disable-next-line interface-over-type-literal
    type ContextByNode<K> = {
        group?: boolean;
        index: number;
        key: K;
        parent?: Element;
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext<K, D> = {
        data: D;
        datasource: DataProvider<K, D>;
        depth?: number;
        index: number;
        key: K;
        leaf?: boolean;
        metadata: ItemMetadata<K>;
        parentElement: Element;
        parentKey?: K;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemsDropContext = {
        item: Element;
        position: 'before' | 'after' | 'inside';
        reorder: boolean;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemTemplateContext = {
        componentElement: Element;
        data: object;
        depth: number;
        index: number;
        key: any;
        leaf: boolean;
        parentkey: any;
    };
}
export interface ojListViewEventMap<K, D> extends baseComponentEventMap<ojListViewSettableProperties<K, D>> {
    'ojAnimateEnd': ojListView.ojAnimateEnd;
    'ojAnimateStart': ojListView.ojAnimateStart;
    'ojBeforeCollapse': ojListView.ojBeforeCollapse<K>;
    'ojBeforeCurrentItem': ojListView.ojBeforeCurrentItem<K>;
    'ojBeforeExpand': ojListView.ojBeforeExpand<K>;
    'ojCollapse': ojListView.ojCollapse<K>;
    'ojCopy': ojListView.ojCopy;
    'ojCut': ojListView.ojCut;
    'ojExpand': ojListView.ojExpand<K>;
    'ojItemAction': ojListView.ojItemAction<K, D>;
    'ojPaste': ojListView.ojPaste;
    'ojReorder': ojListView.ojReorder;
    'asChanged': JetElementCustomEvent<ojListView<K, D>["as"]>;
    'currentItemChanged': JetElementCustomEvent<ojListView<K, D>["currentItem"]>;
    'dataChanged': JetElementCustomEvent<ojListView<K, D>["data"]>;
    'displayChanged': JetElementCustomEvent<ojListView<K, D>["display"]>;
    'dndChanged': JetElementCustomEvent<ojListView<K, D>["dnd"]>;
    'drillModeChanged': JetElementCustomEvent<ojListView<K, D>["drillMode"]>;
    'expandedChanged': JetElementCustomEvent<ojListView<K, D>["expanded"]>;
    'firstSelectedItemChanged': JetElementCustomEvent<ojListView<K, D>["firstSelectedItem"]>;
    'gridlinesChanged': JetElementCustomEvent<ojListView<K, D>["gridlines"]>;
    'groupHeaderPositionChanged': JetElementCustomEvent<ojListView<K, D>["groupHeaderPosition"]>;
    'itemChanged': JetElementCustomEvent<ojListView<K, D>["item"]>;
    'scrollPolicyChanged': JetElementCustomEvent<ojListView<K, D>["scrollPolicy"]>;
    'scrollPolicyOptionsChanged': JetElementCustomEvent<ojListView<K, D>["scrollPolicyOptions"]>;
    'scrollPositionChanged': JetElementCustomEvent<ojListView<K, D>["scrollPosition"]>;
    'scrollToKeyChanged': JetElementCustomEvent<ojListView<K, D>["scrollToKey"]>;
    'selectedChanged': JetElementCustomEvent<ojListView<K, D>["selected"]>;
    'selectionChanged': JetElementCustomEvent<ojListView<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojListView<K, D>["selectionMode"]>;
    'selectionRequiredChanged': JetElementCustomEvent<ojListView<K, D>["selectionRequired"]>;
}
export interface ojListViewSettableProperties<K, D> extends baseComponentSettableProperties {
    as: string;
    currentItem: K;
    data: DataProvider<K, D>;
    display: 'list' | 'card';
    dnd: {
        drag?: {
            items: {
                dataTypes?: string | string[];
                drag?: ((param0: Event) => void);
                dragEnd?: ((param0: Event) => void);
                dragStart?: ((param0: Event, param1: {
                    items: Element[];
                }) => void);
            };
        };
        drop?: {
            items: {
                dataTypes?: string | string[];
                dragEnter?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragLeave?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragOver?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                drop?: ((param0: Event, param1: ojListView.ItemsDropContext) => void);
            };
        };
        reorder: {
            items: 'enabled' | 'disabled';
        };
    };
    drillMode: 'collapsible' | 'none';
    expanded: KeySet<K>;
    readonly firstSelectedItem: CommonTypes.ItemContext<K, D>;
    gridlines: {
        item: 'visible' | 'visibleExceptLast' | 'hidden';
    };
    groupHeaderPosition: 'static' | 'sticky';
    item: {
        focusable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
        renderer?: ((param0: ojListView.ItemContext<K, D>) => {
            insert: Element | string;
        } | undefined) | null;
        selectable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
    };
    scrollPolicy: 'auto' | 'loadAll' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize?: number;
        maxCount?: number;
        scroller?: Element | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | string;
    };
    scrollPosition: {
        index?: number;
        key?: K;
        offsetX?: number;
        offsetY?: number;
        parent?: K;
        x?: number;
        y?: number;
    };
    scrollToKey: 'auto' | 'capability' | 'always' | 'never';
    selected: KeySet<K>;
    selection: K[];
    selectionMode: 'none' | 'single' | 'multiple';
    selectionRequired: boolean;
    translations: {
        accessibleNavigateSkipItems?: string;
        accessibleReorderAfterItem?: string;
        accessibleReorderBeforeItem?: string;
        accessibleReorderInsideItem?: string;
        accessibleReorderTouchInstructionText?: string;
        indexerCharacters?: string;
        labelCopy?: string;
        labelCut?: string;
        labelPaste?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
        msgFetchingData?: string;
        msgItemsAppended?: string;
        msgNoData?: string;
    };
}
export interface ojListViewSettablePropertiesLenient<K, D> extends Partial<ojListViewSettableProperties<K, D>> {
    [key: string]: any;
}
export type ListViewElement<K, D> = ojListView<K, D>;
export namespace ListViewElement {
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
    interface ojBeforeCollapse<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentItem<K> extends CustomEvent<{
        item: Element;
        key: K;
        previousItem: Element;
        previousKey: K;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeExpand<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojCollapse<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojCopy extends CustomEvent<{
        items: Element[];
        [propName: string]: any;
    }> {
    }
    interface ojCut extends CustomEvent<{
        items: Element[];
        [propName: string]: any;
    }> {
    }
    interface ojExpand<K> extends CustomEvent<{
        item: Element;
        key: K;
        [propName: string]: any;
    }> {
    }
    interface ojItemAction<K, D> extends CustomEvent<{
        context: CommonTypes.ItemContext<K, D>;
        originalEvent: Event;
        [propName: string]: any;
    }> {
    }
    interface ojPaste extends CustomEvent<{
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojReorder extends CustomEvent<{
        items: Element[];
        position: string;
        reference: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type asChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["as"]>;
    // tslint:disable-next-line interface-over-type-literal
    type currentItemChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["currentItem"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dataChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["data"]>;
    // tslint:disable-next-line interface-over-type-literal
    type displayChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["display"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dndChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["dnd"]>;
    // tslint:disable-next-line interface-over-type-literal
    type drillModeChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["drillMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type expandedChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["expanded"]>;
    // tslint:disable-next-line interface-over-type-literal
    type firstSelectedItemChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["firstSelectedItem"]>;
    // tslint:disable-next-line interface-over-type-literal
    type gridlinesChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["gridlines"]>;
    // tslint:disable-next-line interface-over-type-literal
    type groupHeaderPositionChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["groupHeaderPosition"]>;
    // tslint:disable-next-line interface-over-type-literal
    type itemChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["item"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollPolicy"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyOptionsChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollPolicyOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPositionChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollPosition"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollToKeyChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["scrollToKey"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectedChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selected"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selection"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionModeChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selectionMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionRequiredChanged<K, D> = JetElementCustomEvent<ojListView<K, D>["selectionRequired"]>;
    // tslint:disable-next-line interface-over-type-literal
    type ContextByNode<K> = {
        group?: boolean;
        index: number;
        key: K;
        parent?: Element;
        subId: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemsDropContext = {
        item: Element;
        position: 'before' | 'after' | 'inside';
        reorder: boolean;
    };
}
