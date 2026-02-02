// ==UserScript==
// @name         NSXPrime True Dark Mode
// @namespace    https://github.com/Prqsad15
// @version      1.2
// @description  Dark mode for NSXPrime (XenForo override)
// @author       Prqsad15
// @match        https://www.nsxprime.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    /* ================================
                COLOR PALETTE
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
        SCROLLBAR_HOV:  '#444444'
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
    `;

    GM_addStyle(css);
})();
