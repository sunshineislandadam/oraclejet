/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import oj from 'ojs/ojcore-base';
import { FilterFactory, DataProviderMutationEvent, DataProviderRefreshEvent } from 'ojs/ojdataprovider';
import { EventTargetMixin } from 'ojs/ojeventtarget';
import ojMap from 'ojs/ojmap';
import ojSet from 'ojs/ojset';
import 'ojs/ojcomponentcore';

/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/* jslint browser: true,devel:true*/
/**
 *
 * @since 9.0.0
 * @export
 * @final
 * @class BufferingDataProvider
 * @ojtsmodule
 * @implements DataProvider
 * @classdesc
 * <p>BufferingDataProvider is a wrapping DataProvider that provides edit buffering for an underlying DataProvider, so that
 * the edits can be committed to the data source later on.
 * The underlying DataProvider is responsible for fetchting data, and BufferingDataProvider will merge any buffered edits with
 * the underlying data so that they appear as an unified set of data.
 * </p>
 * <p>Because all edits are tracked by keys, the underlying DataProvider must return unique keys in the metadata.  If new rows
 * are added, unique keys must be specified for the new rows.
 * </p>
 * <p>In addition to the methods in the DataProvider interface, BufferingDataProvider implements a set of methods for managing edits:
 * <ul>
 *   <li>addItem</li>
 *   <li>removeItem</li>
 *   <li>updateItem</li>
 *   <li>getSubmittableItems</li>
 *   <li>resetAllUnsubmittedItems</li>
 *   <li>resetUnsubmittedItem</li>
 *   <li>setItemStatus</li>
 * </ul>
 * </p>
 * <p>In a typical usage scenario, an application will:
 * <ol>
 *   <li>Create an instance of the underlying DataProvider that provides the actual data.
 *   <li>Create an instance of BufferingDataProvider, passing the underlying DataProvider instance and any options.
 *   <li>Call "addItem", "removeItem", and "updateItem" on the BufferingDataProvider instance to create edit items, usually in response
 *       to user interactions.  These methods correspond to the basic data operations.  Buffer entries will be created for the edit items
 *       with a status of "unsubmitted".
 *   <li>When ready to submit the edits, call "getSubmittableItems" to get the list of submittable edit items.
 *   <li>Call "setItemStatus" to set the edit items' status to "submitting".
 *   <li>Submit the actual data to the data source and wait for its completion.  How this is done is up to the application and dependent
 *       on the data source.
 *   <li>If the submission is successful, call "setItemStatus" to set the edit items' status to "submitted".
 *       If the submission is unsuccessful, call "setItemStatus" to set the edit items' status
 *       to "unsubmitted" and pass error messages if available.
 *   <li>Show the error messages to the user if needed.
 * </ol>
 * </p>
 * <p>In general, the edit item data should have the same shape as the data in the underlying DataProvider.
 * </p>
 * <p>If sorting and filtering is used in the underlying DataProvider, the application should ensure that all attributes referenced in the
 * sort criterion and filter criterion are included in the item data.  If there is a sortCriteria, added items are merged with the
 * underlying data based on the sortCriteria.  If there is no sortCriteria, added items are inserted at the
 * beginning of the underlying data.  Furthermore, iterators obtained by fetchFirst must all use the same sortCriteria
 * if the application is using those iterators at the same time.
 * </p>
 * <p>BufferingDataProvider does not validate the item key and data.  It is up to the application to perform any validation
 * prior to creating edit items in the buffer.
 * </p>
 *
 * <h3 id="events-section">
 *   Events
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#events-section"></a>
 * </h3>
 * Consumers can add event listeners to listen for the following event types and respond to data change.
 * <h4 id="event:mutate" class="name">
 *   mutate
 * </h4>
 * This event is fired when items have been added or removed from the data.
 * <p>
 * Event payload is found under <code class="prettyprint">event.detail</code>, which implements the {@link DataProviderMutationEventDetail} interface.
 * </p>
 *
 * <h4 id="event:refresh" class="name">
 *   refresh
 * </h4>
 * This event is fired when the data has been refreshed and components need to re-fetch the data.
 * <p>
 * This event contains no additional event payload.
 * </p>
 *
 * <h4 id="event:submittableChange" class="name">
 *   submittableChange
 * </h4>
 * This event is fired when the number of submittable edit items has changed.  An edit item is submittable if it is in "unsubmitted"
 * status and there is no other edit item with the same key in "submitting" status.
 * <p>
 * Event payload is found under <code class="prettyprint">event.detail</code>, which is array of objects that implement the {@link EditItem} interface.
 * </p>
 *
 * <i>Example of consumer listening for the "submittableChange" event type:</i>
 * <pre class="prettyprint"><code>var listener = function(event) {
 *   var editItems = event.detail;
 *   console.log("Number of submittable edit items: " + editItems.length);
 * };
 * dataProvider.addEventListener("submittableChange", listener);
 * </code></pre>
 *
 * @param {DataProvider} dataProvider The underlying DataProvider that provides the original data.
 * @param {Object=} options Options for the underlying DataProvider.
 * @ojsignature [{target: "Type",
 *               value: "class BufferingDataProvider<K, D> implements DataProvider<K, D>",
 *               genericParameters: [{"name": "K", "description": "Type of key"}, {"name": "D", "description": "Type of data"}]},
 *               {target: "Type",
 *               value: "DataProvider<K, D>",
 *               for: "dataProvider"}]
 * @ojtsimport {module: "ojdataprovider", type: "AMD", imported: ["DataProvider", "SortCriterion", "FetchByKeysParameters",
 *   "ContainsKeysResults","FetchByKeysResults","FetchByOffsetParameters","FetchByOffsetResults", "DataMapping",
 *   "FetchListResult","FetchListParameters", "FetchAttribute", "DataFilter", "Item", "ItemWithOptionalData", "ItemMessage"]}
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name containsKeys
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name createOptimizedKeySet
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name createOptimizedKeyMap
 */

/**
 * Get an AsyncIterable object for iterating the data.
 * <p>
 * AsyncIterable contains a Symbol.asyncIterator method that returns an AsyncIterator.
 * AsyncIterator contains a “next” method for fetching the next block of data.
 * </p><p>
 * The "next" method returns a promise that resolves to an object, which contains a "value" property for the data and a "done" property
 * that is set to true when there is no more data to be fetched.  The "done" property should be set to true only if there is no "value"
 * in the result.  Note that "done" only reflects whether the iterator is done at the time "next" is called.  Future calls to "next"
 * may or may not return more rows for a mutable data source.
 * </p>
 * <p>
 * Please see the <a href="DataProvider.html#custom-implementations-section">DataProvider documentation</a> for
 * more information on custom implementations.
 * </p>
 *
 * @param {FetchListParameters=} params fetch parameters
 * @return {AsyncIterable.<FetchListResult>} AsyncIterable with {@link FetchListResult}
 * @see {@link https://github.com/tc39/proposal-async-iteration} for further information on AsyncIterable.
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name fetchFirst
 * @ojsignature {target: "Type",
 *               value: "(parameters?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>"}
 * @ojtsexample <caption>Get an asyncIterator and then fetch first block of data by executing next() on the iterator. Subsequent blocks can be fetched by executing next() again.</caption>
 * let asyncIterator = dataprovider.fetchFirst(options)[Symbol.asyncIterator]();
 * let result = await asyncIterator.next();
 * let value = result.value;
 * let data = value.data;
 * let keys = value.metadata.map(function(val) {
 *   return val.key;
 * });
 * // true or false for done
 * let done = result.done;
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name fetchByKeys
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name fetchByOffset
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name getCapability
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name getTotalSize
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name isEmpty
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name addEventListener
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name removeEventListener
 */

/**
 * @inheritdoc
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name dispatchEvent
 */

/**
 * Create a buffer entry for adding a row.  The entry initially has a status of 'unsubmitted'.
 * <p>
 * If a "remove" entry already exists:
 * <ol>
 * <li>
 * If the "remove" entry does not have data, it will be changed to an "update" entry with the new data.
 * </li><li>
 * If the "remove" entry has data, it will be compared to the new data passed to this method.<br>
 *      If the data are the same, the "remove" entry will be removed and no new entry will be created.<br>
 *      If the data are different, the "remove" entry will be changed to an "update" entry with the new data.
 * </li>
 * </ol>
 * </p><p>
 * Application can call setItemStatus to change the status of the entry to 'submitting' or 'submitted'.
 * There can be at most one entry in 'unsubmitted' status and one entry in 'submitting' status with the same key.  This
 * allows application to keep track of additional changes to a row while submitting previous changes.
 * </p>
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name addItem
 * @param {Item<K, D>} item - an Item object that represents the row.
 * @throws {Error} if an "add" or "update" entry already exists for the same key.
 * @ojsignature {target: "Type",
 *               value: "(item: Item<K, D>): void"}
 */

/**
 * Create a buffer entry for removing a row.  The entry initially has a status of 'unsubmitted'.
 * <p>
 * If an "add" entry already exists, it will be deleted.<br>
 * If an "update" entry already exists, it will be changed to a "remove" entry.
 * </p><p>
 * Application can call setItemStatus to change the status of the entry to 'submitting' or 'submitted'.
 * There can be at most one entry in 'unsubmitted' status and one entry in 'submitting' status with the same key.  This
 * allows application to keep track of additional changes to a row while submitting previous changes.
 * </p>
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name removeItem
 * @param {ItemWithOptionalData} item - an ItemWithOptionalData object that represents the row.
 * @throws {Error} if a "remove" entry already exists for the same key.
 * @ojsignature {target: "Type",
 *               value: "(item: ItemWithOptionalData<K, D>): void"}
 */

/**
 * Create a buffer entry for updating a row.  The entry initially has a status of 'unsubmitted'.
 * <p>
 * If an "add" or "update" entry already exists, the data of the entry will be changed.
 * </p><p>
 * Application can call setItemStatus to change the status of the entry to 'submitting' or 'submitted'.
 * There can be at most one entry in 'unsubmitted' status and one entry in 'submitting' status with the same key.  This
 * allows application to keep track of additional changes to a row while submitting previous changes.
 * </p>
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name updateItem
 * @param {Item<K, D>} item - an Item object that represents the row.
 * @throws {Error} if a "remove" entry already exists for the same key.
 * @ojsignature {target: "Type",
 *               value: "(item: Item<K, D>): void"}
 */

/**
 * Get the list of all submittable edit items.
 * <p>
 * Caller should call setItemStatus to change the status
 * to "submitting" when ready to submit.  Once the edit item for a key is moved to 'submitting', new edit for the same
 * key will be tracked separately.  There can be at most one "submitting" edit item and one "unsubmitted" edit item for the same key.
 * </p>
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name getSubmittableItems
 * @return {Array<BufferingDataProvider.EditItem<K, D>>} an array of all submittable edit items.  Each edit item implements the {@link EditItem} interface.
 * @ojsignature {target: "Type",
 *               value: "(): Array<BufferingDataProvider.EditItem<K, D>>"}
 */

/**
 * Reset all rows by discarding all 'unsubmitted' edit items, so that the data from the underlying
 * DataProvider will be used.
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name resetAllUnsubmittedItems
 */

/**
 * Reset a row by discarding any 'unsubmitted' edit item for the row, so that the data from the underlying
 * DataProvider will be used.
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name resetUnsubmittedItem
 * @param {K} key - The key of the row to reset.
 * @ojsignature {target: "Type",
 *               value: "(key: K): void"}
 */

/**
 * Set the status of an edit item.
 * <p>
 * Application should set an edit item to 'submitting' before committing its change to the data source.  This will prevent
 * any new edit item with the same key from being changed to 'submitting'.
 * </p><p>
 * When setting an edit item from 'submitting' back to 'unsubmitted' (usually upon submission error),
 * and there is another 'unsubmitted' entry for the same key (this happens when edit is allowed while an edit item is submitting),
 * the error will be set on the new 'unsubmitted' entry and the current 'submitting' entry will be disposed.
 * </p><p>
 * when setting an edit item to 'submitted', the edit item will be removed from the buffer.
 * </p>
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof BufferingDataProvider
 * @instance
 * @method
 * @name setItemStatus
 * @param {BufferingDataProvider.EditItem<K, D>} editItem - The edit item to set status on.  This should implement the {@link EditItem} interface and is
 *   usually one of the items returned by the getSubmittableItems method.
 * @param {'unsubmitted' | 'submitting' | 'submitted'} newStatus - the new status of the edit item.
 *   If an edit item is marked as "submitted", it will be removed at the DataProvider's discretion.
 * @param {ItemMessage?} error - an optional error message.
 * @ojsignature {target: "Type",
 *               value: "(editItem: BufferingDataProvider.EditItem<K, D>, newStatus: 'unsubmitted' | 'submitting' | 'submitted', error?: ItemMessage): void"}
 */


/**
 * End of jsdoc
 */

/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */


/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/* jslint browser: true,devel:true*/
/**
 * The interface for EditItem
 *
 *
 * @since 9.0.0
 * @export
 * @interface EditItem
 * @ojtsnamespace BufferingDataProvider
 * @ojsignature {target: "Type",
 *               value: "interface EditItem<K, D>",
 *               genericParameters: [{"name": "K", "description": "Type of Key"}, {"name": "D", "description": "Type of Data"}]}
 */

/**
 * The type of buffered edit.
 * <p>
 * Possible values are:<ul>
 * <li>'add': The edit is for adding a new item to the data source.</li>
 * <li>'remove': The edit is for removing an existing item from the data source.</li>
 * <li>'update': The edit is for updating an existing item from the data source.</li>
 * </ul>
 * </p>
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof EditItem
 * @instance
 * @readonly
 * @name operation
 * @type {'add' | 'remove' | 'update'}
 * @ojsignature {target: "Type",
 *               value: "'add' | 'remove' | 'update'"}
 */

/**
 * The Item object that represents the edited item.
 *
 *
 * @since 9.0.0
 * @export
 * @expose
 * @memberof EditItem
 * @instance
 * @readonly
 * @name item
 * @type {ItemWithOptionalData<K, D>}
 * @ojsignature {target: "Type",
 *               value: "ItemWithOptionalData<K, D>"}
 */

/**
 * End of jsdoc
 */

class EditBuffer {
    constructor() {
        this.unsubmittedItems = new ojMap();
        this.submittingItems = new ojMap();
    }
    addItem(item) {
        let unsubmitted = this.unsubmittedItems.get(item.metadata.key);
        let submitting = this.submittingItems.get(item.metadata.key);
        if ((unsubmitted && (unsubmitted.operation === 'add' || unsubmitted.operation === 'update')) ||
            (submitting && (submitting.operation === 'add' || submitting.operation === 'update'))) {
            throw new Error('Cannot add item with same key as an item being added or updated');
        }
        else if (unsubmitted && unsubmitted.operation === 'remove') {
            if (unsubmitted.item.data && oj.Object.compareValues(unsubmitted.item.data, item.data)) {
                this.unsubmittedItems.delete(item.metadata.key);
            }
            else {
                this.unsubmittedItems.set(item.metadata.key, { operation: 'update', item: item });
            }
            return;
        }
        this.unsubmittedItems.set(item.metadata.key, { operation: 'add', item: item });
    }
    removeItem(item) {
        let unsubmitted = this.unsubmittedItems.get(item.metadata.key);
        let submitting = this.submittingItems.get(item.metadata.key);
        if ((unsubmitted && unsubmitted.operation === 'remove') ||
            (submitting && submitting.operation === 'remove')) {
            throw new Error('Cannot remove item with same key as an item being removed');
        }
        else if (unsubmitted && unsubmitted.operation === 'add') {
            this.unsubmittedItems.delete(item.metadata.key);
            return;
        }
        else if (unsubmitted && unsubmitted.operation === 'update') {
            this.unsubmittedItems.set(item.metadata.key, { operation: 'remove', item: item });
            return;
        }
        this.unsubmittedItems.set(item.metadata.key, { operation: 'remove', item: item });
    }
    updateItem(item) {
        let unsubmitted = this.unsubmittedItems.get(item.metadata.key);
        let submitting = this.submittingItems.get(item.metadata.key);
        if ((unsubmitted && unsubmitted.operation === 'remove') ||
            (submitting && submitting.operation === 'remove')) {
            throw new Error('Cannot update item with same key as an item being removed');
        }
        else if (unsubmitted &&
            (unsubmitted.operation === 'add' || unsubmitted.operation === 'update')) {
            this.unsubmittedItems.set(item.metadata.key, {
                operation: unsubmitted.operation,
                item: item
            });
            return;
        }
        this.unsubmittedItems.set(item.metadata.key, { operation: 'update', item: item });
    }
    setItemStatus(editItem, newStatus, error) {
        const key = editItem.item.metadata.key;
        if (newStatus === 'submitting') {
            this.unsubmittedItems.delete(key);
            this.submittingItems.set(key, editItem);
        }
        else if (newStatus === 'submitted') {
            this.submittingItems.delete(key);
        }
        else if (newStatus === 'unsubmitted') {
            this.submittingItems.delete(key);
            let newEditItem;
            if (error) {
                newEditItem = {
                    operation: editItem.operation,
                    item: {
                        data: editItem.item.data,
                        metadata: {
                            key: editItem.item.metadata.key,
                            message: error
                        }
                    }
                };
            }
            else {
                newEditItem = editItem;
            }
            this.unsubmittedItems.set(key, newEditItem);
        }
    }
    getUnsubmittedItems() {
        return this.unsubmittedItems;
    }
    getSubmittingItems() {
        return this.submittingItems;
    }
    isEmpty() {
        return this.unsubmittedItems.size === 0 && this.submittingItems.size === 0;
    }
    getItem(key) {
        let editItem = this.unsubmittedItems.get(key);
        if (!editItem) {
            editItem = this.submittingItems.get(key);
        }
        return editItem;
    }
}

class BufferingDataProviderSubmittableChangeEvent extends oj.GenericEvent {
    constructor(detail) {
        let eventOptions = {};
        eventOptions['detail'] = detail;
        super('submittableChange', eventOptions);
    }
}

class BufferingDataProvider {
    constructor(dataProvider, options) {
        this.dataProvider = dataProvider;
        this.options = options;
        this.AsyncIterable = class {
            constructor(_parent, _asyncIterator) {
                this._parent = _parent;
                this._asyncIterator = _asyncIterator;
                this[Symbol.asyncIterator] = function () {
                    return this._asyncIterator;
                };
            }
        };
        this.AsyncIterator = class {
            constructor(_parent, _baseIterator, _params) {
                this._parent = _parent;
                this._baseIterator = _baseIterator;
                this._params = _params;
                this.firstBaseKey = null;
                this.mergedAddKeySet = new ojSet();
                this.mergedItemArray = [];
                this.nextOffset = 0;
                if (this._params == null) {
                    this._params = {};
                }
            }
            _fetchNext() {
                return this._baseIterator.next().then((result) => {
                    if (!this.firstBaseKey && result.value.metadata.length) {
                        this.firstBaseKey = result.value.metadata[0].key;
                    }
                    if (result.value.fetchParameters && result.value.fetchParameters.sortCriteria) {
                        this._parent.lastSortCriteria = result.value.fetchParameters.sortCriteria;
                    }
                    let baseItemArray = result.value.data.map((val, index) => {
                        return { data: result.value.data[index], metadata: result.value.metadata[index] };
                    });
                    this._parent._mergeEdits(baseItemArray, this.mergedItemArray, this._params.filterCriterion, this._parent.lastSortCriteria, true, this.mergedAddKeySet, result.done);
                    let actualReturnSize = this.mergedItemArray.length - this.nextOffset;
                    for (let i = this.nextOffset; i < this.mergedItemArray.length; i++) {
                        const item = this.mergedItemArray[i];
                        if (this._parent._isItemRemoved(item.metadata.key)) {
                            --actualReturnSize;
                        }
                    }
                    const params = this._params || {};
                    if ((params.size && actualReturnSize < params.size) ||
                        (params.size == null && actualReturnSize === 0)) {
                        if (!result.done) {
                            return this._fetchNext();
                        }
                    }
                    let newDataArray = [];
                    let newMetaArray = [];
                    let idx;
                    for (idx = this.nextOffset; idx < this.mergedItemArray.length; idx++) {
                        ++this.nextOffset;
                        const item = this.mergedItemArray[idx];
                        if (!this._parent._isItemRemoved(item.metadata.key)) {
                            newDataArray.push(item.data);
                            newMetaArray.push(item.metadata);
                            if (params.size && newDataArray.length === params.size) {
                                break;
                            }
                        }
                    }
                    const done = result.done && newDataArray.length === 0;
                    return {
                        done: done,
                        value: { fetchParameters: this._params, data: newDataArray, metadata: newMetaArray }
                    };
                });
            }
            ['next']() {
                return this._fetchNext();
            }
        };
        this._addEventListeners(dataProvider);
        this.editBuffer = new EditBuffer();
        this.lastSortCriteria = null;
        this.lastIterator = null;
    }
    _fetchByKeysFromBuffer(params) {
        let results = new ojMap();
        let unresolvedKeys = new ojSet();
        params.keys.forEach((key) => {
            const editItem = this.editBuffer.getItem(key);
            if (editItem) {
                switch (editItem.operation) {
                    case 'add':
                    case 'update':
                        results.set(key, editItem.item);
                        break;
                    case 'remove':
                        break;
                }
            }
            else {
                unresolvedKeys.add(key);
            }
        });
        return {
            results: results,
            unresolvedKeys: unresolvedKeys
        };
    }
    _compareItem(d1, d2, sortCriteria) {
        for (let i = 0; i < sortCriteria.length; i++) {
            if (d1[sortCriteria[i].attribute] > d2[sortCriteria[i].attribute]) {
                return sortCriteria[i].direction === 'ascending' ? 1 : -1;
            }
            else if (d1[sortCriteria[i].attribute] < d2[sortCriteria[i].attribute]) {
                return sortCriteria[i].direction === 'ascending' ? -1 : 1;
            }
        }
        return 0;
    }
    _insertAddEdits(editItems, filterObj, sortCriteria, itemArray, mergedAddKeySet, lastBlock) {
        editItems.forEach((editItem, key) => {
            if (editItem.operation === 'add' && !mergedAddKeySet.has(key)) {
                if (!filterObj || filterObj.filter(editItem.item.data)) {
                    if (sortCriteria && sortCriteria.length) {
                        let inserted = false;
                        for (let i = 0; i < itemArray.length; i++) {
                            if (this._compareItem(editItem.item.data, itemArray[i].data, sortCriteria) < 0) {
                                itemArray.splice(i, 0, editItem.item);
                                mergedAddKeySet.add(key);
                                inserted = true;
                                break;
                            }
                        }
                        if (!inserted && lastBlock) {
                            itemArray.push(editItem.item);
                            mergedAddKeySet.add(key);
                        }
                    }
                    else {
                        itemArray.push(editItem.item);
                        mergedAddKeySet.add(key);
                    }
                }
            }
        });
    }
    _mergeAddEdits(filterObj, sortCriteria, newItemArray, mergedAddKeySet, lastBlock) {
        this._insertAddEdits(this.editBuffer.getUnsubmittedItems(), filterObj, sortCriteria, newItemArray, mergedAddKeySet, lastBlock);
        this._insertAddEdits(this.editBuffer.getSubmittingItems(), filterObj, sortCriteria, newItemArray, mergedAddKeySet, lastBlock);
    }
    _mergeEdits(baseItemArray, newItemArray, filterCriterion, sortCriteria, addToBeginning, mergedAddKeySet, lastBlock) {
        let filterObj;
        if (filterCriterion) {
            if (!filterCriterion.filter) {
                filterObj = FilterFactory.getFilter({
                    filterDef: filterCriterion,
                    filterOptions: this.options
                });
            }
            else {
                filterObj = filterCriterion;
            }
        }
        if (addToBeginning && !(sortCriteria && sortCriteria.length)) {
            this._mergeAddEdits(filterObj, sortCriteria, newItemArray, mergedAddKeySet, lastBlock);
        }
        for (let i = 0; i < baseItemArray.length; i++) {
            let baseItem = baseItemArray[i];
            let editItem = this.editBuffer.getItem(baseItem.metadata.key);
            if (!editItem) {
                newItemArray.push(baseItem);
            }
            else {
                if (editItem.operation === 'remove') {
                    newItemArray.push(baseItem);
                }
                else if (editItem.operation === 'update') {
                    if (!filterObj || filterObj.filter(editItem.item.data)) {
                        newItemArray.push(editItem.item);
                    }
                }
            }
        }
        if (sortCriteria && sortCriteria.length) {
            this._mergeAddEdits(filterObj, sortCriteria, newItemArray, mergedAddKeySet, lastBlock);
        }
    }
    _fetchFromOffset(params, newItemArray) {
        return this.dataProvider.fetchByOffset(params).then((baseResults) => {
            const editBuffer = this.editBuffer;
            if (!editBuffer.isEmpty()) {
                const baseItemArray = baseResults.results;
                let sortCriteria = null;
                if (baseResults.fetchParameters && baseResults.fetchParameters.sortCriteria) {
                    sortCriteria = baseResults.fetchParameters.sortCriteria;
                }
                else {
                    sortCriteria = params.sortCriteria;
                }
                this._mergeEdits(baseItemArray, newItemArray, params.filterCriterion, sortCriteria, params.offset === 0, new ojSet(), baseResults.done);
                let actualReturnSize = newItemArray.length;
                for (let i = 0; i < newItemArray.length; i++) {
                    if (this._isItemRemoved(newItemArray[i].metadata.key)) {
                        --actualReturnSize;
                    }
                }
                if ((params.size && actualReturnSize < params.size) ||
                    (params.size == null && actualReturnSize === 0)) {
                    if (!baseResults.done) {
                        const nextParams = {
                            attributes: params.attributes,
                            clientId: params.clientId,
                            filterCriterion: params.filterCriterion,
                            offset: params.offset + baseResults.results.length,
                            size: params.size,
                            sortCriteria: params.sortCriteria
                        };
                        return this._fetchFromOffset(nextParams, newItemArray);
                    }
                }
                for (let i = 0; i < newItemArray.length; i++) {
                    if (this._isItemRemoved(newItemArray[i].metadata.key)) {
                        newItemArray.splice(i, 1);
                        --i;
                    }
                }
                if (params.size && newItemArray.length > params.size) {
                    newItemArray.splice(params.size);
                }
                return { fetchParameters: params, results: newItemArray, done: baseResults.done };
            }
            return baseResults;
        });
    }
    containsKeys(params) {
        let bufferResult = this._fetchByKeysFromBuffer(params);
        let unresolvedKeys = bufferResult.unresolvedKeys;
        let results = new ojSet();
        bufferResult.results.forEach((value, key) => {
            results.add(key);
        });
        if (unresolvedKeys.size === 0) {
            return Promise.resolve({ containsParameters: params, results: results });
        }
        return this.dataProvider
            .containsKeys({ attributes: params.attributes, keys: unresolvedKeys, scope: params.scope })
            .then((baseResults) => {
            if (results.size > 0) {
                baseResults.results.forEach((value, key) => {
                    results.add(key);
                });
                return { containsParameters: params, results: results };
            }
            return baseResults;
        });
    }
    fetchByKeys(params) {
        let bufferResult = this._fetchByKeysFromBuffer(params);
        let unresolvedKeys = bufferResult.unresolvedKeys;
        let results = bufferResult.results;
        if (unresolvedKeys.size === 0) {
            return Promise.resolve({ fetchParameters: params, results: results });
        }
        return this.dataProvider
            .fetchByKeys({ attributes: params.attributes, keys: unresolvedKeys, scope: params.scope })
            .then((baseResults) => {
            if (results.size > 0) {
                baseResults.results.forEach((value, key) => {
                    results.set(key, value);
                });
                return { fetchParameters: params, results: results };
            }
            return baseResults;
        });
    }
    fetchByOffset(params) {
        return this._fetchFromOffset(params, []);
    }
    fetchFirst(params) {
        this.lastSortCriteria = params ? params.sortCriteria : null;
        const baseIterator = this.dataProvider.fetchFirst(params)[Symbol.asyncIterator]();
        this.lastIterator = new this.AsyncIterator(this, baseIterator, params);
        return new this.AsyncIterable(this, this.lastIterator);
    }
    getCapability(capabilityName) {
        return this.dataProvider.getCapability(capabilityName);
    }
    _calculateSizeChange(editItems) {
        let sizeChange = 0;
        editItems.forEach((value, key) => {
            if (value.operation === 'add') {
                ++sizeChange;
            }
            else if (value.operation === 'remove') {
                --sizeChange;
            }
        });
        return sizeChange;
    }
    getTotalSize() {
        return this.dataProvider.getTotalSize().then((totalSize) => {
            if (totalSize > -1) {
                totalSize += this._calculateSizeChange(this.editBuffer.getSubmittingItems());
                totalSize += this._calculateSizeChange(this.editBuffer.getUnsubmittedItems());
            }
            return totalSize;
        });
    }
    isEmpty() {
        const unsubmittedItems = this.editBuffer.getUnsubmittedItems();
        const submittingItems = this.editBuffer.getSubmittingItems();
        unsubmittedItems.forEach((item, key) => {
            if (item.operation === 'add' || item.operation === 'update') {
                return 'no';
            }
        });
        submittingItems.forEach((item, key) => {
            if (item.operation === 'add' || item.operation === 'update') {
                return 'no';
            }
        });
        let isEmpty = this.dataProvider.isEmpty();
        if (isEmpty === 'no') {
            if (unsubmittedItems.size > 0 || submittingItems.size > 0) {
                return 'unknown';
            }
        }
        return isEmpty;
    }
    _isItemRemoved(key) {
        const editItem = this.editBuffer.getItem(key);
        return editItem != null && editItem.operation === 'remove';
    }
    _addToMergedArrays(item) {
        let addBeforeKey = null;
        if (this.lastIterator) {
            const sortCriteria = this.lastSortCriteria;
            if (sortCriteria && sortCriteria.length) {
                const mergedItemArray = this.lastIterator.mergedItemArray;
                for (let i = 0; i < mergedItemArray.length; i++) {
                    if (this._compareItem(item.data, mergedItemArray[i].data, sortCriteria) < 0 &&
                        !this._isItemRemoved(mergedItemArray[i].metadata.key)) {
                        addBeforeKey = mergedItemArray[i].metadata.key;
                        mergedItemArray.splice(i, 0, item);
                        if (i < this.lastIterator.nextOffset) {
                            ++this.lastIterator.nextOffset;
                        }
                        break;
                    }
                }
            }
            else {
                addBeforeKey = this.lastIterator.firstBaseKey;
            }
        }
        return addBeforeKey;
    }
    addItem(item) {
        this.editBuffer.addItem(item);
        let addBeforeKey = this._addToMergedArrays(item);
        const detail = {
            add: {
                data: [item.data],
                keys: new ojSet().add(item.metadata.key),
                metadata: [item.metadata],
                addBeforeKeys: [addBeforeKey]
            }
        };
        const event = new DataProviderMutationEvent(detail);
        this.dispatchEvent(event);
        this._dispatchSubmittableChangeEvent();
    }
    _removeFromMergedArrays(key, fromBaseDP) {
        if (this.lastIterator) {
            const mergedItemArray = this.lastIterator.mergedItemArray;
            const mergedAddKeySet = this.lastIterator.mergedAddKeySet;
            const keyIdx = this._findKeyInItems(key, mergedItemArray);
            if (keyIdx !== -1) {
                if (fromBaseDP || mergedAddKeySet.has(key)) {
                    mergedItemArray.splice(keyIdx, 1);
                    mergedAddKeySet.delete(key);
                    if (keyIdx < this.lastIterator.nextOffset) {
                        --this.lastIterator.nextOffset;
                    }
                }
                else {
                    if (keyIdx === this.lastIterator.nextOffset - 1) {
                        --this.lastIterator.nextOffset;
                    }
                }
                if (oj.KeyUtils.equals(this.lastIterator.firstBaseKey, key)) {
                    this.lastIterator.firstBaseKey = null;
                    if (mergedItemArray.length > keyIdx) {
                        for (let i = keyIdx; i < mergedItemArray.length; i++) {
                            let newKey = mergedItemArray[i].metadata.key;
                            if (!this._isItemRemoved(newKey)) {
                                this.lastIterator.firstBaseKey = newKey;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    removeItem(item) {
        this.editBuffer.removeItem(item);
        this._removeFromMergedArrays(item.metadata.key, false);
        const detail = {
            remove: {
                data: item.data ? [item.data] : null,
                keys: new ojSet().add(item.metadata.key),
                metadata: [item.metadata]
            }
        };
        const event = new DataProviderMutationEvent(detail);
        this.dispatchEvent(event);
        this._dispatchSubmittableChangeEvent();
    }
    updateItem(item) {
        this.editBuffer.updateItem(item);
        const detail = {
            update: {
                data: [item.data],
                keys: new ojSet().add(item.metadata.key),
                metadata: [item.metadata]
            }
        };
        const event = new DataProviderMutationEvent(detail);
        this.dispatchEvent(event);
        this._dispatchSubmittableChangeEvent();
    }
    getSubmittableItems() {
        const unsubmitted = this.editBuffer.getUnsubmittedItems();
        const submitting = this.editBuffer.getSubmittingItems();
        let submittableItems = [];
        unsubmitted.forEach((editItem, key) => {
            if (!submitting.has(key)) {
                submittableItems.push(editItem);
            }
        });
        return submittableItems;
    }
    resetAllUnsubmittedItems() {
        this.editBuffer.getUnsubmittedItems().clear();
        this._dispatchSubmittableChangeEvent();
        this.dispatchEvent(new DataProviderRefreshEvent());
    }
    _addEventDetail(detail, detailType, detailItem, detailAddBeforeKey) {
        if (detail[detailType] == null) {
            if (detailType === 'add') {
                detail[detailType] = { data: [], keys: new ojSet(), metadata: [], addBeforeKeys: [] };
            }
            else {
                detail[detailType] = { data: [], keys: new ojSet(), metadata: [] };
            }
        }
        detail[detailType].keys.add(detailItem.metadata.key);
        detail[detailType].data.push(detailItem.data);
        detail[detailType].metadata.push(detailItem.metadata);
        if (detailType === 'add') {
            detail[detailType].addBeforeKeys.push(detailAddBeforeKey);
        }
    }
    resetUnsubmittedItem(key) {
        const unsubmittedItems = this.editBuffer.getUnsubmittedItems();
        let keySet = new ojSet();
        let editItemMap = new ojMap();
        const editItem = unsubmittedItems.get(key);
        if (editItem) {
            keySet.add(key);
            editItemMap.set(key, editItem);
            unsubmittedItems.delete(key);
        }
        this._dispatchSubmittableChangeEvent();
        this.dataProvider.fetchByKeys({ keys: keySet }).then((resultObj) => {
            let detail = {};
            let resultItem;
            editItemMap.forEach((editItem, key) => {
                if (editItem.operation === 'add') {
                    this._removeFromMergedArrays(editItem.item.metadata.key, false);
                    this._addEventDetail(detail, 'remove', editItem.item);
                }
                else if (editItem.operation === 'remove') {
                    resultItem = resultObj.results.get(key);
                    if (resultItem) {
                        let addBeforeKey = null;
                        if (this.lastIterator) {
                            let mergedItemArray = this.lastIterator.mergedItemArray;
                            const keyIdx = this._findKeyInItems(key, mergedItemArray);
                            if (keyIdx !== -1) {
                                for (let i = keyIdx + 1; i < mergedItemArray.length; i++) {
                                    if (!this._isItemRemoved(mergedItemArray[i].metadata.key)) {
                                        addBeforeKey = mergedItemArray[i].metadata.key;
                                        break;
                                    }
                                }
                            }
                        }
                        this._addEventDetail(detail, 'add', resultItem, addBeforeKey);
                    }
                }
                else {
                    resultItem = resultObj.results.get(key);
                    if (resultItem) {
                        this._addEventDetail(detail, 'update', resultItem);
                    }
                    else {
                        this._addEventDetail(detail, 'remove', editItem.item);
                    }
                }
            });
            this.dispatchEvent(new DataProviderMutationEvent(detail));
        });
    }
    setItemStatus(editItem, newStatus, error) {
        if (editItem) {
            this.editBuffer.setItemStatus(editItem, newStatus, error);
            this._dispatchSubmittableChangeEvent();
        }
    }
    _dispatchSubmittableChangeEvent() {
        const submittable = this.getSubmittableItems();
        const event = new BufferingDataProviderSubmittableChangeEvent(submittable);
        this.dispatchEvent(event);
    }
    _findKeyInMetadata(key, metadata) {
        if (metadata) {
            for (let i = 0; i < metadata.length; i++) {
                if (oj.KeyUtils.equals(key, metadata[i].key)) {
                    return i;
                }
            }
        }
        return -1;
    }
    _findKeyInItems(key, items) {
        if (items) {
            for (let i = 0; i < items.length; i++) {
                if (oj.KeyUtils.equals(key, items[i].metadata.key)) {
                    return i;
                }
            }
        }
        return -1;
    }
    _initDetailProp(detail, newDetail, propName, initValue) {
        if (detail[propName]) {
            newDetail[propName] = initValue;
        }
    }
    _pushDetailProp(detail, newDetail, propName, idx) {
        if (detail[propName]) {
            newDetail[propName].push(detail[propName][idx]);
        }
    }
    _getOperationDetail(detail, isRemoveDetail) {
        if (detail) {
            let newDetail = {};
            const submittingItems = this.editBuffer.getSubmittingItems();
            const unsubmittedItems = this.editBuffer.getUnsubmittedItems();
            if (submittingItems.size === 0 && unsubmittedItems.size === 0) {
                this._initDetailProp(detail, newDetail, 'data', detail.data);
                this._initDetailProp(detail, newDetail, 'metadata', detail.metadata);
                this._initDetailProp(detail, newDetail, 'addBeforeKeys', detail.addBeforeKeys);
                this._initDetailProp(detail, newDetail, 'parentKeys', detail.parentKeys);
            }
            else {
                newDetail.keys = new ojSet();
                this._initDetailProp(detail, newDetail, 'data', []);
                this._initDetailProp(detail, newDetail, 'metadata', []);
                this._initDetailProp(detail, newDetail, 'addBeforeKeys', []);
                this._initDetailProp(detail, newDetail, 'parentKeys', []);
                detail.keys.forEach((key) => {
                    let skipItem = submittingItems.get(key) != null;
                    if (!skipItem) {
                        const editItem = unsubmittedItems.get(key);
                        skipItem = editItem && editItem.operation === 'remove';
                    }
                    if (!skipItem) {
                        newDetail.keys.add(key);
                        if (detail.metadata) {
                            let idx = this._findKeyInMetadata(key, detail.metadata);
                            if (idx > -1) {
                                this._pushDetailProp(detail, newDetail, 'data', idx);
                                this._pushDetailProp(detail, newDetail, 'metadata', idx);
                                this._pushDetailProp(detail, newDetail, 'addBeforeKeys', idx);
                                this._pushDetailProp(detail, newDetail, 'parentKeys', idx);
                            }
                        }
                    }
                    if (isRemoveDetail) {
                        const editItem = unsubmittedItems.get(key);
                        if (editItem && (editItem.operation === 'remove' || editItem.operation === 'update')) {
                            unsubmittedItems.delete(key);
                        }
                    }
                });
                return newDetail;
            }
        }
        return detail;
    }
    _handleRefreshEvent(event) {
        let unsubmittedItems = this.editBuffer.getUnsubmittedItems();
        let keySet = new ojSet();
        unsubmittedItems.forEach((editItem) => {
            if (editItem.operation === 'remove' || editItem.operation === 'update') {
                keySet.add(editItem.item.metadata.key);
            }
        });
        if (keySet.size > 0) {
            this.dataProvider.fetchByKeys({ keys: keySet }).then((resultObj) => {
                resultObj.results.forEach((item, key) => {
                    keySet.delete(key);
                });
                keySet.forEach((key) => {
                    unsubmittedItems.delete(key);
                });
                this.dispatchEvent(event);
            });
        }
        else {
            this.dispatchEvent(event);
        }
    }
    _handleMutateEvent(event) {
        if (event.detail.remove) {
            event.detail.remove.keys.forEach((key) => {
                this._removeFromMergedArrays(key, true);
            });
        }
        const detailAdd = event.detail.add;
        if (detailAdd && detailAdd.metadata && detailAdd.data) {
            detailAdd.metadata.forEach((metadata, idx) => {
                this._addToMergedArrays({ metadata: detailAdd.metadata[idx], data: detailAdd.data[idx] });
            });
        }
        let newAddDetail = this._getOperationDetail(event.detail.add, false);
        let newRemoveDetail = this._getOperationDetail(event.detail.remove, true);
        let newUpdateDetail = this._getOperationDetail(event.detail.update, false);
        let newEventDetail = {
            add: newAddDetail,
            remove: newRemoveDetail,
            update: newUpdateDetail
        };
        this.dispatchEvent(new DataProviderMutationEvent(newEventDetail));
    }
    _addEventListeners(dataprovider) {
        dataprovider[BufferingDataProvider._ADDEVENTLISTENER](BufferingDataProvider._REFRESH, this._handleRefreshEvent.bind(this));
        dataprovider[BufferingDataProvider._ADDEVENTLISTENER](BufferingDataProvider._MUTATE, this._handleMutateEvent.bind(this));
    }
}
BufferingDataProvider._REFRESH = 'refresh';
BufferingDataProvider._MUTATE = 'mutate';
BufferingDataProvider._ADDEVENTLISTENER = 'addEventListener';
EventTargetMixin.applyMixin(BufferingDataProvider);
oj._registerLegacyNamespaceProp('BufferingDataProvider', BufferingDataProvider);

export default BufferingDataProvider;
