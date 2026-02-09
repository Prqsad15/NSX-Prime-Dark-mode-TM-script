// ==UserScript==
// @name         NSXPrime True Dark Mode
// @namespace    https://github.com/Prqsad15
// @version      1.9.1
// @description  Dark mode for NSXPrime (XenForo override)
// @author       Prqsad15
// @match        https://www.nsxprime.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    /* ================================
         COLOR PALETTE (EDIT HERE)
       ================================ */

    const COLORS = {
        BG_MAIN: '#0e0e0e',
        BG_PANEL: '#111111',
        BG_CARD: '#121212',
        BG_HOVER: '#252525',
        BG_INPUT: '#0f0f0f',

        TEXT_MAIN: '#e6e6e6',
        TEXT_MUTED: '#b0b0b0',
        TEXT_LINK: '#6aa9ff',
        TEXT_LINK_HOV: '#9cc3ff',

        BORDER_MAIN: '#333333',
        BORDER_SOFT: '#222222',

        SCROLLBAR_BG: '#0a0a0a',
        SCROLLBAR_THUMB: '#333333',
        SCROLLBAR_HOV: '#444444',
        /* EDITOR (Froala) */
        EDITOR_BG: '#0f0f0f',
        EDITOR_TOOLBAR: '#111111',
        EDITOR_BUTTON_HOV: '#252525',
        EDITOR_TEXT: '#e6e6e6',
        EDITOR_MUTED: '#9a9a9a',
        EDITOR_BORDER: '#2a2a2a',
        /* EDITOR PLACEHOLDER / ATTACHMENTS */
        PLACEHOLDER_BG: '#0f0f0f',
        PLACEHOLDER_TEXT: '#9a9a9a',
        ATTACH_BG: '#111111',
        NSX_RED: '#ff0000'

    };

    /* ================================
         CSS OVERRIDES
       ================================ */

    const css = `
		html, body {
			background-color: ${COLORS.BG_MAIN} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.p-pageWrapper,
		.p-body,
		.p-body-inner,
		.p-body-content,
		.p-content,
		.block,
		.block-container,
		.block-body {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.p-header,
		.p-nav,
		.p-navSticky,
		.p-sectionLinks {
			background-color: ${COLORS.BG_MAIN} !important;
			border-color: ${COLORS.BORDER_SOFT} !important;
		}

		.message-inner,
		.message-cell,
		.message-main,
		.message-user,
		.message-content {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.button,
		.button--link {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.button:hover,
		.button--link:hover {
			background-color: ${COLORS.BG_HOVER} !important;
			color: #ffffff !important;
		}

		blockquote,
		.bbCodeBlock,
		.bbCodeBlock-content {
			background-color: ${COLORS.BG_PANEL} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
			color: ${COLORS.TEXT_MUTED} !important;
		}

		a {
			color: ${COLORS.TEXT_LINK} !important;
		}

		a:hover {
			color: ${COLORS.TEXT_LINK_HOV} !important;
		}

		input, textarea, select {
			background-color: ${COLORS.BG_INPUT} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.p-footer,
		.p-footer-inner,
		.p-footer-row {
			background-color: ${COLORS.NSX_RED} !important;
		}
		.p-footer a,
		.p-footer i,
		.p-footer svg {
			color: ${COLORS.NSX_RED} !important;
			fill: ${COLORS.NSX_RED} !important;
		}

		.button--primary,
		.badge,
		.p-footer {
			background-color: var(NSX_RED) !important;
			border-color: var(NSX_RED) !important;
		}

		.formRow > dt,
		.formRow-labelWrapper {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.formRow-label {
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.formRow-explain {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.formRow:hover > dt,
		.formRow:hover .formRow-labelWrapper {
			background-color: ${COLORS.BG_PANEL} !important;
		}

		.menu,
		.menu-content {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		::-webkit-scrollbar {
			width: 10px;
		}
		::-webkit-scrollbar-track {
			background: ${COLORS.SCROLLBAR_BG};
		}
		::-webkit-scrollbar-thumb {
			background: ${COLORS.SCROLLBAR_THUMB};
			border-radius: 5px;
		}
		::-webkit-scrollbar-thumb:hover {
			background: ${COLORS.SCROLLBAR_HOV};
		}
		.fr-box,
		.fr-wrapper,
		.fr-element {
			background-color: ${COLORS.EDITOR_BG} !important;
			color: ${COLORS.EDITOR_TEXT} !important;
			border-color: ${COLORS.EDITOR_BORDER} !important;
		}
		.fr-toolbar,
		.fr-second-toolbar {
			background-color: ${COLORS.EDITOR_TOOLBAR} !important;
			border-color: ${COLORS.EDITOR_BORDER} !important;
		}
		.fr-toolbar .fr-btn,
		.fr-popup .fr-btn {
			background-color: transparent !important;
			color: ${COLORS.EDITOR_TEXT} !important;
		}
		.fr-toolbar .fr-btn:hover,
		.fr-toolbar .fr-btn.fr-active,
		.fr-popup .fr-btn:hover {
			background-color: ${COLORS.EDITOR_BUTTON_HOV} !important;
		}
		.fr-toolbar svg,
		.fr-toolbar i,
		.fr-popup svg,
		.fr-popup i {
			fill: ${COLORS.EDITOR_TEXT} !important;
			color: ${COLORS.EDITOR_TEXT} !important;
		}
		.fr-dropdown-menu,
		.fr-popup {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}
		.fr-dropdown-menu a:hover,
		.fr-popup a:hover {
			background-color: ${COLORS.BG_HOVER} !important;
		}
		.fr-placeholder {
			color: ${COLORS.EDITOR_MUTED} !important;
		}
		.fr-wrapper::-webkit-scrollbar {
			width: 8px;
		}
		.fr-wrapper::-webkit-scrollbar-track {
			background: ${COLORS.SCROLLBAR_BG};
		}
		.fr-wrapper::-webkit-scrollbar-thumb {
			background: ${COLORS.SCROLLBAR_THUMB};
		}

		.fr-box.fr-focused .fr-toolbar,
		.fr-box.fr-focused .fr-second-toolbar,
		.fr-box.fr-basic.fr-top .fr-toolbar {
			background-color: ${COLORS.EDITOR_TOOLBAR} !important;
			border-color: ${COLORS.EDITOR_BORDER} !important;
		}
		.fr-box.fr-focused .fr-toolbar .fr-btn {
			background-color: transparent !important;
			color: ${COLORS.EDITOR_TEXT} !important;
		}

		.fr-box.fr-focused .fr-toolbar .fr-btn.fr-active,
		.fr-box.fr-focused .fr-toolbar .fr-btn:active {
			background-color: ${COLORS.EDITOR_BUTTON_HOV} !important;
		}

		.fr-toolbar[style*="background"],
		.fr-second-toolbar[style*="background"] {
			background-color: ${COLORS.EDITOR_TOOLBAR} !important;
		}
		.fr-box.fr-focused .fr-toolbar svg,
		.fr-box.fr-focused .fr-toolbar i {
			fill: ${COLORS.EDITOR_TEXT} !important;
			color: ${COLORS.EDITOR_TEXT} !important;
		}
		.fr-box .fr-element {
			background-color: #0f0f0f !important;
			color: #e6e6e6 !important;
		}
		.fr-box .fr-element * {
			color: inherit !important;
			background-color: transparent !important;
		}

		.fr-box .fr-element ::selection {
			background: rgba(255,255,255,0.2);
		}

		.fr-box .fr-placeholder {
			color: #888 !important;
		}

		.fr-toolbar,
		.fr-popup,
		.fr-dropdown-menu {
			background: #111 !important;
			border-color: #222 !important;
		}

		.block-textHeader {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.block-textHeader:before,
		.block-textHeader:after {
			background: none !important;
			box-shadow: none !important;
		}

		.message-attachments {
			background-color: ${COLORS.BG_PANEL} !important;
			border-color: ${COLORS.BORDER_SOFT} !important;
		}

		.message-cell--main .message-main,
		.message-cell--main .message-content {
			background-color: ${COLORS.BG_CARD};
			color: ${COLORS.TEXT_MAIN};
		}

		.message-attribution {
			background-color: transparent;
			color: ${COLORS.TEXT_MUTED};
		}

		.message-attribution a.username {
			color: ${COLORS.TEXT_LINK};
		}

		.message-body,
		.message-body .bbWrapper {
			color: ${COLORS.TEXT_MAIN};
		}

		.comment-inner {
			background-color: ${COLORS.BG_PANEL};
			border: 1px solid ${COLORS.BORDER_SOFT};
			border-radius: 6px;
		}

		.comment-body,
		.comment-body .bbWrapper {
			color: ${COLORS.TEXT_MAIN};
		}

		.comment-user {
			color: ${COLORS.TEXT_LINK};
		}
		.comment-footer {
			border-top: 1px solid ${COLORS.BORDER_SOFT};
		}

		.comment-footer time {
			color: ${COLORS.TEXT_MUTED};
		}

		.comment .actionBar-action:hover {
			background-color: ${COLORS.BG_HOVER};
		}

		.editorPlaceholder-placeholder .input {
			background-color: ${COLORS.BG_INPUT};
			border: 1px solid ${COLORS.BORDER_MAIN};
			color: ${COLORS.TEXT_MUTED};
		}

		.editorPlaceholder-placeholder .u-muted {
			color: ${COLORS.TEXT_MUTED};
		}

		.comment .fr-box .fr-wrapper {
			background-color: ${COLORS.EDITOR_BG};
		}

		.message-responseRow {
			background-color: transparent;
		}

		.memberHeader,
		.memberHeader-content,
		.memberHeader-content--info {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_SOFT} !important;
		}

		.memberHeader-name,
		.memberHeader-name .username {
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.memberHeader-blurb,
		.memberHeader-blurb dt {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.memberHeader-blurb dd,
		.memberHeader-blurb time {
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.memberHeader-actionTop,
		.memberHeader-actionTop .buttonGroup {
			background-color: transparent !important;
		}

		.memberHeader-content:hover,
		.memberHeader-content:focus-within,
		.memberHeader-content--info:hover,
		.memberHeader-content--info:focus-within {
			background-color: ${COLORS.BG_PANEL} !important;
		}

		.editorPlaceholder {
			background-color: ${COLORS.PLACEHOLDER_BG} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.editorPlaceholder-placeholder,
		.editorPlaceholder-placeholder .input {
			background-color: ${COLORS.PLACEHOLDER_BG} !important;
			color: ${COLORS.PLACEHOLDER_TEXT} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.editorPlaceholder-placeholder .u-muted {
			color: ${COLORS.PLACEHOLDER_TEXT} !important;
		}

		.editorPlaceholder .editorPlaceholder-editor {
			background-color: ${COLORS.EDITOR_BG} !important;
		}

		.attachmentUploads,
		.attachmentUploads-banner,
		.attachUploadList,
		.file,
		.file-content {
			background-color: ${COLORS.ATTACH_BG} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_SOFT} !important;
		}

		.file:hover {
			background-color: ${COLORS.BG_HOVER} !important;
		}

		.file-meta {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.p-navEl .menu.menu--structural,
		.p-navEl.is-selected .menu.menu--structural {
			background-color: ${COLORS.BG_PANEL} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.p-navEl .menu.menu--structural .menu-content {
			background-color: ${COLORS.BG_PANEL} !important;
		}

		.menu--structural .menu-linkRow {
			background-color: transparent !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.menu--structural .menu-linkRow:hover,
		.menu--structural .menu-linkRow:focus {
			background-color: ${COLORS.BG_HOVER} !important;
			color: #ffffff !important;
		}

		.p-navEl.is-selected > .p-navEl-link {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.p-navEl-splitTrigger {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.p-navEl-splitTrigger:hover {
			background-color: ${COLORS.BG_HOVER} !important;
		}

		.menu-content {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.menu-header {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.menu-row,
		.menu-row--clickable,
		.menu-row--separated {
			background-color: transparent !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.menu-row:hover,
		.menu-row--clickable:hover {
			background-color: ${COLORS.BG_HOVER} !important;
		}

		.contentRow {
			background-color: transparent !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.contentRow-minor,
		.contentRow-minor time {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.fauxBlockLink-blockLink {
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.fauxBlockLink-blockLink:hover {
			color: ${COLORS.TEXT_LINK_HOV} !important;
		}

		.menu-footer {
			background-color: ${COLORS.BG_PANEL} !important;
			border-top: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.menu-footer a {
			color: ${COLORS.TEXT_LINK} !important;
		}

		.menu-footer a:hover {
			color: ${COLORS.TEXT_LINK_HOV} !important;
		}

		.menu-footer,
		.menu-footer--split {
			background-color: ${COLORS.BG_PANEL} !important;
			border-top: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.menu-footer .listInline > li > a {
			color: ${COLORS.TEXT_LINK} !important;
		}

		.menu-footer .listInline > li > a:hover,
		.menu-footer .listInline > li > a:focus {
			color: ${COLORS.TEXT_LINK_HOV} !important;
			text-decoration: underline;
		}

		.menu-footer .listInline--bullet > li:before {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.menu-content,
		.menu-header,
		.menu-row {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.menu-header {
			border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.menu-content .input,
		.menu-content select {
			background-color: ${COLORS.BG_INPUT} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.menu-content .input::placeholder {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.menu-content .inputGroup-text {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MUTED} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.menu-content .inputGroup--joined > * {
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.menu-content .iconic-label {
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.menu-content .iconic i {
			border-color: ${COLORS.BORDER_MAIN} !important;
			background-color: ${COLORS.BG_INPUT} !important;
		}

		.menu-content .fa-question-circle {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.menu-footer {
			background-color: ${COLORS.BG_PANEL} !important;
			border-top: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.menu-footer .button {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.menu-footer .button--primary {
			background-color: ${COLORS.TEXT_LINK} !important;
			color: #000 !important;
		}

		.menu-footer .button:hover {
			background-color: ${COLORS.BG_HOVER} !important;
			color: #fff !important;
		}

		.tabs--standalone {
			background-color: ${COLORS.BG_PANEL} !important;
			border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
		}

		.tabs--standalone .tabs-tab {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MUTED} !important;
			border-color: ${COLORS.BORDER_MAIN} !important;
		}

		.tabs--standalone .tabs-tab:hover {
			background-color: ${COLORS.BG_HOVER} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.tabs--standalone .tabs-tab.is-active {
			background-color: ${COLORS.BG_MAIN} !important;
			color: ${COLORS.TEXT_MAIN} !important;
			border-bottom-color: transparent !important;
		}

		.tabs--standalone .hScroller-action {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.tabs--standalone .hScroller-action:hover {
			background-color: ${COLORS.BG_HOVER} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.hScroller:before,
		.hScroller:after {
			background: none !important;
		}

		.hScroller-scroll:before,
		.hScroller-scroll:after {
			background: none !important;
		}

		.hScroller-action {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MUTED} !important;
			box-shadow: none !important;
		}

		.hScroller-action.is-active {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.hScroller-action:hover {
			background-color: ${COLORS.BG_HOVER} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.inputGroup-text {
			background-color: ${COLORS.BG_INPUT} !important;
			border-color: ${COLORS.BORDER_SUBTLE} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.inputGroup-text,
		.inputGroup-text label {
			box-shadow: none !important;
		}

		.inputGroup-text .iconic-label {
			color: ${COLORS.TEXT_MAIN} !important;
			font-size: 13px;
		}

		.inputGroup-text .iconic i {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.inputGroup-text:hover,
		.inputGroup-text label:hover {
			background-color: ${COLORS.BG_INPUT_HOVER} !important;
		}

		.inputGroup-text input[type="checkbox"]:checked + i,
		.inputGroup-text input[type="checkbox"]:checked ~ .iconic-label {
			color: ${COLORS.ACCENT} !important;
		}

		.memberHeader-blurbContainer {
			background-color: ${COLORS.BG_PANEL} !important;
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.memberHeader-blurbContainer .u-concealed,
		.memberHeader-blurbContainer .u-concealed a {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.memberHeader-blurbContainer span {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.memberHeader-blurbContainer dt {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		.memberHeader-blurbContainer dd,
		.memberHeader-blurbContainer time {
			color: ${COLORS.TEXT_MAIN} !important;
		}

		.memberHeader-blurbContainer a:hover {
			color: ${COLORS.TEXT_LINK_HOV} !important;
		}


		/* Whole card */
		.carousel-item,
		.carousel-item .contentRow {
			background-color: ${COLORS.BG_CARD} !important;
			color: ${COLORS.TEXT_MAIN} !important;
		}

		/* Kill XF light background on hover / focus */
		.carousel-item:hover,
		.carousel-item:hover .contentRow {
			background-color: ${COLORS.BG_HOVER} !important;
		}

		/* Title */
		.carousel-item .contentRow-title a {
			color: ${COLORS.TEXT_LINK} !important;
		}

		.carousel-item .contentRow-title a:hover {
			color: ${COLORS.TEXT_LINK_HOV} !important;
		}

		/* Description text */
		.carousel-item .contentRow-lesser {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		/* Meta row (author / date / stars) */
		.carousel-item .contentRow-minor,
		.carousel-item .contentRow-minor * {
			color: ${COLORS.TEXT_MUTED} !important;
		}

		/* Resource icon background */
		.carousel-item .avatar--resourceIconDefault {
			background-color: ${COLORS.BG_PANEL} !important;
			border-color: ${COLORS.BORDER_SOFT} !important;
		}

		/* Prevent XF injecting light inline styles */
		.carousel-item [style*="background"] {
			background-color: ${COLORS.BG_CARD} !important;
		}
			`;

    GM_addStyle(css);
})();
