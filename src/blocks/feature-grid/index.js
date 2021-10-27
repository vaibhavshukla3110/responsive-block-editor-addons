/**
 * BLOCK: Responsive Blocks Feature
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

const ITEM_COUNT = 2;

const featureBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  featureBlock.push({
    featureName: __("Title", "responsive-block-editor-addons"),
    featureDescription: __(
      "Description for this block. You can use this space for describing your block.",
      "responsive-block-editor-addons"
    ),
    featureImgURL: "",
    featureImgId: "",
      button: "Button Text",
      buttonURL: "#",
  });
}

// Register the block
registerBlockType("responsive-block-editor-addons/feature-grid", {
  title: __("Feature Grid", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to display your product features, services.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.feature,
  category: "responsive_block_editor_addons",
  keywords: [
    __("feature", "responsive-block-editor-addons"),
    __("grid", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },

});
