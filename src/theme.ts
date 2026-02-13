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

export type Palette = {
  name: string;

  BACKGROUND: string;
  FOREGROUND: string;

  BACKGROUND_ALT: string;
  FOREGROUND_ALT: string;

  UNO_1: string;
  UNO_2: string;
  UNO_3: string;
  UNO_4: string;
  UNO_5: string;

  DUO_1: string;
  DUO_2: string;
  DUO_3: string;

  INVISIBLES: string;
  INVALID: string;
  DEPRECATED: string;
};

export function generateTheme(name: string, palette: Palette): Theme {
  return {
    name: name,
    colors: {
      focusBorder: palette.FOREGROUND,

      "button.border": palette.FOREGROUND,
      "button.foreground": palette.BACKGROUND,
      "button.background": palette.FOREGROUND,

      "progressBar.background": palette.FOREGROUND,

      "breadcrumb.foreground": palette.FOREGROUND_ALT,

      "badge.foreground": palette.BACKGROUND,
      "badge.background": palette.FOREGROUND,

      "editorWidget.border": palette.FOREGROUND,
      "editorWidget.foreground": palette.FOREGROUND_ALT,
      "editorWidget.background": palette.BACKGROUND_ALT,

      "input.border": palette.BACKGROUND_ALT,
      "input.foreground": palette.FOREGROUND_ALT,
      "input.background": palette.BACKGROUND_ALT,

      "dropdown.border": palette.BACKGROUND_ALT,
      "dropdown.foreground": palette.FOREGROUND_ALT,
      "dropdown.background": palette.BACKGROUND_ALT,

      "titleBar.activeBackground": palette.BACKGROUND,
      "titleBar.activeForeground": palette.FOREGROUND,
      "titleBar.inactiveBackground": palette.BACKGROUND_ALT,
      "titleBar.inactiveForeground": palette.FOREGROUND_ALT,

      "tab.activeBackground": palette.BACKGROUND,
      "tab.activeForeground": palette.FOREGROUND,
      "tab.inactiveBackground": palette.BACKGROUND_ALT,
      "tab.inactiveForeground": palette.FOREGROUND_ALT,
      "editorGroupHeader.tabsBackground": palette.BACKGROUND,

      "activityBar.background": palette.BACKGROUND,
      "activityBar.foreground": palette.FOREGROUND,
      "activityBarBadge.foreground": palette.BACKGROUND,
      "activityBarBadge.background": palette.FOREGROUND,

      "sideBar.background": palette.BACKGROUND,
      "sideBarTitle.foreground": palette.FOREGROUND,
      "sideBarSectionHeader.background": palette.BACKGROUND_ALT,

      "list.focusOutline": palette.BACKGROUND_ALT,
      "list.focusForeground": palette.UNO_2,
      "list.focusBackground": palette.BACKGROUND_ALT,
      "list.hoverForeground": palette.UNO_2,
      "list.hoverBackground": palette.BACKGROUND_ALT,
      "list.focusAndSelectionOutline": palette.BACKGROUND,
      "list.activeSelectionForeground": palette.DUO_1,
      "list.activeSelectionIconForeground": palette.DUO_1,
      "list.activeSelectionBackground": palette.BACKGROUND_ALT,
      "list.inactiveSelectionForeground": palette.DUO_1,
      "list.inactiveSelectionBackground": palette.BACKGROUND_ALT,
      "list.inactiveSelectionIconForeground": palette.DUO_1,

      "editor.foreground": palette.FOREGROUND,
      "editor.background": palette.BACKGROUND,
      "editor.selectionBackground": palette.BACKGROUND_ALT,
      "editor.lineHighlightBackground": palette.BACKGROUND_ALT,
      "editorCursor.foreground": palette.DUO_1,
      "editorCursor.background": palette.BACKGROUND,
      "editorWhitespace.foreground": palette.INVISIBLES,

      "statusBar.background": palette.BACKGROUND,
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
