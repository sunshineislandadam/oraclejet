/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojMessage extends JetElement<ojMessageSettableProperties> {
    displayOptions: ojMessage.DisplayOptions;
    message: ojMessage.Message;
    translations: {
        categories?: {
            confirmation?: string;
            error?: string;
            info?: string;
            warning?: string;
        };
        labelCloseIcon?: string;
    };
    addEventListener<T extends keyof ojMessageEventMap>(type: T, listener: (this: HTMLElement, ev: ojMessageEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof ojMessageSettableProperties>(property: T): ojMessage[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojMessageSettableProperties>(property: T, value: ojMessageSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojMessageSettableProperties>): void;
    setProperties(properties: ojMessageSettablePropertiesLenient): void;
    close(): void;
}
export namespace ojMessage {
    interface ojClose extends CustomEvent<{
        message: Message;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type displayOptionsChanged = JetElementCustomEvent<ojMessage["displayOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type messageChanged = JetElementCustomEvent<ojMessage["message"]>;
    // tslint:disable-next-line interface-over-type-literal
    type translationsChanged = JetElementCustomEvent<ojMessage["translations"]>;
    // tslint:disable-next-line interface-over-type-literal
    type DisplayOptions = {
        category?: 'header' | 'none' | 'auto';
    };
    // tslint:disable-next-line interface-over-type-literal
    type Message = {
        autoTimeout?: number;
        category?: string;
        closeAffordance?: 'none' | 'defaults';
        detail?: string;
        icon?: string;
        severity?: 'error' | 'warning' | 'confirmation' | 'info' | 'none';
        sound?: string;
        summary?: string;
        timestamp?: string;
    };
}
export interface ojMessageEventMap extends HTMLElementEventMap {
    'ojClose': ojMessage.ojClose;
    'displayOptionsChanged': JetElementCustomEvent<ojMessage["displayOptions"]>;
    'messageChanged': JetElementCustomEvent<ojMessage["message"]>;
    'translationsChanged': JetElementCustomEvent<ojMessage["translations"]>;
}
export interface ojMessageSettableProperties extends JetSettableProperties {
    displayOptions: ojMessage.DisplayOptions;
    message: ojMessage.Message;
    translations: {
        categories?: {
            confirmation?: string;
            error?: string;
            info?: string;
            warning?: string;
        };
        labelCloseIcon?: string;
    };
}
export interface ojMessageSettablePropertiesLenient extends Partial<ojMessageSettableProperties> {
    [key: string]: any;
}
export type MessageElement = ojMessage;
export namespace MessageElement {
    interface ojClose extends CustomEvent<{
        message: ojMessage.Message;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type displayOptionsChanged = JetElementCustomEvent<ojMessage["displayOptions"]>;
    // tslint:disable-next-line interface-over-type-literal
    type messageChanged = JetElementCustomEvent<ojMessage["message"]>;
    // tslint:disable-next-line interface-over-type-literal
    type translationsChanged = JetElementCustomEvent<ojMessage["translations"]>;
    // tslint:disable-next-line interface-over-type-literal
    type DisplayOptions = {
        category?: 'header' | 'none' | 'auto';
    };
}
