/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(['exports', 'ojs/ojvcomponent-element', 'ojs/ojdatacollection-common', 'ojs/ojvcollection', 'ojs/ojcontext', 'ojs/ojcore-base', 'ojs/ojkeyset', 'ojs/ojtreedataprovider', 'ojs/ojanimation', 'ojs/ojthemeutils', 'ojs/ojdomutils'], function (exports, ojvcomponentElement, DataCollectionUtils, ojvcollection, Context, oj, ojkeyset, ojtreedataprovider, AnimationUtils, ThemeUtils, DomUtils) { 'use strict';

    Context = Context && Object.prototype.hasOwnProperty.call(Context, 'default') ? Context['default'] : Context;
    oj = oj && Object.prototype.hasOwnProperty.call(oj, 'default') ? oj['default'] : oj;

    class StreamListContentHandler extends ojvcollection.IteratingDataProviderContentHandler {
        constructor(root, dataProvider, callback, scrollPolicyOptions) {
            super(root, dataProvider, callback, scrollPolicyOptions);
            this.root = root;
            this.dataProvider = dataProvider;
            this.callback = callback;
            this.scrollPolicyOptions = scrollPolicyOptions;
            this.postRender = () => {
                this.vnodesCache = this.newVnodesCache;
                this.newVnodesCache = new Map();
                if (this.callback) {
                    if (this.domScroller) {
                        const itemsRoot = this.root.lastElementChild;
                        let items = itemsRoot.querySelectorAll('.oj-stream-list-item');
                        const rootOffsetTop = this.root.offsetTop;
                        const start = items[0].offsetTop - rootOffsetTop;
                        const end = items[items.length - 1].offsetTop + items[items.length - 1].offsetHeight - rootOffsetTop;
                        this.domScroller.setViewportRange(start, end);
                    }
                    if (this.domScroller && !this.domScroller.checkViewport()) {
                        return;
                    }
                }
            };
            this.newItemsTracker = new Set();
            this.vnodesCache = new Map();
            this.newVnodesCache = new Map();
        }
        fetchSuccess(result) {
            if (result != null) {
                this.newItemsTracker.clear();
            }
            super.fetchSuccess(result);
        }
        handleItemsUpdated(detail) {
            detail.keys.forEach(function (key) {
                this.vnodesCache.delete(key);
            }.bind(this));
            super.handleItemsUpdated(detail);
        }
        handleItemsRemoved(detail) {
            detail.keys.forEach(function (key) {
                this.vnodesCache.delete(key);
            }.bind(this));
            super.handleItemsRemoved(detail);
        }
        handleModelRefresh() {
            this.vnodesCache.clear();
            super.handleModelRefresh();
        }
        addItem(key, index, data, visible) {
            const initialFetch = this.isInitialFetch();
            const currentItem = this.callback.getCurrentItem();
            if (currentItem == null && initialFetch && index == 0) {
                this.callback.setCurrentItem(key);
            }
            const vnodes = this.renderItem(key, index, data);
            this.decorateItem(vnodes, key, index, initialFetch, visible);
            return vnodes;
        }
        renderItem(key, index, data) {
            const node = this.vnodesCache.get(key);
            if (node) {
                this.newVnodesCache.set(key, { vnodes: node.vnodes });
                return node.vnodes;
            }
            const renderer = this.callback.getItemRenderer();
            const vnodes = renderer({ data: data, key: key });
            let vnode;
            for (let i = 0; i < vnodes.length; i++) {
                const node = vnodes[i]._node;
                if (node.nodeType === 1) {
                    vnode = vnodes[i];
                    break;
                }
            }
            let prunedVnodes = [vnode];
            this.newVnodesCache.set(key, { vnodes: prunedVnodes });
            return prunedVnodes;
        }
        decorateItem(vnodes, key, index, initialFetch, visible) {
            let vnode = vnodes[0];
            let contentRoot = vnode._node;
            if (contentRoot != null) {
                vnode.key = key;
                contentRoot.key = key;
                contentRoot.setAttribute('role', 'listitem');
                contentRoot.setAttribute('tabIndex', '-1');
                const styleClasses = this.getItemStyleClass(visible, this.newItemsTracker.has(key), initialFetch);
                styleClasses.forEach((styleClass) => {
                    contentRoot.classList.add(styleClass);
                });
            }
        }
        getItemStyleClass(visible, isNew, animate) {
            let styleClass = [];
            styleClass.push('oj-stream-list-item');
            if (animate) {
            }
            return styleClass;
        }
        renderSkeletonsForLoadMore() {
            return this.callback.renderSkeletons(3);
        }
    }

    class StreamListTreeContentHandler extends ojvcollection.IteratingTreeDataProviderContentHandler {
        constructor(root, dataProvider, callback, scrollPolicyOptions) {
            super(root, dataProvider, callback, scrollPolicyOptions);
            this.root = root;
            this.dataProvider = dataProvider;
            this.callback = callback;
            this.scrollPolicyOptions = scrollPolicyOptions;
            this.postRender = () => {
                this.vnodesCache = this.newVnodesCache;
                this.newVnodesCache = new Map();
                const itemsRoot = this.root.lastElementChild;
                if (itemsRoot) {
                    this.checkViewport();
                }
            };
            this.getLoadMoreCount = () => {
                return 3;
            };
            this.newItemsTracker = new Set();
            this.vnodesCache = new Map();
            this.newVnodesCache = new Map();
        }
        handleFetchSuccess(result) {
            if (result != null) {
                this.newItemsTracker.clear();
            }
            super.handleFetchSuccess(result);
        }
        handleItemsUpdated(detail) {
            detail.keys.forEach(function (key) {
                this.vnodesCache.delete(key);
            }.bind(this));
            super.handleItemsUpdated(detail);
        }
        handleItemsRemoved(detail) {
            detail.keys.forEach(function (key) {
                this.vnodesCache.delete(key);
            }.bind(this));
            super.handleItemsRemoved(detail);
        }
        handleModelRefresh() {
            this.vnodesCache.clear();
            super.handleModelRefresh();
        }
        checkViewport() {
            if (this.viewportResolveFunc) {
                return;
            }
            this.viewportResolveFunc = this.addBusyState('checking viewport');
            const itemsRoot = this.root.lastElementChild;
            if (itemsRoot) {
                const busyContext = Context.getContext(itemsRoot).getBusyContext();
                busyContext.whenReady().then(() => {
                    if (this.callback != null) {
                        super.checkViewport();
                        if (this.viewportResolveFunc) {
                            this.viewportResolveFunc();
                        }
                        this.viewportResolveFunc = null;
                    }
                }, () => {
                    if (this.viewportResolveFunc) {
                        this.viewportResolveFunc();
                    }
                    this.viewportResolveFunc = null;
                });
            }
        }
        addItem(metadata, index, data, visible) {
            const initialFetch = this.isInitialFetch();
            const currentItem = this.callback.getCurrentItem();
            if (currentItem == null && initialFetch && index == 0) {
                this.callback.setCurrentItem(metadata.key);
            }
            const vnodes = this.renderItem(metadata, index, data);
            this.decorateItem(vnodes, metadata, index, initialFetch, visible);
            return vnodes;
        }
        renderItem(metadata, index, data) {
            let key = metadata.key;
            const node = this.vnodesCache.get(key);
            if (node) {
                this.newVnodesCache.set(key, { vnodes: node.vnodes });
                return node.vnodes;
            }
            let renderer;
            let vnodes;
            if (!metadata.isLeaf) {
                renderer = this.callback.getGroupRenderer();
            }
            if (renderer == null) {
                renderer = this.callback.getItemRenderer();
            }
            vnodes = renderer({
                data: data,
                key: metadata.key,
                leaf: metadata.isLeaf,
                parentKey: metadata.parentKey,
                depth: metadata.treeDepth
            });
            let vnode;
            for (let i = 0; i < vnodes.length; i++) {
                const node = vnodes[i]._node;
                if (node.nodeType === 1) {
                    vnode = vnodes[i];
                    break;
                }
            }
            let prunedVnodes = [vnode];
            this.newVnodesCache.set(key, { vnodes: prunedVnodes });
            return prunedVnodes;
        }
        decorateItem(vnodes, metadata, index, initialFetch, visible) {
            let vnode = vnodes[0];
            let contentRoot = vnode._node;
            if (contentRoot != null) {
                vnode.key = metadata.key;
                contentRoot.key = metadata.key;
                contentRoot.setAttribute('role', 'listitem');
                contentRoot.setAttribute('tabIndex', '-1');
                const styleClasses = this.getItemStyleClass(metadata, visible, this.newItemsTracker.has(metadata.key), initialFetch);
                styleClasses.forEach((styleClass) => {
                    contentRoot.classList.add(styleClass);
                });
                if (!metadata.isLeaf) {
                    let expandedProp = this.callback.getExpanded();
                    let expanded = expandedProp && expandedProp.has(metadata.key);
                    if (expanded) {
                        contentRoot.setAttribute('aria-expanded', 'true');
                    }
                    else {
                        contentRoot.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        }
        getItemStyleClass(metadata, visible, isNew, animate) {
            let styleClass = [];
            if (!metadata.isLeaf) {
                styleClass.push('oj-stream-list-group');
            }
            else {
                styleClass.push('oj-stream-list-item');
            }
            if (animate) {
            }
            return styleClass;
        }
        renderSkeletonsForLoadMore() {
            return this.callback.renderSkeletons(3);
        }
        renderSkeletonsForExpand(key) {
            return this.callback.renderSkeletons(this.getLoadMoreCount(), true, key);
        }
    }

    var __decorate = (null && null.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var StreamList_1;
    class Props {
        constructor() {
            this.data = null;
            this.expanded = new ojkeyset.KeySetImpl();
            this.scrollPolicy = 'loadMoreOnScroll';
            this.scrollPolicyOptions = {
                fetchSize: 25,
                maxCount: 500,
                scroller: null
            };
            this.scrollPosition = { y: 0 };
        }
    }
    exports.StreamList = StreamList_1 = class StreamList extends ojvcomponentElement.ElementVComponent {
        constructor(props) {
            super(props);
            this.restoreFocus = false;
            this.actionableMode = false;
            this.skeletonHeight = 0;
            this.height = 0;
            this.setRootElement = (element) => {
                this.root = element;
            };
            this.state = {
                renderedData: null,
                outOfRangeData: null,
                initialSkeleton: false,
                initialSkeletonCount: 1,
                expandedToggleKeys: new ojkeyset.KeySetImpl(),
                expandedSkeletonKeys: new ojkeyset.KeySetImpl(),
                expandingKeys: new ojkeyset.KeySetImpl(),
                toCollapse: []
            };
        }
        _handleFocusIn(event) {
            this._clearFocusoutTimeout();
            let target = event.target;
            let item = target.closest('.oj-stream-list-item, .oj-stream-list-group');
            if (item && this._isFocusable(target, item)) {
                this._enterActionableMode(target);
            }
            else if (this.currentItem && !this.actionableMode) {
                this.focusInHandler(this.currentItem);
            }
        }
        _handleFocusOut() {
            this._clearFocusoutTimeout();
            if (this.actionableMode) {
                this._focusoutTimeout = setTimeout(function () {
                    this._doBlur();
                }.bind(this), 100);
            }
            else if (!this._isFocusBlurTriggeredByDescendent(event)) {
                this._doBlur();
            }
        }
        _clearFocusoutTimeout() {
            if (this._focusoutTimeout) {
                clearTimeout(this._focusoutTimeout);
                this._focusoutTimeout = null;
            }
        }
        _handleClick(event) {
            let target = event.target;
            let group = target.closest('.' + this.getGroupStyleClass());
            if (group) {
                let key = group.key;
                let expanded = this.props.expanded.has(key);
                this._handleToggleExpanded(key, expanded);
            }
            this._handleTouchOrClickEvent(event);
        }
        _handleToggleExpanded(key, expanded) {
            this.updateState(function (state, props) {
                var _a, _b;
                let expandedToggleKeys = state.expandedToggleKeys;
                if (!expandedToggleKeys.has(key)) {
                    expandedToggleKeys = expandedToggleKeys.add([key]);
                    let newExpanded = props.expanded;
                    expandedToggleKeys.values().forEach((key) => {
                        if (expanded) {
                            newExpanded = newExpanded.delete([key]);
                        }
                        else {
                            newExpanded = newExpanded.add([key]);
                        }
                    });
                    (_b = (_a = this.props).onExpandedChanged) === null || _b === void 0 ? void 0 : _b.call(_a, newExpanded);
                    return { expandedToggleKeys: expandedToggleKeys };
                }
                return {};
            }.bind(this));
        }
        _handleKeyDown(event) {
            if (this.currentItem) {
                let next;
                switch (event.key) {
                    case DataCollectionUtils.KEYBOARD_KEYS._LEFT:
                    case DataCollectionUtils.KEYBOARD_KEYS._LEFT_IE:
                    case DataCollectionUtils.KEYBOARD_KEYS._RIGHT:
                    case DataCollectionUtils.KEYBOARD_KEYS._RIGHT_IE: {
                        if (this.currentItem.classList.contains(this.getGroupStyleClass())) {
                            let group = this.currentItem;
                            let key = group.key;
                            let expanded = this.props.expanded.has(key);
                            if (((event.key === DataCollectionUtils.KEYBOARD_KEYS._RIGHT ||
                                event.key === DataCollectionUtils.KEYBOARD_KEYS._RIGHT_IE) &&
                                !expanded) ||
                                ((event.key === DataCollectionUtils.KEYBOARD_KEYS._LEFT ||
                                    event.key === DataCollectionUtils.KEYBOARD_KEYS._LEFT_IE) &&
                                    expanded)) {
                                this._handleToggleExpanded(key, expanded);
                            }
                        }
                        break;
                    }
                    case DataCollectionUtils.KEYBOARD_KEYS._UP:
                    case DataCollectionUtils.KEYBOARD_KEYS._UP_IE: {
                        if (this.actionableMode === false) {
                            next = this.currentItem.previousElementSibling;
                            while (next &&
                                next.previousElementSibling &&
                                next.classList.contains('oj-stream-list-skeleton')) {
                                next = next.previousElementSibling;
                            }
                        }
                        break;
                    }
                    case DataCollectionUtils.KEYBOARD_KEYS._DOWN:
                    case DataCollectionUtils.KEYBOARD_KEYS._DOWN_IE: {
                        if (this.actionableMode === false) {
                            next = this.currentItem.nextElementSibling;
                            while (next &&
                                next.nextElementSibling &&
                                next.classList.contains('oj-stream-list-skeleton')) {
                                next = next.nextElementSibling;
                            }
                        }
                        break;
                    }
                    case DataCollectionUtils.KEYBOARD_KEYS._F2: {
                        if (this.actionableMode === false) {
                            this._enterActionableMode();
                        }
                        break;
                    }
                    case DataCollectionUtils.KEYBOARD_KEYS._ESCAPE:
                    case DataCollectionUtils.KEYBOARD_KEYS._ESCAPE_IE: {
                        if (this.actionableMode === true) {
                            this._exitActionableMode(true);
                        }
                        break;
                    }
                    case DataCollectionUtils.KEYBOARD_KEYS._TAB: {
                        if (this.actionableMode === true && this.currentItem) {
                            if (event.shiftKey) {
                                if (DataCollectionUtils.handleActionablePrevTab(event, this.currentItem)) {
                                    event.preventDefault();
                                }
                            }
                            else {
                                if (DataCollectionUtils.handleActionableTab(event, this.currentItem)) {
                                    event.preventDefault();
                                }
                            }
                        }
                        break;
                    }
                }
                if (next != null &&
                    (next.classList.contains(this.getItemStyleClass()) ||
                        next.classList.contains(this.getGroupStyleClass()))) {
                    this._updateCurrentItemAndFocus(next, true);
                    event.preventDefault();
                }
            }
        }
        _touchStartHandler(event) {
            this._handleTouchOrClickEvent(event);
        }
        render() {
            const initialSkeleton = this.state.initialSkeleton;
            const initialSkeletonCount = this.state.initialSkeletonCount;
            let content;
            if (this.contentHandler == null && initialSkeleton) {
                content = this._renderInitialSkeletons(initialSkeletonCount);
            }
            else {
                const data = this.getData();
                if ((data != null && initialSkeleton) || data == null) {
                    content = this._renderInitialSkeletons(initialSkeletonCount, data == null);
                }
                else if (data != null) {
                    content = this.contentHandler.render();
                    if (this.currentItem &&
                        this.currentItem.contains(document.activeElement) &&
                        !this.actionableMode) {
                        this.restoreFocus = true;
                    }
                }
            }
            return (ojvcomponentElement.h("oj-stream-list", { ref: this.setRootElement },
                ojvcomponentElement.h("div", { role: 'list', "data-oj-context": true, onClick: this._handleClick, onKeydown: this._handleKeyDown, onTouchstart: this._touchStartHandler, onFocusin: this._handleFocusIn, onFocusout: this._handleFocusOut }, content)));
        }
        _doBlur() {
            if (this.actionableMode) {
                this._exitActionableMode(false);
            }
            if (this.currentItem) {
                this.focusOutHandler(this.currentItem);
            }
        }
        _isFocusBlurTriggeredByDescendent(event) {
            if (event.relatedTarget === undefined) {
                return true;
            }
            if (event.relatedTarget == null || !this.root.contains(event.relatedTarget)) {
                return false;
            }
            return true;
        }
        _renderInitialSkeletons(count, shouldScroll) {
            if (shouldScroll) {
                const scroller = this._getScroller();
                if (scroller != null && scroller === this.root) {
                    scroller.scrollTop = 0;
                }
            }
            return this.renderSkeletons(count);
        }
        renderSkeletons(count, indented, key) {
            let skeletons = [];
            let isTreeData = this._isTreeData();
            let skeletonKey;
            for (let i = 0; i < count; i++) {
                let shouldIndent = indented;
                if (!indented && isTreeData && i % 4) {
                    shouldIndent = true;
                }
                if (key) {
                    skeletonKey = key + '_' + i;
                }
                skeletons.push(this._renderSkeleton(shouldIndent, skeletonKey));
            }
            return skeletons;
        }
        _renderSkeleton(indented, key) {
            let className = 'oj-stream-list-skeleton';
            if (indented) {
                className += ' oj-stream-list-child-skeleton';
            }
            return (ojvcomponentElement.h("div", { class: className, key: key },
                ojvcomponentElement.h("div", { class: 'oj-stream-list-skeleton-content oj-animation-skeleton' })));
        }
        _applySkeletonExitAnimation(skeletons) {
            const resolveFunc = this.addBusyState('apply skeleton exit animations');
            return new Promise((resolve, reject) => {
                let promises = [];
                skeletons.forEach((skeleton) => {
                    promises.push(AnimationUtils.fadeOut(skeleton));
                });
                Promise.all(promises).then(function () {
                    resolveFunc();
                    resolve(true);
                });
            });
        }
        _isTreeData() {
            var data = this.props.data;
            return data != null && this.instanceOfTreeDataProvider(data);
        }
        instanceOfTreeDataProvider(object) {
            return 'getChildDataProvider' in object;
        }
        _postRender() {
            this._registerScrollHandler();
            const data = this.getData();
            let initialSkeleton = this.state.initialSkeleton;
            if (data != null && initialSkeleton) {
                let skeletons = this.getRootElement().querySelectorAll('.oj-stream-list-skeleton');
                this._applySkeletonExitAnimation(skeletons).then(function () {
                    this.updateState({ initialSkeleton: false });
                }.bind(this));
            }
            else if (data != null) {
                this.contentHandler.postRender();
            }
            let items = this.root.querySelectorAll('.oj-stream-list-item, .oj-stream-list-group');
            this._disableAllTabbableElements(items);
            this._restoreCurrentItem(items);
        }
        _getScrollPolicyOptions() {
            return {
                fetchSize: this.props.scrollPolicyOptions.fetchSize,
                maxCount: this.props.scrollPolicyOptions.maxCount,
                scroller: this._getScroller()
            };
        }
        mounted() {
            var data = this.props.data;
            if (this._isTreeData()) {
                this.contentHandler = new StreamListTreeContentHandler(this.root, data, this, this._getScrollPolicyOptions());
            }
            else if (data != null) {
                this.contentHandler = new StreamListContentHandler(this.root, data, this, this._getScrollPolicyOptions());
            }
            this.contentHandler.fetchRows();
            this.height = this.root.clientHeight;
            let skeleton = this.root.querySelector('.oj-stream-list-skeleton');
            if (skeleton) {
                this.skeletonHeight = this.outerHeight(skeleton);
                this._delayShowSkeletons();
            }
            if (window['ResizeObserver']) {
                let root = this.root;
                const resizeObserver = new window['ResizeObserver']((entries) => {
                    entries.forEach((entry) => {
                        if (entry.target === root && entry.contentRect) {
                            const currHeight = this.height;
                            const newHeight = Math.round(entry.contentRect.height);
                            if (Math.abs(newHeight - currHeight) > 1) {
                                this.height = newHeight;
                                if (this.contentHandler) {
                                    this.contentHandler.checkViewport();
                                }
                            }
                        }
                    });
                });
                resizeObserver.observe(root);
                this.resizeObserver = resizeObserver;
            }
            DomUtils.makeFocusable({
                applyHighlight: true,
                setupHandlers: (focusInHandler, focusOutHandler) => {
                    let noJQHandlers = DataCollectionUtils.getNoJQFocusHandlers(focusInHandler, focusOutHandler);
                    this.focusInHandler = noJQHandlers.focusIn;
                    this.focusOutHandler = noJQHandlers.focusOut;
                }
            });
            this._postRender();
        }
        getSkeletonHeight() {
            return this.skeletonHeight;
        }
        outerHeight(el) {
            let height = el.offsetHeight;
            let style = getComputedStyle(el);
            height += parseInt(style.marginTop) + parseInt(style.marginBottom);
            return height;
        }
        unmounted() {
            if (this.contentHandler) {
                this.contentHandler.destroy();
            }
            this.contentHandler = null;
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
            }
            this.resizeObserver = null;
            this._unregisterScrollHandler();
        }
        _delayShowSkeletons() {
            window.setTimeout(() => {
                const data = this.getData();
                if (data == null) {
                    this.updateState((state) => {
                        return {
                            initialSkeletonCount: Math.max(1, Math.floor(this.height / this.skeletonHeight))
                        };
                    });
                }
            }, this._getShowSkeletonsDelay());
        }
        _getOptionDefaults() {
            if (this.defaultOptions == null) {
                this.defaultOptions = ThemeUtils.parseJSONFromFontFamily('oj-streamlist-option-defaults');
            }
            return this.defaultOptions;
        }
        _getShowSkeletonsDelay() {
            const defaultOptions = this._getOptionDefaults();
            if (defaultOptions == null) {
                return 0;
            }
            const delay = parseInt(defaultOptions.showIndicatorDelay, 10);
            return isNaN(delay) ? 0 : delay;
        }
        getRootElement() {
            return this.root;
        }
        updated(oldProps, oldState) {
            if (this._isTreeData() && this.contentHandler.collapse) {
                this.contentHandler.collapse(this.state.toCollapse);
            }
            let oldExpandingKeys = oldState.expandingKeys;
            let expandingKeys = this.state.expandingKeys;
            expandingKeys.values().forEach(function (key) {
                if (!oldExpandingKeys.has(key)) {
                    this.contentHandler.expand(key);
                }
            }.bind(this));
            if (this.props.data != oldProps.data) {
                if (this.contentHandler) {
                    this.contentHandler.destroy();
                }
                this.setCurrentItem(null);
                this.updateState({
                    renderedData: null,
                    outOfRangeData: null,
                    initialSkeleton: true,
                    initialSkeletonCount: this.state.initialSkeletonCount,
                    expandedToggleKeys: new ojkeyset.KeySetImpl(),
                    expandedSkeletonKeys: new ojkeyset.KeySetImpl(),
                    expandingKeys: new ojkeyset.KeySetImpl()
                });
                if (this._isTreeData()) {
                    this.contentHandler = new StreamListTreeContentHandler(this.root, this.props.data, this, this._getScrollPolicyOptions());
                }
                else if (this.props.data != null) {
                    this.contentHandler = new StreamListContentHandler(this.root, this.props.data, this, this._getScrollPolicyOptions());
                }
                this.contentHandler.fetchRows();
                this._delayShowSkeletons();
            }
            this._postRender();
            if (!oj.Object.compareValues(this.props.scrollPosition, oldProps.scrollPosition) &&
                !oj.Object.compareValues(this.props.scrollPosition, this.lastInternalScrollPositionUpdate)) {
                this._syncScrollTopWithProps();
            }
        }
        static initStateFromProps(props, state) {
            return StreamList_1.updateStateFromProps(props, state, null);
        }
        static updateStateFromProps(props, state, oldProps) {
            let { expandedToggleKeys, expandingKeys, renderedData, expandedSkeletonKeys } = state;
            let toCollapse = [];
            let newExpanded = props.expanded;
            if (oldProps && newExpanded !== oldProps.expanded) {
                let oldExpanded = oldProps.expanded;
                expandedToggleKeys.values().forEach((key) => {
                    if (oldExpanded.has(key) !== newExpanded.has(key)) {
                        expandedToggleKeys = expandedToggleKeys.delete([key]);
                    }
                });
                renderedData.value.metadata.forEach((itemMetadata) => {
                    let key = itemMetadata.key;
                    let itemExpanded = itemMetadata.expanded;
                    let isExpanded = newExpanded.has(key);
                    if (itemExpanded && !isExpanded) {
                        toCollapse.push(key);
                        itemMetadata.expanded = false;
                    }
                    else if (!itemExpanded && isExpanded) {
                        expandingKeys = expandingKeys.add([key]);
                        itemMetadata.expanded = true;
                    }
                });
                toCollapse.forEach((key) => {
                    renderedData = StreamList_1.collapse(key, renderedData);
                    expandingKeys = expandingKeys.delete([key]);
                    expandedSkeletonKeys = expandedSkeletonKeys.delete([key]);
                });
                return {
                    renderedData,
                    expandingKeys,
                    expandedToggleKeys,
                    expandedSkeletonKeys,
                    toCollapse
                };
            }
            return { toCollapse };
        }
        static _findIndex(metadata, key) {
            for (let i = 0; i < metadata.length; i++) {
                if (oj.KeyUtils.equals(key, metadata[i].key)) {
                    return i;
                }
            }
            return -1;
        }
        _unregisterScrollHandler() {
            let scrollElement = this._getScrollEventElement();
            scrollElement.removeEventListener('scroll', this.scrollListener);
        }
        _registerScrollHandler() {
            let scrollElement = this._getScrollEventElement();
            this._unregisterScrollHandler();
            scrollElement.addEventListener('scroll', this.scrollListener);
        }
        scrollListener() {
            var self = this;
            if (this.getData() != null && !this._ticking) {
                window.requestAnimationFrame(function () {
                    self._updateScrollPosition();
                    self._ticking = false;
                });
                this._ticking = true;
            }
        }
        _updateScrollPosition() {
            var _a, _b;
            let scrollPosition = {};
            let scrollTop = this._getScroller().scrollTop;
            let result = this._findClosestElementToTop(scrollTop);
            scrollPosition.y = scrollTop;
            if (result != null) {
                let elem = result.elem;
                scrollPosition.offsetY = result.offsetY;
                scrollPosition.key = elem.key;
                if (this._isTreeData() && elem.classList.contains('oj-stream-list-item')) {
                    scrollPosition.parentKey = this._getParentKey(elem);
                }
                else {
                    scrollPosition.parentKey = null;
                }
            }
            this.lastInternalScrollPositionUpdate = scrollPosition;
            (_b = (_a = this.props).onScrollPositionChanged) === null || _b === void 0 ? void 0 : _b.call(_a, scrollPosition);
        }
        _syncScrollTopWithProps() {
            let scrollPosition = this.props.scrollPosition;
            let scrollTop;
            const key = scrollPosition.key;
            if (key) {
                const parent = scrollPosition.parentKey;
                const item = this._getItemByKey(key, parent);
                if (item != null) {
                    let root = this.root;
                    scrollTop = item.offsetTop - root.offsetTop;
                }
                else {
                    return;
                }
                const offsetY = scrollPosition.offsetY;
                if (!isNaN(offsetY)) {
                    scrollTop = scrollTop + offsetY;
                }
            }
            else {
                const y = scrollPosition.y;
                if (!isNaN(y)) {
                    scrollTop = y;
                }
                else {
                    return;
                }
            }
            if (scrollTop > this._getScroller().scrollHeight) {
                return;
            }
            this._getScroller().scrollTop = scrollTop;
        }
        _getParentKey(item) {
            while (item) {
                if (item.classList.contains('oj-stream-list-group')) {
                    return item.key;
                }
                item = item.previousElementSibling;
            }
            return null;
        }
        _getItemByKey(key, parentKey) {
            var items = this.root.querySelectorAll('.oj-stream-list-item, .oj-stream-list-group');
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                let itemKey = item.key;
                if (itemKey === key) {
                    if (parentKey == null || this._getParentKey(item) === parentKey) {
                        return item;
                    }
                }
            }
        }
        _getScrollEventElement() {
            let scroller = this.props.scrollPolicyOptions.scroller;
            if (scroller != null) {
                if (typeof scroller === 'string') {
                    scroller = document.querySelector(scroller);
                }
                if (scroller === document.body || scroller === document.documentElement) {
                    return window;
                }
                return scroller;
            }
            return this.getRootElement();
        }
        _getScroller() {
            let scroller = this.props.scrollPolicyOptions.scroller;
            if (scroller != null) {
                if (typeof scroller === 'string') {
                    scroller = document.querySelector(scroller);
                }
                if (scroller === document.documentElement && scroller !== document.scrollingElement) {
                    return document.body;
                }
                return scroller;
            }
            return this.getRootElement();
        }
        _findClosestElementToTop(currScrollTop) {
            var items = this.root.querySelectorAll('.oj-stream-list-item, .oj-stream-list-group');
            if (items == null || items.length === 0) {
                return null;
            }
            let root = this.root;
            let rootTop = root.offsetTop;
            let scrollTop = Math.max(currScrollTop, 0);
            let offsetTop = 0 - rootTop;
            let diff = scrollTop;
            let index = 0;
            let elem = items[index];
            let found = false;
            let elementDetail = { elem: elem, offsetY: diff };
            while (!found && index >= 0 && index < items.length) {
                elem = items[index];
                offsetTop = elem.offsetTop - rootTop;
                diff = Math.abs(scrollTop - offsetTop);
                found = diff < 1 || scrollTop <= offsetTop;
                if (found) {
                    break;
                }
                elementDetail = { elem: elem, offsetY: diff };
                index += 1;
            }
            return elementDetail;
        }
        isAvailable() {
            return this.contentHandler != null;
        }
        getCurrentItem() {
            return this.currentKey;
        }
        setCurrentItem(item) {
            this.currentKey = item;
        }
        getData() {
            return this.state.renderedData;
        }
        setData(data) {
            this.updateState({ renderedData: data });
        }
        updateData(updater) {
            this.updateState(function (state) {
                let returnVal = updater(state.renderedData, state.expandingKeys);
                return returnVal;
            }.bind(this));
        }
        getExpanded() {
            return this.props.expanded;
        }
        setExpanded(set) {
            var _a, _b;
            (_b = (_a = this.props).onExpandedChanged) === null || _b === void 0 ? void 0 : _b.call(_a, set);
        }
        updateExpand(updater) {
            this.updateState(function (state, props) {
                return updater(state.renderedData, state.expandedSkeletonKeys, state.expandingKeys, props.expanded);
            }.bind(this));
        }
        getExpandingKeys() {
            return this.state.expandingKeys;
        }
        setExpandingKeys(set) {
            this.updateState({ expandingKeys: set });
        }
        updateExpandingKeys(key) {
            this.updateState(function (state) {
                return { expandingKeys: state.expandingKeys.add([key]) };
            });
        }
        getSkeletonKeys() {
            return this.state.expandedSkeletonKeys;
        }
        setSkeletonKeys(set) {
            this.updateState({ expandedSkeletonKeys: set });
        }
        updateSkeletonKeys(key) {
            this.updateState(function (state) {
                return { expandedSkeletonKeys: state.expandedSkeletonKeys.add([key]) };
            });
        }
        getOutOfRangeData() {
            return this.state.outOfRangeData;
        }
        setOutOfRangeData(data) {
            this.updateState({ outOfRangeData: data });
        }
        getItemRenderer() {
            return this.props.itemTemplate;
        }
        getItemStyleClass() {
            return 'oj-stream-list-item';
        }
        getGroupRenderer() {
            return this.props.groupTemplate;
        }
        getGroupStyleClass() {
            return 'oj-stream-list-group';
        }
        addBusyState(description) {
            const root = this.getRootElement();
            const componentBusyContext = Context.getContext(root).getBusyContext();
            return componentBusyContext.addBusyState({ description: description });
        }
        _handleTouchOrClickEvent(event) {
            let target = event.target;
            let item = target.closest('.oj-stream-list-item, .oj-stream-list-group');
            if (item) {
                if (this._isFocusable(target, item)) {
                    this._updateCurrentItemAndFocus(item, false);
                    this._enterActionableMode(target);
                }
                else {
                    this._updateCurrentItemAndFocus(item, true);
                }
            }
        }
        _isFocusable(target, item) {
            return this._isInputElement(target) || this._isInsideFocusableElement(target, item);
        }
        _isInputElement(target) {
            var inputRegExp = /^INPUT|SELECT|OPTION|TEXTAREA/;
            return target.nodeName.match(inputRegExp) != null && !target.readOnly;
        }
        _isInsideFocusableElement(target, item) {
            let found = false;
            while (target !== item && target != null) {
                if (target.classList.contains('oj-form-control') ||
                    this._isInFocusableElementsList(target, item)) {
                    if (!target.readonly && !target.disabled) {
                        found = true;
                    }
                    break;
                }
                target = target.parentNode;
            }
            return found;
        }
        _isInFocusableElementsList(target, item) {
            let found = false;
            let nodes = DataCollectionUtils.getFocusableElementsIncludingDisabled(item);
            nodes.forEach(function (node) {
                if (node === target) {
                    found = true;
                }
            });
            return found;
        }
        _resetFocus(item, resetActionable) {
            if (this.actionableMode && resetActionable) {
                this._exitActionableMode(false);
            }
            this.focusOutHandler(item);
            item.tabIndex = -1;
        }
        _setFocus(item, shouldFocus) {
            item.tabIndex = 0;
            if (shouldFocus) {
                this.focusInHandler(item);
                item.focus();
            }
        }
        _updateCurrentItemAndFocus(item, shouldFocus) {
            let lastCurrentItem = this.currentItem;
            let newCurrentItem = item;
            this._resetFocus(lastCurrentItem, true);
            this.currentItem = newCurrentItem;
            this.setCurrentItem(newCurrentItem.key);
            this._setFocus(newCurrentItem, shouldFocus);
        }
        _isInViewport(item) {
            let itemElem = item;
            let top = itemElem.offsetTop;
            let scrollTop = this._getScroller().scrollTop;
            return top >= scrollTop && top <= scrollTop + this.height;
        }
        _restoreCurrentItem(items) {
            if (this.currentKey != null) {
                for (let i = 0; i < items.length; i++) {
                    if (oj.KeyUtils.equals(items[i].key, this.currentKey)) {
                        const elem = items[i];
                        if (this.restoreFocus && this._isInViewport(elem)) {
                            this._updateCurrentItemAndFocus(elem, true);
                            return;
                        }
                        else {
                            this.currentItem = elem;
                            this._setFocus(elem, false);
                        }
                        break;
                    }
                }
            }
            this.restoreFocus = false;
        }
        _disableAllTabbableElements(items) {
            items.forEach((item) => {
                var busyContext = Context.getContext(item).getBusyContext();
                busyContext.whenReady().then(function () {
                    DataCollectionUtils.disableAllFocusableElements(item, true);
                });
            });
        }
        _enterActionableMode(target) {
            this.actionableMode = true;
            if (this.currentItem) {
                const elems = DataCollectionUtils.enableAllFocusableElements(this.currentItem, true);
                if (target == null && elems && elems.length > 0) {
                    elems[0].focus();
                    this._resetFocus(this.currentItem, false);
                }
            }
        }
        _exitActionableMode(shouldFocus) {
            this.actionableMode = false;
            if (this.currentItem) {
                DataCollectionUtils.disableAllFocusableElements(this.currentItem, true);
                this._setFocus(this.currentItem, shouldFocus);
            }
        }
    };
    exports.StreamList.collapse = (key, currentData) => {
        let data = currentData.value.data;
        let metadata = currentData.value.metadata;
        let index = StreamList_1._findIndex(metadata, key);
        if (index > -1) {
            let count = StreamList_1._getLocalDescendentCount(metadata, index);
            data.splice(index + 1, count);
            metadata.splice(index + 1, count);
        }
        return {
            value: {
                data: data,
                metadata: metadata
            },
            done: currentData.done
        };
    };
    exports.StreamList._getLocalDescendentCount = (metadata, index) => {
        let count = 0;
        let depth = metadata[index].treeDepth;
        let lastIndex = metadata.length;
        for (let j = index + 1; j < lastIndex; j++) {
            let newMetadata = metadata[j];
            let newDepth = newMetadata.treeDepth;
            if (newDepth > depth) {
                count += 1;
            }
            else {
                return count;
            }
        }
        return count;
    };
    exports.StreamList.metadata = { "extension": { "_DEFAULTS": Props, "_WRITEBACK_PROPS": ["expanded", "scrollPosition"], "_READ_ONLY_PROPS": [] }, "properties": { "data": { "type": "object|null", "value": null }, "expanded": { "type": "any", "writeback": true }, "scrollPolicy": { "type": "string", "enumValues": ["loadAll", "loadMoreOnScroll"], "value": "loadMoreOnScroll" }, "scrollPolicyOptions": { "type": "object", "properties": { "fetchSize": { "type": "number", "value": 25 }, "maxCount": { "type": "number", "value": 500 }, "scroller": { "type": "Element|string|null", "value": null } } }, "scrollPosition": { "type": "object", "properties": { "y": { "type": "number", "value": 0 }, "key": { "type": "any" }, "offsetY": { "type": "number" }, "parentKey": { "type": "any" } }, "writeback": true } }, "slots": { "groupTemplate": { "data": {} }, "itemTemplate": { "data": {} } } };
    __decorate([
        ojvcomponentElement.listener()
    ], exports.StreamList.prototype, "_handleFocusIn", null);
    __decorate([
        ojvcomponentElement.listener()
    ], exports.StreamList.prototype, "_handleFocusOut", null);
    __decorate([
        ojvcomponentElement.listener()
    ], exports.StreamList.prototype, "_handleClick", null);
    __decorate([
        ojvcomponentElement.listener()
    ], exports.StreamList.prototype, "_handleKeyDown", null);
    __decorate([
        ojvcomponentElement.listener({ passive: true })
    ], exports.StreamList.prototype, "_touchStartHandler", null);
    __decorate([
        ojvcomponentElement.listener()
    ], exports.StreamList.prototype, "scrollListener", null);
    exports.StreamList = StreamList_1 = __decorate([
        ojvcomponentElement.customElement('oj-stream-list')
    ], exports.StreamList);

    Object.defineProperty(exports, '__esModule', { value: true });

});
