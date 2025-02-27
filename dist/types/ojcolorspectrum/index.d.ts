/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import Color = require('../ojcolor');
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojColorSpectrum extends editableValue<Color, ojColorSpectrumSettableProperties> {
    displayOptions: {
        converterHint: 'display' | 'none';
        helpInstruction: Array<'notewindow' | 'none'> | 'notewindow' | 'none';
        messages: 'display' | 'none';
        validatorHint: 'display' | 'none';
    };
    labelledBy: string | null;
    readonly transientValue: Color;
    value: Color;
    translations: {
        labelHue?: string;
        labelOpacity?: string;
        labelSatLum?: string;
        labelThumbDesc?: string;
    };
    addEventListener<T extends keyof ojColorSpectrumEventMap>(type: T, listener: (this: HTMLElement, ev: ojColorSpectrumEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojColorSpectrumSettableProperties>(property: T): ojColorSpectrum[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojColorSpectrumSettableProperties>(property: T, value: ojColorSpectrumSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojColorSpectrumSettableProperties>): void;
    setProperties(properties: ojColorSpectrumSettablePropertiesLenient): void;
}
export namespace ojColorSpectrum {
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
    // tslint:disable-next-line interface-over-type-literal
    type displayOptionsChanged = JetElementCustomEvent<ojColorSpectrum["displayOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelledByChanged = JetElementCustomEvent<ojColorSpectrum["labelledBy"]>;
    // tslint:disable-next-line interface-over-type-literal
    type transientValueChanged = JetElementCustomEvent<ojColorSpectrum["transientValue"]>;
    // tslint:disable-next-line interface-over-type-literal
    type valueChanged = JetElementCustomEvent<ojColorSpectrum["value"]>;
}
export interface ojColorSpectrumEventMap extends editableValueEventMap<Color, ojColorSpectrumSettableProperties> {
    'ojAnimateEnd': ojColorSpectrum.ojAnimateEnd;
    'ojAnimateStart': ojColorSpectrum.ojAnimateStart;
    'displayOptionsChanged': JetElementCustomEvent<ojColorSpectrum["displayOptions"]>;
    'labelledByChanged': JetElementCustomEvent<ojColorSpectrum["labelledBy"]>;
    'transientValueChanged': JetElementCustomEvent<ojColorSpectrum["transientValue"]>;
    'valueChanged': JetElementCustomEvent<ojColorSpectrum["value"]>;
}
export interface ojColorSpectrumSettableProperties extends editableValueSettableProperties<Color> {
    displayOptions: {
        converterHint: 'display' | 'none';
        helpInstruction: Array<'notewindow' | 'none'> | 'notewindow' | 'none';
        messages: 'display' | 'none';
        validatorHint: 'display' | 'none';
    };
    labelledBy: string | null;
    readonly transientValue: Color;
    value: Color;
    translations: {
        labelHue?: string;
        labelOpacity?: string;
        labelSatLum?: string;
        labelThumbDesc?: string;
    };
}
export interface ojColorSpectrumSettablePropertiesLenient extends Partial<ojColorSpectrumSettableProperties> {
    [key: string]: any;
}
export type ColorSpectrumElement = ojColorSpectrum;
export namespace ColorSpectrumElement {
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
    // tslint:disable-next-line interface-over-type-literal
    type displayOptionsChanged = JetElementCustomEvent<ojColorSpectrum["displayOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type labelledByChanged = JetElementCustomEvent<ojColorSpectrum["labelledBy"]>;
    // tslint:disable-next-line interface-over-type-literal
    type transientValueChanged = JetElementCustomEvent<ojColorSpectrum["transientValue"]>;
    // tslint:disable-next-line interface-over-type-literal
    type valueChanged = JetElementCustomEvent<ojColorSpectrum["value"]>;
}
