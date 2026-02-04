// ==UserScript==
// @name         NSXPrime True Dark Mode
// @namespace    https://github.com/Prqsad15
// @version      1.7
// @description  Dark mode for NSXPrime (XenForo override)
// @author       Prqsad15
// @match        https://www.nsxprime.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    /* ================================
         COLOR PALETTE (EDIT HERE)
       ================================ */

    const COLORS = {
        BG_MAIN:        '#0e0e0e',
        BG_PANEL:       '#111111',
        BG_CARD:        '#121212',
        BG_HOVER:       '#252525',
        BG_INPUT:       '#0f0f0f',

        TEXT_MAIN:      '#e6e6e6',
        TEXT_MUTED:     '#b0b0b0',
        TEXT_LINK:      '#6aa9ff',
        TEXT_LINK_HOV:  '#9cc3ff',

        BORDER_MAIN:    '#333333',
        BORDER_SOFT:    '#222222',

        SCROLLBAR_BG:   '#0a0a0a',
        SCROLLBAR_THUMB:'#333333',
        SCROLLBAR_HOV:  '#444444',
		        /* EDITOR (Froala) */
        EDITOR_BG:          '#0f0f0f',
        EDITOR_TOOLBAR:     '#111111',
        EDITOR_BUTTON_HOV:  '#252525',
        EDITOR_TEXT:        '#e6e6e6',
        EDITOR_MUTED:       '#9a9a9a',
        EDITOR_BORDER:      '#2a2a2a',
		        /* EDITOR PLACEHOLDER / ATTACHMENTS */
        PLACEHOLDER_BG:     '#0f0f0f',
        PLACEHOLDER_TEXT:   '#9a9a9a',
        ATTACH_BG:          '#111111'

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

    /* HEADER / NAV */
    .p-header,
    .p-nav,
    .p-navSticky,
    .p-sectionLinks {
        background-color: ${COLORS.BG_MAIN} !important;
        border-color: ${COLORS.BORDER_SOFT} !important;
    }

    /* POSTS */
    .message-inner,
    .message-cell,
    .message-main,
    .message-user,
    .message-content {
        background-color: ${COLORS.BG_CARD} !important;
        color: ${COLORS.TEXT_MAIN} !important;
    }

    /* BUTTONS (FIXES Unwatch / Watch) */
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

    /* QUOTES / CODE */
    blockquote,
    .bbCodeBlock,
    .bbCodeBlock-content {
        background-color: ${COLORS.BG_PANEL} !important;
        border-color: ${COLORS.BORDER_MAIN} !important;
        color: ${COLORS.TEXT_MUTED} !important;
    }

    /* LINKS */
    a {
        color: ${COLORS.TEXT_LINK} !important;
    }

    a:hover {
        color: ${COLORS.TEXT_LINK_HOV} !important;
    }

    /* FORMS */
    input, textarea, select {
        background-color: ${COLORS.BG_INPUT} !important;
        color: ${COLORS.TEXT_MAIN} !important;
        border-color: ${COLORS.BORDER_MAIN} !important;
    }

    /* MENUS */
    .menu,
    .menu-content {
        background-color: ${COLORS.BG_PANEL} !important;
        color: ${COLORS.TEXT_MAIN} !important;
        border-color: ${COLORS.BORDER_MAIN} !important;
    }

    /* SCROLLBAR */
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
	/* ================================
     XENFORO / FROALA EDITOR
   ================================ */

	/* Editor container */
	.fr-box,
	.fr-wrapper,
	.fr-element {
		background-color: ${COLORS.EDITOR_BG} !important;
		color: ${COLORS.EDITOR_TEXT} !important;
		border-color: ${COLORS.EDITOR_BORDER} !important;
	}

	/* Toolbar background */
	.fr-toolbar,
	.fr-second-toolbar {
		background-color: ${COLORS.EDITOR_TOOLBAR} !important;
		border-color: ${COLORS.EDITOR_BORDER} !important;
	}

	/* Toolbar buttons */
	.fr-toolbar .fr-btn,
	.fr-popup .fr-btn {
		background-color: transparent !important;
		color: ${COLORS.EDITOR_TEXT} !important;
	}

	/* Toolbar button hover / active */
	.fr-toolbar .fr-btn:hover,
	.fr-toolbar .fr-btn.fr-active,
	.fr-popup .fr-btn:hover {
		background-color: ${COLORS.EDITOR_BUTTON_HOV} !important;
	}

	/* Icons (SVG + FontAwesome XF icons) */
	.fr-toolbar svg,
	.fr-toolbar i,
	.fr-popup svg,
	.fr-popup i {
		fill: ${COLORS.EDITOR_TEXT} !important;
		color: ${COLORS.EDITOR_TEXT} !important;
	}

	/* Dropdown menus */
	.fr-dropdown-menu,
	.fr-popup {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Dropdown items hover */
	.fr-dropdown-menu a:hover,
	.fr-popup a:hover {
		background-color: ${COLORS.BG_HOVER} !important;
	}

	/* Editor placeholder text */
	.fr-placeholder {
		color: ${COLORS.EDITOR_MUTED} !important;
	}

	/* Editor scrollbar */
	.fr-wrapper::-webkit-scrollbar {
		width: 8px;
	}
	.fr-wrapper::-webkit-scrollbar-track {
		background: ${COLORS.SCROLLBAR_BG};
	}
	.fr-wrapper::-webkit-scrollbar-thumb {
		background: ${COLORS.SCROLLBAR_THUMB};
	}
		/* ================================
	     FROALA FOCUS FIX (WHITE BAR)
	   ================================ */

	/* Toolbar when editor is focused */
	.fr-box.fr-focused .fr-toolbar,
	.fr-box.fr-focused .fr-second-toolbar,
	.fr-box.fr-basic.fr-top .fr-toolbar {
		background-color: ${COLORS.EDITOR_TOOLBAR} !important;
		border-color: ${COLORS.EDITOR_BORDER} !important;
	}

	/* Buttons when focused (idle state) */
	.fr-box.fr-focused .fr-toolbar .fr-btn {
		background-color: transparent !important;
		color: ${COLORS.EDITOR_TEXT} !important;
	}

	/* Active / toggled buttons */
	.fr-box.fr-focused .fr-toolbar .fr-btn.fr-active,
	.fr-box.fr-focused .fr-toolbar .fr-btn:active {
		background-color: ${COLORS.EDITOR_BUTTON_HOV} !important;
	}

	/* Kill inline white backgrounds Froala injects */
	.fr-toolbar[style*="background"],
	.fr-second-toolbar[style*="background"] {
		background-color: ${COLORS.EDITOR_TOOLBAR} !important;
	}

	/* SVG icons on focus */
	.fr-box.fr-focused .fr-toolbar svg,
	.fr-box.fr-focused .fr-toolbar i {
		fill: ${COLORS.EDITOR_TEXT} !important;
		color: ${COLORS.EDITOR_TEXT} !important;
	}
	/* ================================
     ATTACHMENTS HEADER FIX
   ================================ */

	.block-textHeader {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
	}

	/* Kill XF gradient / overlays */
	.block-textHeader:before,
	.block-textHeader:after {
		background: none !important;
		box-shadow: none !important;
	}

	/* Attachments section container */
	.message-attachments {
		background-color: ${COLORS.BG_PANEL} !important;
		border-color: ${COLORS.BORDER_SOFT} !important;
	}

	/* ================================
   PROFILE POSTS & COMMENTS
   ================================ */

	/* Main profile post container */
	.message-cell--main .message-main,
	.message-cell--main .message-content {
		background-color: ${COLORS.BG_CARD};
		color: ${COLORS.TEXT_MAIN};
	}

	/* Attribution header (username + date) */
	.message-attribution {
		background-color: transparent;
		color: ${COLORS.TEXT_MUTED};
	}

	.message-attribution a.username {
		color: ${COLORS.TEXT_LINK};
	}

	/* Profile post body */
	.message-body,
	.message-body .bbWrapper {
		color: ${COLORS.TEXT_MAIN};
	}

	/* ================================
	   COMMENTS (REPLIES)
	   ================================ */

	.comment-inner {
		background-color: ${COLORS.BG_PANEL};
		border: 1px solid ${COLORS.BORDER_SOFT};
		border-radius: 6px;
	}

	/* Comment text */
	.comment-body,
	.comment-body .bbWrapper {
		color: ${COLORS.TEXT_MAIN};
	}

	/* Comment author */
	.comment-user {
		color: ${COLORS.TEXT_LINK};
	}

	/* Comment footer (time, report, react) */
	.comment-footer {
		border-top: 1px solid ${COLORS.BORDER_SOFT};
	}

	.comment-footer time {
		color: ${COLORS.TEXT_MUTED};
	}

	/* Reaction + action bar hover */
	.comment .actionBar-action:hover {
		background-color: ${COLORS.BG_HOVER};
	}

	/* ================================
	   COMMENT EDITOR (QUICK REPLY)
	   ================================ */

	.editorPlaceholder-placeholder .input {
		background-color: ${COLORS.BG_INPUT};
		border: 1px solid ${COLORS.BORDER_MAIN};
		color: ${COLORS.TEXT_MUTED};
	}

	.editorPlaceholder-placeholder .u-muted {
		color: ${COLORS.TEXT_MUTED};
	}

	/* Active editor */
	.comment .fr-box .fr-wrapper {
		background-color: ${COLORS.EDITOR_BG};
	}

	/* ================================
	   RESPONSE ROW SPACING
	   ================================ */

	.message-responseRow {
		background-color: transparent;
	}

		/* ================================
	    MEMBER PROFILE HEADER FIX
	   ================================ */

	.memberHeader,
	.memberHeader-content,
	.memberHeader-content--info {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-color: ${COLORS.BORDER_SOFT} !important;
	}

	/* Username */
	.memberHeader-name,
	.memberHeader-name .username {
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Blurbs (Joined / Last seen) */
	.memberHeader-blurb,
	.memberHeader-blurb dt {
		color: ${COLORS.TEXT_MUTED} !important;
	}

	.memberHeader-blurb dd,
	.memberHeader-blurb time {
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Action area (Report button container) */
	.memberHeader-actionTop,
	.memberHeader-actionTop .buttonGroup {
		background-color: transparent !important;
	}

	/* Prevent white flash on hover/focus */
	.memberHeader-content:hover,
	.memberHeader-content:focus-within,
	.memberHeader-content--info:hover,
	.memberHeader-content--info:focus-within {
		background-color: ${COLORS.BG_PANEL} !important;
	}
	/* ================================
     XENFORO EDITOR PLACEHOLDER
   ================================ */

	/* Placeholder wrapper */
	.editorPlaceholder {
		background-color: ${COLORS.PLACEHOLDER_BG} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* The visible "Write something…" box */
	.editorPlaceholder-placeholder,
	.editorPlaceholder-placeholder .input {
		background-color: ${COLORS.PLACEHOLDER_BG} !important;
		color: ${COLORS.PLACEHOLDER_TEXT} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Placeholder text */
	.editorPlaceholder-placeholder .u-muted {
		color: ${COLORS.PLACEHOLDER_TEXT} !important;
	}

	/* When editor is activated */
	.editorPlaceholder .editorPlaceholder-editor {
		background-color: ${COLORS.EDITOR_BG} !important;
	}

	/* Attachment upload area */
	.attachmentUploads,
	.attachmentUploads-banner,
	.attachUploadList,
	.file,
	.file-content {
		background-color: ${COLORS.ATTACH_BG} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-color: ${COLORS.BORDER_SOFT} !important;
	}

	/* Attachment file hover */
	.file:hover {
		background-color: ${COLORS.BG_HOVER} !important;
	}

	/* File meta text */
	.file-meta {
		color: ${COLORS.TEXT_MUTED} !important;
	}
	/* ================================
     TOP NAV DROPDOWN MENUS
   ================================ */

	/* Dropdown container */
	.p-navEl .menu.menu--structural,
	.p-navEl.is-selected .menu.menu--structural {
		background-color: ${COLORS.BG_PANEL} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Dropdown inner */
	.p-navEl .menu.menu--structural .menu-content {
		background-color: ${COLORS.BG_PANEL} !important;
	}

	/* Menu rows */
	.menu--structural .menu-linkRow {
		background-color: transparent !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Hover / active rows */
	.menu--structural .menu-linkRow:hover,
	.menu--structural .menu-linkRow:focus {
		background-color: ${COLORS.BG_HOVER} !important;
		color: #ffffff !important;
	}

	/* Selected nav tab */
	.p-navEl.is-selected > .p-navEl-link {
		background-color: ${COLORS.BG_CARD} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Split trigger arrow */
	.p-navEl-splitTrigger {
		color: ${COLORS.TEXT_MUTED} !important;
	}

	.p-navEl-splitTrigger:hover {
		background-color: ${COLORS.BG_HOVER} !important;
	}
	/* ================================
     USER MENU – DIRECT MESSAGES
   ================================ */

	/* Menu container */
	.menu-content {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Section header */
	.menu-header {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
	}

	/* Message rows */
	.menu-row,
	.menu-row--clickable,
	.menu-row--separated {
		background-color: transparent !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Hover / focus row */
	.menu-row:hover,
	.menu-row--clickable:hover {
		background-color: ${COLORS.BG_HOVER} !important;
	}

	/* Content rows */
	.contentRow {
		background-color: transparent !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Minor text (participants / timestamp) */
	.contentRow-minor,
	.contentRow-minor time {
		color: ${COLORS.TEXT_MUTED} !important;
	}

	/* Message subject */
	.fauxBlockLink-blockLink {
		color: ${COLORS.TEXT_MAIN} !important;
	}

	.fauxBlockLink-blockLink:hover {
		color: ${COLORS.TEXT_LINK_HOV} !important;
	}

	/* Footer */
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
	/* ================================
   🔻 MENU FOOTER (DM / USER MENU)
   ================================ */

	.menu-footer,
	.menu-footer--split {
		background-color: ${COLORS.BG_PANEL} !important;
		border-top: 1px solid ${COLORS.BORDER_SOFT} !important;
	}

	/* Footer link list */
	.menu-footer .listInline > li > a {
		color: ${COLORS.TEXT_LINK} !important;
	}

	/* Hover / focus */
	.menu-footer .listInline > li > a:hover,
	.menu-footer .listInline > li > a:focus {
		color: ${COLORS.TEXT_LINK_HOV} !important;
		text-decoration: underline;
	}

	/* Bullet separators */
	.menu-footer .listInline--bullet > li:before {
		color: ${COLORS.TEXT_MUTED} !important;
	}
	/* ================================
     QUICK SEARCH MENU
   ================================ */

	/* Menu container */
	.menu-content,
	.menu-header,
	.menu-row {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Header */
	.menu-header {
		border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
	}

	/* Inputs & selects */
	.menu-content .input,
	.menu-content select {
		background-color: ${COLORS.BG_INPUT} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Input placeholders */
	.menu-content .input::placeholder {
		color: ${COLORS.TEXT_MUTED} !important;
	}

	/* Input group text (e.g. "By:") */
	.menu-content .inputGroup-text {
		background-color: ${COLORS.BG_CARD} !important;
		color: ${COLORS.TEXT_MUTED} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Joined input groups */
	.menu-content .inputGroup--joined > * {
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Checkbox labels */
	.menu-content .iconic-label {
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Checkbox icon */
	.menu-content .iconic i {
		border-color: ${COLORS.BORDER_MAIN} !important;
		background-color: ${COLORS.BG_INPUT} !important;
	}

	/* Tooltip question mark */
	.menu-content .fa-question-circle {
		color: ${COLORS.TEXT_MUTED} !important;
	}

	/* Footer */
	.menu-footer {
		background-color: ${COLORS.BG_PANEL} !important;
		border-top: 1px solid ${COLORS.BORDER_SOFT} !important;
	}

	/* Buttons */
	.menu-footer .button {
		background-color: ${COLORS.BG_CARD} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Primary button */
	.menu-footer .button--primary {
		background-color: ${COLORS.TEXT_LINK} !important;
		color: #000 !important;
	}

	/* Hover states */
	.menu-footer .button:hover {
		background-color: ${COLORS.BG_HOVER} !important;
		color: #fff !important;
	}
	/* ================================
     STANDALONE TABS (What's New)
   ================================ */

	/* Tabs container */
	.tabs--standalone {
		background-color: ${COLORS.BG_PANEL} !important;
		border-bottom: 1px solid ${COLORS.BORDER_SOFT} !important;
	}

	/* Tab strip */
	.tabs--standalone .tabs-tab {
		background-color: ${COLORS.BG_CARD} !important;
		color: ${COLORS.TEXT_MUTED} !important;
		border-color: ${COLORS.BORDER_MAIN} !important;
	}

	/* Hover */
	.tabs--standalone .tabs-tab:hover {
		background-color: ${COLORS.BG_HOVER} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Active tab */
	.tabs--standalone .tabs-tab.is-active {
		background-color: ${COLORS.BG_MAIN} !important;
		color: ${COLORS.TEXT_MAIN} !important;
		border-bottom-color: transparent !important;
	}

	/* Horizontal scroller arrows */
	.tabs--standalone .hScroller-action {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MUTED} !important;
	}

	.tabs--standalone .hScroller-action:hover {
		background-color: ${COLORS.BG_HOVER} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}
	/* ================================
   ↔ HSCROLLER GRADIENT FIX
   ================================ */

	/* Remove light fade gradients */
	.hScroller:before,
	.hScroller:after {
		background: none !important;
	}

	/* Some XF versions use these instead */
	.hScroller-scroll:before,
	.hScroller-scroll:after {
		background: none !important;
	}

	/* Arrow buttons */
	.hScroller-action {
		background-color: ${COLORS.BG_PANEL} !important;
		color: ${COLORS.TEXT_MUTED} !important;
		box-shadow: none !important;
	}

	/* Active arrow (when scrolling possible) */
	.hScroller-action.is-active {
		background-color: ${COLORS.BG_CARD} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

	/* Hover */
	.hScroller-action:hover {
		background-color: ${COLORS.BG_HOVER} !important;
		color: ${COLORS.TEXT_MAIN} !important;
	}

    `;

    GM_addStyle(css);
})();
