import type { Palette } from "./themes";

type TokenColors = {
  name?: string;
  scope?: string | string[];
  settings?: {
    foreground?: string;
    fontSize?: string;
    fontStyle?:
      | ""
      | "italic"
      | "bold"
      | "underline"
      | "strikethrough"
      | "italic underline";
    fontFamily?: string;
    lineHeight?: number;
  };
};

export type Theme = {
  name: string;
  colors: Record<string, string>;
  tokenColors: TokenColors[];
};

export function generateTheme(name: string, palette: Palette): Theme {
  return {
    name: name,
    colors: {
      focusBorder: palette.FOREGROUND_UNO,

      "icon.foreground": palette.FOREGROUND_UNO,

      "textLink.foreground": palette.FOREGROUND_UNO,
      "textLink.activeForeground": palette.FOREGROUND_UNO_ALT,

      "button.border": palette.FOREGROUND_UNO,
      "button.foreground": palette.BACKGROUND,
      "button.background": palette.FOREGROUND_UNO,

      "progressBar.background": palette.FOREGROUND_UNO,

      "breadcrumb.foreground": palette.FOREGROUND_UNO_ALT,

      "badge.foreground": palette.BACKGROUND,
      "badge.background": palette.FOREGROUND_UNO,

      "input.border": palette.BACKGROUND_ALT,
      "input.foreground": palette.FOREGROUND_UNO_ALT,
      "input.background": palette.BACKGROUND_ALT,
      "inputOption.activeBorder": palette.FOREGROUND_UNO,
      "inputOption.activeBackground": palette.FOREGROUND_UNO_TRANSPARENT,
      "inputValidation.errorForeground": palette.FOREGROUND_UNO_ALT,
      "inputValidation.errorBackground": palette.INVALID_TRANSPARENT,
      "inputValidation.errorBorder": palette.INVALID,

      "dropdown.border": palette.BACKGROUND_ALT,
      "dropdown.foreground": palette.FOREGROUND_UNO_ALT,
      "dropdown.background": palette.BACKGROUND_ALT,

      "widget.border": palette.FOREGROUND_UNO,

      "titleBar.activeBackground": palette.BACKGROUND,
      "titleBar.activeForeground": palette.FOREGROUND_UNO,
      "titleBar.inactiveBackground": palette.BACKGROUND_ALT,
      "titleBar.inactiveForeground": palette.FOREGROUND_UNO_ALT,

      "commandCenter.debuggingBackground": palette.FOREGROUND_DUO_TRANSPARENT,

      "tab.activeBackground": palette.BACKGROUND_ALT,
      "tab.activeForeground": palette.FOREGROUND_UNO_ALT,
      "tab.inactiveBackground": palette.BACKGROUND,
      "tab.inactiveForeground": palette.FOREGROUND_UNO,
      "editorGroupHeader.tabsBackground": palette.BACKGROUND,

      "activityBar.background": palette.BACKGROUND,
      "activityBar.foreground": palette.FOREGROUND_UNO,
      "activityBarBadge.foreground": palette.BACKGROUND,
      "activityBarBadge.background": palette.FOREGROUND_UNO,

      "sideBar.background": palette.BACKGROUND,
      "sideBarTitle.foreground": palette.FOREGROUND_UNO,
      "sideBarSectionHeader.background": palette.BACKGROUND_ALT,

      "list.focusOutline": palette.BACKGROUND_ALT,
      "list.focusForeground": palette.UNO_2,
      "list.focusBackground": palette.BACKGROUND_ALT,
      "list.hoverForeground": palette.UNO_2,
      "list.hoverBackground": palette.BACKGROUND_ALT,
      "list.focusAndSelectionOutline": palette.BACKGROUND,
      "list.activeSelectionForeground": palette.FOREGROUND_DUO,
      "list.activeSelectionIconForeground": palette.FOREGROUND_DUO,
      "list.activeSelectionBackground": palette.BACKGROUND_ALT,
      "list.inactiveSelectionForeground": palette.FOREGROUND_DUO,
      "list.inactiveSelectionBackground": palette.BACKGROUND_ALT,
      "list.inactiveSelectionIconForeground": palette.FOREGROUND_DUO,

      "editor.foreground": palette.FOREGROUND_UNO,
      "editor.background": palette.BACKGROUND,
      "editor.wordHighlightBackground": palette.FOREGROUND_UNO_TRANSPARENT,
      "editor.selectionBackground": palette.BACKGROUND_ALT,
      "editor.lineHighlightBackground": palette.BACKGROUND_ALT,
      "editorCursor.foreground": palette.FOREGROUND_DUO,
      "editorCursor.background": palette.BACKGROUND,
      "editorWhitespace.foreground": palette.INVISIBLES,

      "editorWidget.border": palette.FOREGROUND_UNO,
      "editorWidget.foreground": palette.FOREGROUND_UNO_ALT,
      "editorWidget.background": palette.BACKGROUND_ALT,

      "editorGutter.addedBackground": palette.FOREGROUND_DUO,
      "editorGutter.addedSecondaryBackground": palette.DUO_2,
      "editorGutter.modifiedBackground": palette.UNO_1,
      "editorGutter.modifiedSecondaryBackground": palette.UNO_3,
      "editorGutter.deletedBackground": palette.INVALID,
      "editorGutter.deletedSecondaryBackground": palette.DEPRECATED,

      "panelTitle.activeForeground": palette.FOREGROUND_UNO,

      "statusBar.background": palette.FOREGROUND_UNO,
      "statusBar.foreground": palette.BACKGROUND,
      "statusBar.noFolderBackground": palette.BACKGROUND,
      "statusBar.debuggingBackground": palette.FOREGROUND_DUO,
      "statusBar.debuggingForeground": palette.BACKGROUND,

      "settings.headerForeground": palette.FOREGROUND_UNO,
      "settings.modifiedItemIndicator": palette.FOREGROUND_UNO,
      "settings.dropdownBackground": palette.BACKGROUND,
      "settings.dropdownForeground": palette.FOREGROUND_UNO_ALT,
      "settings.dropdownBorder": palette.FOREGROUND_UNO_ALT,
      "settings.dropdownListBorder": palette.BACKGROUND,
      "settings.checkboxForeground": palette.FOREGROUND_UNO,
      "settings.checkboxBorder": palette.FOREGROUND_UNO,
    },
    tokenColors: [
      {
        settings: {
          foreground: palette.UNO_2,
        },
      },
      {
        name: "Comment",
        scope: "comment",
        settings: {
          foreground: palette.UNO_5,
          fontStyle: "italic",
        },
      },
      {
        name: "Comment in Params",
        scope: "meta.parameters comment.block",
        settings: {
          foreground: palette.UNO_4,
          fontStyle: "italic",
        },
      },
      {
        name: "String",
        scope: "string",
        settings: {
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Number",
        scope: "constant.numeric",
        settings: {
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Built-in constant",
        scope: "constant.language",
        settings: {
          foreground: palette.DUO_1,
        },
      },
      {
        name: "User-defined constant",
        scope: [
          "constant.character",
          "constant.other",
          "variable.other.constant",
        ],
        settings: {
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Variable",
        scope: ["variable", "support.other.variable"],
        settings: {
          fontStyle: "",
          foreground: palette.UNO_2,
        },
      },
      {
        name: "Keyword",
        scope: "keyword",
        settings: {
          foreground: palette.DUO_2,
        },
      },
      {
        name: "Storage",
        scope: "storage",
        settings: {
          fontStyle: "",
          foreground: palette.DUO_2,
        },
      },
      {
        name: "Storage type",
        scope: "storage.type",
        settings: {
          fontStyle: "italic",
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Class name",
        scope: "entity.name.class",
        settings: {
          fontStyle: "underline",
          foreground: palette.UNO_1,
        },
      },
      {
        name: "Type Name",
        scope: ["entity.name.type", "support.type"],
        settings: {
          fontStyle: "",
          foreground: palette.UNO_1,
        },
      },
      {
        name: "Inherited class",
        scope: "entity.other.inherited-class",
        settings: {
          fontStyle: "italic underline",
          foreground: palette.UNO_1,
        },
      },
      {
        name: "Function name",
        scope: "entity.name.function",
        settings: {
          fontStyle: "",
          foreground: palette.UNO_1,
        },
      },
      {
        name: "Function argument",
        scope: "variable.parameter",
        settings: {
          fontStyle: "italic",
          foreground: palette.UNO_3,
        },
      },
      {
        name: "Tag name",
        scope: [
          "entity.name.tag",
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.id",
        ],
        settings: {
          fontStyle: "",
          foreground: palette.UNO_1,
        },
      },
      {
        name: "Tag attribute",
        scope: "entity.other.attribute-name",
        settings: {
          fontStyle: "",
          foreground: palette.UNO_2,
        },
      },
      {
        name: "Library function",
        scope: "support.function",
        settings: {
          fontStyle: "",
          foreground: palette.UNO_1,
        },
      },
      {
        name: "Library constant",
        scope: "support.constant",
        settings: {
          fontStyle: "",
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Library class/type",
        scope: "support.class",
        settings: {
          foreground: palette.UNO_2,
        },
      },
      {
        name: "Library variable",
        scope: "support.other.variable",
        settings: {
          fontStyle: "",
        },
      },
      {
        name: "Invalid",
        scope: "invalid",
        settings: {
          foreground: palette.INVALID,
          fontStyle: "italic underline",
        },
      },
      {
        name: "Invalid deprecated",
        scope: "invalid.deprecated",
        settings: {
          foreground: palette.DEPRECATED,
          fontStyle: "italic",
        },
      },
      {
        name: "Punctuation Meta",
        scope: ["meta.brace", "punctuation"],
        settings: {
          foreground: palette.UNO_5,
        },
      },
      {
        name: "C Comment",
        scope: "comment.block.c",
        settings: {
          fontStyle: "italic",
          foreground: palette.DUO_3,
        },
      },
      {
        name: "CSS Property",
        scope: ["meta.property-name", "support.type.property-name"],
        settings: {
          foreground: palette.UNO_3,
        },
      },
      {
        name: "CSS Meta",
        scope: "meta.property-value",
        settings: {
          foreground: palette.UNO_5,
        },
      },
      {
        name: "Object Literal Key",
        scope: "meta.object-literal.key",
        settings: {
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Import Block Meta",
        scope: "variable.other.readwrite.alias",
        settings: {
          foreground: palette.DUO_1,
        },
      },
      {
        name: "Special Objects",
        scope: [
          "variable.language.this",
          "support.variable.object",
          "support.variable.dom",
        ],
        settings: {
          foreground: palette.UNO_3,
        },
      },
    ],
  };
}
