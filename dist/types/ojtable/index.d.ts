/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import CommonTypes = require('../ojcommontypes');
import { KeySet } from '../ojkeyset';
import { DataProvider, Item } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTable<K, D> extends baseComponent<ojTableSettableProperties<K, D>> {
    accessibility: {
        rowHeader: string;
    };
    as: string;
    columns: Array<{
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: string | null;
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: string | null;
        headerText?: string | null;
        id?: string | null;
        maxWidth?: string | number | null;
        minWidth?: 'auto';
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: string | null;
        weight?: number | null;
        width?: string | number | null;
    }> | null;
    columnsDefault: {
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: string | null;
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: string | null;
        headerText?: string | null;
        maxWidth?: string | number | null;
        minWidth?: 'auto';
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: string | null;
        weight?: number | null;
        width?: string | number | null;
    };
    currentRow: ojTable.CurrentRow<K> | null;
    data: DataProvider<K, D> | null;
    display: 'list' | 'grid';
    dnd: {
        drag: {
            rows: {
                dataTypes?: string | string[];
                drag?: ((param0: DragEvent) => void);
                dragEnd?: ((param0: DragEvent) => void);
                dragStart?: ((param0: DragEvent, param1: ojTable.DragRowContext<K, D>) => void);
            };
        };
        drop: {
            columns: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
            };
            rows: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
            };
        };
        reorder: {
            columns: 'enabled' | 'disabled';
        };
    };
    editMode: 'none' | 'rowEdit';
    editRow: ojTable.EditRow<K> | null;
    readonly firstSelectedRow: CommonTypes.ItemContext<K, D>;
    horizontalGridVisible: 'auto' | 'enabled' | 'disabled';
    layout: 'contents' | 'fixed';
    rowRenderer: ((context: ojTable.RowRendererContext<K, D>) => string | HTMLElement | void) | null;
    scrollPolicy: 'auto' | 'loadAll' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize: number;
        maxCount: number;
    };
    scrollPosition: {
        columnIndex?: number;
        columnKey?: any;
        offsetX?: number;
        offsetY?: number;
        rowIndex?: number;
        rowKey?: any;
        x?: number;
        y?: number;
    };
    scrollToKey: 'auto' | 'capability' | 'always' | 'never';
    selected: {
        row: KeySet<K>;
        column: KeySet<K>;
    };
    selection: Array<ojTable.RowSelectionStart<K> & ojTable.RowSelectionEnd<K>> | Array<ojTable.ColumnSelectionStart<K> & ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {
        column: 'none' | 'single' | 'multiple';
        row: 'none' | 'single' | 'multiple';
    };
    selectionRequired: boolean;
    verticalGridVisible: 'auto' | 'enabled' | 'disabled';
    translations: {
        accessibleColumnContext?: string;
        accessibleColumnFooterContext?: string;
        accessibleColumnHeaderContext?: string;
        accessibleRowContext?: string;
        accessibleSortAscending?: string;
        accessibleSortDescending?: string;
        accessibleSortable?: string;
        accessibleStateSelected?: string;
        labelAccSelectionAffordanceBottom?: string;
        labelAccSelectionAffordanceTop?: string;
        labelDisableNonContiguousSelection?: string;
        labelEditRow?: string;
        labelEnableNonContiguousSelection?: string;
        labelResize?: string;
        labelResizePopupCancel?: string;
        labelResizePopupSpinner?: string;
        labelResizePopupSubmit?: string;
        labelSelectAndEditRow?: string;
        labelSelectColum?: string;
        labelSelectRow?: string;
        labelSort?: string;
        labelSortAsc?: string;
        labelSortDsc?: string;
        msgColumnResizeWidthValidation?: string;
        msgFetchingData?: string;
        msgInitializing?: string;
        msgNoData?: string;
        msgScrollPolicyMaxCountDetail?: string;
        msgScrollPolicyMaxCountSummary?: string;
        msgStatusSortAscending?: string;
        msgStatusSortDescending?: string;
    };
    addEventListener<T extends keyof ojTableEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojTableEventMap<K, D>[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojTableSettableProperties<K, D>>(property: T): ojTable<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTableSettableProperties<K, D>>(property: T, value: ojTableSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTableSettableProperties<K, D>>): void;
    setProperties(properties: ojTableSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): {
        subId: 'oj-table-cell';
        rowIndex: number;
        columnIndex: number;
        key: string;
    } | {
        subId: 'oj-table-footer' | 'oj-table-header';
        index: number;
    };
    getDataForVisibleRow(rowIndex: number): {
        data: D;
        index: number;
        key: K;
    } | null;
    refresh(): void;
    refreshRow(rowIdx: number): Promise<boolean>;
}
export namespace ojTable {
    interface ojAnimateEnd extends CustomEvent<{
        action: 'add' | 'remove' | 'update';
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: 'add' | 'remove' | 'update';
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentRow<K> extends CustomEvent<{
        currentRow: CurrentRow<K>;
        previousCurrentRow: CurrentRow<K>;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRowEdit<K, D> extends CustomEvent<{
        rowContext: {
            componentElement: Element;
            datasource: DataProvider<K, D> | null;
            item: Item<K, D>;
            mode: 'edit' | 'navigation';
            parentElement: Element;
            status: ContextStatus<K>;
        };
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRowEditEnd<K, D> extends CustomEvent<{
        cancelEdit: boolean;
        rowContext: {
            componentElement: Element;
            datasource: DataProvider<K, D> | null;
            item: Item<K, D>;
            mode: 'edit' | 'navigation';
            parentElement: Element;
            status: ContextStatus<K>;
        };
        [propName: string]: any;
    }> {
    }
    interface ojRowAction<K, D> extends CustomEvent<{
        context: CommonTypes.ItemContext<K, D>;
        originalEvent: Event;
        [propName: string]: any;
    }> {
    }
    interface ojSort extends CustomEvent<{
        direction: 'ascending' | 'descending';
        header: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type accessibilityChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["accessibility"]>;
    // tslint:disable-next-line interface-over-type-literal
    type asChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["as"]>;
    // tslint:disable-next-line interface-over-type-literal
    type columnsChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["columns"]>;
    // tslint:disable-next-line interface-over-type-literal
    type columnsDefaultChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["columnsDefault"]>;
    // tslint:disable-next-line interface-over-type-literal
    type currentRowChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["currentRow"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dataChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["data"]>;
    // tslint:disable-next-line interface-over-type-literal
    type displayChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["display"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dndChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["dnd"]>;
    // tslint:disable-next-line interface-over-type-literal
    type editModeChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["editMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type editRowChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["editRow"]>;
    // tslint:disable-next-line interface-over-type-literal
    type firstSelectedRowChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["firstSelectedRow"]>;
    // tslint:disable-next-line interface-over-type-literal
    type horizontalGridVisibleChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>;
    // tslint:disable-next-line interface-over-type-literal
    type layoutChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["layout"]>;
    // tslint:disable-next-line interface-over-type-literal
    type rowRendererChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["rowRenderer"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollPolicy"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyOptionsChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollPolicyOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPositionChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollPosition"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollToKeyChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollToKey"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectedChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selected"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selection"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionModeChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selectionMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionRequiredChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selectionRequired"]>;
    // tslint:disable-next-line interface-over-type-literal
    type verticalGridVisibleChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["verticalGridVisible"]>;
    // tslint:disable-next-line interface-over-type-literal
    type CellTemplateContext<K, D> = {
        columnIndex: number;
        columnKey: keyof D;
        componentElement: Element;
        data: D[keyof D];
        datasource: DataProvider<K, D> | null;
        index: number;
        item: Item<K, D>;
        key: any;
        mode: 'edit' | 'navigation';
        row: any;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ColumnSelectionEnd<K> = {
        endIndex: {
            column: number;
        };
        endKey?: {
            column: K;
        };
    } | {
        endIndex?: {
            column: number;
        };
        endKey: {
            column: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type ColumnSelectionStart<K> = {
        startIndex: {
            column: number;
        };
        startKey?: {
            column: K;
        };
    } | {
        startIndex?: {
            column: number;
        };
        startKey: {
            column: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type ColumnsRendererContext<K, D> = {
        cellContext: {
            datasource: DataProvider<K, D> | null;
            mode: 'edit' | 'navigation';
            status: ContextStatus<K>;
        };
        columnIndex: number;
        componentElement: Element;
        data: any;
        parentElement: Element;
        row: D;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ContextStatus<K> = {
        currentRow: CurrentRow<K>;
        rowIndex: number;
        rowKey: K;
    };
    // tslint:disable-next-line interface-over-type-literal
    type CurrentRow<K> = {
        rowIndex: number;
        rowKey?: K;
    } | {
        rowIndex?: number;
        rowKey: K;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DragRowContext<K, D> = {
        rows: Array<{
            data: D;
            index: number;
            key: K;
        }>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DropColumnContext = {
        columnIndex: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DropRowContext = {
        rowIndex: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type EditRow<K> = {
        rowIndex: number;
        rowKey?: K;
    } | {
        rowIndex?: number;
        rowKey: K;
    };
    // tslint:disable-next-line interface-over-type-literal
    type FooterRendererContext<K, D> = {
        columnIndex: number;
        componentElement: Element;
        footerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type FooterTemplateContext<D> = {
        columnIndex: number;
        columnKey: keyof D;
        componentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type HeaderRendererContext<K, D> = {
        columnHeaderDefaultRenderer?: ((param0: object, param1: ((param0: Element) => void)) => void);
        columnHeaderSortableIconRenderer?: ((param0: object, param1: ((param0: Element) => void)) => void);
        columnIndex: number;
        componentElement: Element;
        data: string;
        headerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type HeaderTemplateContext<D> = {
        columnIndex: number;
        columnKey: keyof D;
        componentElement: Element;
        data: any;
        headerText: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowRendererContext<K, D> = {
        componentElement: Element;
        data: D;
        parentElement: Element;
        rowContext: {
            datasource: DataProvider<K, D> | null;
            mode: 'edit' | 'navigation';
            status: ContextStatus<K>;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowSelectionEnd<K> = {
        endIndex: {
            row: number;
        };
        endKey?: {
            row: K;
        };
    } | {
        endIndex?: {
            row: number;
        };
        endKey: {
            row: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowSelectionStart<K> = {
        startIndex: {
            row: number;
        };
        startKey?: {
            row: K;
        };
    } | {
        startIndex?: {
            row: number;
        };
        startKey: {
            row: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowTemplateContext<K, D> = {
        componentElement: Element;
        data: any;
        datasource: DataProvider<K, D> | null;
        index: number;
        item: Item<K, D>;
        key: any;
        mode: 'edit' | 'navigation';
        rowContext: object;
    };
}
export interface ojTableEventMap<K, D> extends baseComponentEventMap<ojTableSettableProperties<K, D>> {
    'ojAnimateEnd': ojTable.ojAnimateEnd;
    'ojAnimateStart': ojTable.ojAnimateStart;
    'ojBeforeCurrentRow': ojTable.ojBeforeCurrentRow<K>;
    'ojBeforeRowEdit': ojTable.ojBeforeRowEdit<K, D>;
    'ojBeforeRowEditEnd': ojTable.ojBeforeRowEditEnd<K, D>;
    'ojRowAction': ojTable.ojRowAction<K, D>;
    'ojSort': ojTable.ojSort;
    'accessibilityChanged': JetElementCustomEvent<ojTable<K, D>["accessibility"]>;
    'asChanged': JetElementCustomEvent<ojTable<K, D>["as"]>;
    'columnsChanged': JetElementCustomEvent<ojTable<K, D>["columns"]>;
    'columnsDefaultChanged': JetElementCustomEvent<ojTable<K, D>["columnsDefault"]>;
    'currentRowChanged': JetElementCustomEvent<ojTable<K, D>["currentRow"]>;
    'dataChanged': JetElementCustomEvent<ojTable<K, D>["data"]>;
    'displayChanged': JetElementCustomEvent<ojTable<K, D>["display"]>;
    'dndChanged': JetElementCustomEvent<ojTable<K, D>["dnd"]>;
    'editModeChanged': JetElementCustomEvent<ojTable<K, D>["editMode"]>;
    'editRowChanged': JetElementCustomEvent<ojTable<K, D>["editRow"]>;
    'firstSelectedRowChanged': JetElementCustomEvent<ojTable<K, D>["firstSelectedRow"]>;
    'horizontalGridVisibleChanged': JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>;
    'layoutChanged': JetElementCustomEvent<ojTable<K, D>["layout"]>;
    'rowRendererChanged': JetElementCustomEvent<ojTable<K, D>["rowRenderer"]>;
    'scrollPolicyChanged': JetElementCustomEvent<ojTable<K, D>["scrollPolicy"]>;
    'scrollPolicyOptionsChanged': JetElementCustomEvent<ojTable<K, D>["scrollPolicyOptions"]>;
    'scrollPositionChanged': JetElementCustomEvent<ojTable<K, D>["scrollPosition"]>;
    'scrollToKeyChanged': JetElementCustomEvent<ojTable<K, D>["scrollToKey"]>;
    'selectedChanged': JetElementCustomEvent<ojTable<K, D>["selected"]>;
    'selectionChanged': JetElementCustomEvent<ojTable<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojTable<K, D>["selectionMode"]>;
    'selectionRequiredChanged': JetElementCustomEvent<ojTable<K, D>["selectionRequired"]>;
    'verticalGridVisibleChanged': JetElementCustomEvent<ojTable<K, D>["verticalGridVisible"]>;
}
export interface ojTableSettableProperties<K, D> extends baseComponentSettableProperties {
    accessibility: {
        rowHeader: string;
    };
    as: string;
    columns: Array<{
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: string | null;
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: string | null;
        headerText?: string | null;
        id?: string | null;
        maxWidth?: string | number | null;
        minWidth?: 'auto';
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: string | null;
        weight?: number | null;
        width?: string | number | null;
    }> | null;
    columnsDefault: {
        className?: string | null;
        field?: string | null;
        footerClassName?: string | null;
        footerRenderer?: ((context: ojTable.FooterRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        footerStyle?: string | null;
        footerTemplate?: string | null;
        headerClassName?: string | null;
        headerRenderer?: ((context: ojTable.HeaderRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        headerStyle?: string | null;
        headerTemplate?: string | null;
        headerText?: string | null;
        maxWidth?: string | number | null;
        minWidth?: 'auto';
        renderer?: ((context: ojTable.ColumnsRendererContext<K, D>) => {
            insert: HTMLElement | string;
        } | void) | null;
        resizable?: 'enabled' | 'disabled';
        sortProperty?: string | null;
        sortable?: 'auto' | 'enabled' | 'disabled';
        style?: string | null;
        template?: string | null;
        weight?: number | null;
        width?: string | number | null;
    };
    currentRow: ojTable.CurrentRow<K> | null;
    data: DataProvider<K, D> | null;
    display: 'list' | 'grid';
    dnd: {
        drag: {
            rows: {
                dataTypes?: string | string[];
                drag?: ((param0: DragEvent) => void);
                dragEnd?: ((param0: DragEvent) => void);
                dragStart?: ((param0: DragEvent, param1: ojTable.DragRowContext<K, D>) => void);
            };
        };
        drop: {
            columns: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropColumnContext) => void);
            };
            rows: {
                dataTypes: string | string[];
                dragEnter?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragLeave?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                dragOver?: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
                drop: ((param0: DragEvent, param1: ojTable.DropRowContext) => void);
            };
        };
        reorder: {
            columns: 'enabled' | 'disabled';
        };
    };
    editMode: 'none' | 'rowEdit';
    editRow: ojTable.EditRow<K> | null;
    readonly firstSelectedRow: CommonTypes.ItemContext<K, D>;
    horizontalGridVisible: 'auto' | 'enabled' | 'disabled';
    layout: 'contents' | 'fixed';
    rowRenderer: ((context: ojTable.RowRendererContext<K, D>) => string | HTMLElement | void) | null;
    scrollPolicy: 'auto' | 'loadAll' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize: number;
        maxCount: number;
    };
    scrollPosition: {
        columnIndex?: number;
        columnKey?: any;
        offsetX?: number;
        offsetY?: number;
        rowIndex?: number;
        rowKey?: any;
        x?: number;
        y?: number;
    };
    scrollToKey: 'auto' | 'capability' | 'always' | 'never';
    selected: {
        row: KeySet<K>;
        column: KeySet<K>;
    };
    selection: Array<ojTable.RowSelectionStart<K> & ojTable.RowSelectionEnd<K>> | Array<ojTable.ColumnSelectionStart<K> & ojTable.ColumnSelectionEnd<K>>;
    selectionMode: {
        column: 'none' | 'single' | 'multiple';
        row: 'none' | 'single' | 'multiple';
    };
    selectionRequired: boolean;
    verticalGridVisible: 'auto' | 'enabled' | 'disabled';
    translations: {
        accessibleColumnContext?: string;
        accessibleColumnFooterContext?: string;
        accessibleColumnHeaderContext?: string;
        accessibleRowContext?: string;
        accessibleSortAscending?: string;
        accessibleSortDescending?: string;
        accessibleSortable?: string;
        accessibleStateSelected?: string;
        labelAccSelectionAffordanceBottom?: string;
        labelAccSelectionAffordanceTop?: string;
        labelDisableNonContiguousSelection?: string;
        labelEditRow?: string;
        labelEnableNonContiguousSelection?: string;
        labelResize?: string;
        labelResizePopupCancel?: string;
        labelResizePopupSpinner?: string;
        labelResizePopupSubmit?: string;
        labelSelectAndEditRow?: string;
        labelSelectColum?: string;
        labelSelectRow?: string;
        labelSort?: string;
        labelSortAsc?: string;
        labelSortDsc?: string;
        msgColumnResizeWidthValidation?: string;
        msgFetchingData?: string;
        msgInitializing?: string;
        msgNoData?: string;
        msgScrollPolicyMaxCountDetail?: string;
        msgScrollPolicyMaxCountSummary?: string;
        msgStatusSortAscending?: string;
        msgStatusSortDescending?: string;
    };
}
export interface ojTableSettablePropertiesLenient<K, D> extends Partial<ojTableSettableProperties<K, D>> {
    [key: string]: any;
}
export type TableElement<K, D> = ojTable<K, D>;
export namespace TableElement {
    interface ojAnimateEnd extends CustomEvent<{
        action: 'add' | 'remove' | 'update';
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: 'add' | 'remove' | 'update';
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentRow<K> extends CustomEvent<{
        currentRow: ojTable.CurrentRow<K>;
        previousCurrentRow: ojTable.CurrentRow<K>;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRowEdit<K, D> extends CustomEvent<{
        rowContext: {
            componentElement: Element;
            datasource: DataProvider<K, D> | null;
            item: Item<K, D>;
            mode: 'edit' | 'navigation';
            parentElement: Element;
            status: ojTable.ContextStatus<K>;
        };
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRowEditEnd<K, D> extends CustomEvent<{
        cancelEdit: boolean;
        rowContext: {
            componentElement: Element;
            datasource: DataProvider<K, D> | null;
            item: Item<K, D>;
            mode: 'edit' | 'navigation';
            parentElement: Element;
            status: ojTable.ContextStatus<K>;
        };
        [propName: string]: any;
    }> {
    }
    interface ojRowAction<K, D> extends CustomEvent<{
        context: CommonTypes.ItemContext<K, D>;
        originalEvent: Event;
        [propName: string]: any;
    }> {
    }
    interface ojSort extends CustomEvent<{
        direction: 'ascending' | 'descending';
        header: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type accessibilityChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["accessibility"]>;
    // tslint:disable-next-line interface-over-type-literal
    type asChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["as"]>;
    // tslint:disable-next-line interface-over-type-literal
    type columnsChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["columns"]>;
    // tslint:disable-next-line interface-over-type-literal
    type columnsDefaultChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["columnsDefault"]>;
    // tslint:disable-next-line interface-over-type-literal
    type currentRowChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["currentRow"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dataChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["data"]>;
    // tslint:disable-next-line interface-over-type-literal
    type displayChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["display"]>;
    // tslint:disable-next-line interface-over-type-literal
    type dndChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["dnd"]>;
    // tslint:disable-next-line interface-over-type-literal
    type editModeChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["editMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type editRowChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["editRow"]>;
    // tslint:disable-next-line interface-over-type-literal
    type firstSelectedRowChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["firstSelectedRow"]>;
    // tslint:disable-next-line interface-over-type-literal
    type horizontalGridVisibleChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["horizontalGridVisible"]>;
    // tslint:disable-next-line interface-over-type-literal
    type layoutChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["layout"]>;
    // tslint:disable-next-line interface-over-type-literal
    type rowRendererChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["rowRenderer"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollPolicy"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPolicyOptionsChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollPolicyOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollPositionChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollPosition"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scrollToKeyChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["scrollToKey"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectedChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selected"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selection"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionModeChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selectionMode"]>;
    // tslint:disable-next-line interface-over-type-literal
    type selectionRequiredChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["selectionRequired"]>;
    // tslint:disable-next-line interface-over-type-literal
    type verticalGridVisibleChanged<K, D> = JetElementCustomEvent<ojTable<K, D>["verticalGridVisible"]>;
    // tslint:disable-next-line interface-over-type-literal
    type CellTemplateContext<K, D> = {
        columnIndex: number;
        columnKey: keyof D;
        componentElement: Element;
        data: D[keyof D];
        datasource: DataProvider<K, D> | null;
        index: number;
        item: Item<K, D>;
        key: any;
        mode: 'edit' | 'navigation';
        row: any;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ColumnSelectionStart<K> = {
        startIndex: {
            column: number;
        };
        startKey?: {
            column: K;
        };
    } | {
        startIndex?: {
            column: number;
        };
        startKey: {
            column: K;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type ContextStatus<K> = {
        currentRow: ojTable.CurrentRow<K>;
        rowIndex: number;
        rowKey: K;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DragRowContext<K, D> = {
        rows: Array<{
            data: D;
            index: number;
            key: K;
        }>;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DropRowContext = {
        rowIndex: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type FooterRendererContext<K, D> = {
        columnIndex: number;
        componentElement: Element;
        footerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type HeaderRendererContext<K, D> = {
        columnHeaderDefaultRenderer?: ((param0: object, param1: ((param0: Element) => void)) => void);
        columnHeaderSortableIconRenderer?: ((param0: object, param1: ((param0: Element) => void)) => void);
        columnIndex: number;
        componentElement: Element;
        data: string;
        headerContext: {
            datasource: DataProvider<K, D> | null;
        };
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowRendererContext<K, D> = {
        componentElement: Element;
        data: D;
        parentElement: Element;
        rowContext: {
            datasource: DataProvider<K, D> | null;
            mode: 'edit' | 'navigation';
            status: ojTable.ContextStatus<K>;
        };
    };
    // tslint:disable-next-line interface-over-type-literal
    type RowSelectionStart<K> = {
        startIndex: {
            row: number;
        };
        startKey?: {
            row: K;
        };
    } | {
        startIndex?: {
            row: number;
        };
        startKey: {
            row: K;
        };
    };
}
