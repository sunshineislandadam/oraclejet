/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import Converter = require('../ojconverter');
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTimeAxis extends dvtBaseComponent<ojTimeAxisSettableProperties> {
    converter: ojTimeAxis.Converters | Converter<string>;
    end: string;
    scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
    start: string;
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        stateCollapsed?: string;
        stateDrillable?: string;
        stateExpanded?: string;
        stateHidden?: string;
        stateIsolated?: string;
        stateMaximized?: string;
        stateMinimized?: string;
        stateSelected?: string;
        stateUnselected?: string;
        stateVisible?: string;
    };
    addEventListener<T extends keyof ojTimeAxisEventMap>(type: T, listener: (this: HTMLElement, ev: ojTimeAxisEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojTimeAxisSettableProperties>(property: T): ojTimeAxis[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTimeAxisSettableProperties>(property: T, value: ojTimeAxisSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTimeAxisSettableProperties>): void;
    setProperties(properties: ojTimeAxisSettablePropertiesLenient): void;
}
export namespace ojTimeAxis {
    // tslint:disable-next-line interface-over-type-literal
    type converterChanged = JetElementCustomEvent<ojTimeAxis["converter"]>;
    // tslint:disable-next-line interface-over-type-literal
    type endChanged = JetElementCustomEvent<ojTimeAxis["end"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scaleChanged = JetElementCustomEvent<ojTimeAxis["scale"]>;
    // tslint:disable-next-line interface-over-type-literal
    type startChanged = JetElementCustomEvent<ojTimeAxis["start"]>;
    // tslint:disable-next-line interface-over-type-literal
    type Converters = {
        days?: Converter<string>;
        default?: Converter<string>;
        hours?: Converter<string>;
        minutes?: Converter<string>;
        months?: Converter<string>;
        quarters?: Converter<string>;
        seconds?: Converter<string>;
        weeks?: Converter<string>;
        years?: Converter<string>;
    };
}
export interface ojTimeAxisEventMap extends dvtBaseComponentEventMap<ojTimeAxisSettableProperties> {
    'converterChanged': JetElementCustomEvent<ojTimeAxis["converter"]>;
    'endChanged': JetElementCustomEvent<ojTimeAxis["end"]>;
    'scaleChanged': JetElementCustomEvent<ojTimeAxis["scale"]>;
    'startChanged': JetElementCustomEvent<ojTimeAxis["start"]>;
}
export interface ojTimeAxisSettableProperties extends dvtBaseComponentSettableProperties {
    converter: ojTimeAxis.Converters | Converter<string>;
    end: string;
    scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
    start: string;
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        stateCollapsed?: string;
        stateDrillable?: string;
        stateExpanded?: string;
        stateHidden?: string;
        stateIsolated?: string;
        stateMaximized?: string;
        stateMinimized?: string;
        stateSelected?: string;
        stateUnselected?: string;
        stateVisible?: string;
    };
}
export interface ojTimeAxisSettablePropertiesLenient extends Partial<ojTimeAxisSettableProperties> {
    [key: string]: any;
}
export type TimeAxisElement = ojTimeAxis;
export namespace TimeAxisElement {
    // tslint:disable-next-line interface-over-type-literal
    type converterChanged = JetElementCustomEvent<ojTimeAxis["converter"]>;
    // tslint:disable-next-line interface-over-type-literal
    type endChanged = JetElementCustomEvent<ojTimeAxis["end"]>;
    // tslint:disable-next-line interface-over-type-literal
    type scaleChanged = JetElementCustomEvent<ojTimeAxis["scale"]>;
    // tslint:disable-next-line interface-over-type-literal
    type startChanged = JetElementCustomEvent<ojTimeAxis["start"]>;
    // tslint:disable-next-line interface-over-type-literal
    type Converters = {
        days?: Converter<string>;
        default?: Converter<string>;
        hours?: Converter<string>;
        minutes?: Converter<string>;
        months?: Converter<string>;
        quarters?: Converter<string>;
        seconds?: Converter<string>;
        weeks?: Converter<string>;
        years?: Converter<string>;
    };
}
