import TypographyHelperControl from "../../../settings-components/Typography Settings";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import ResponsiveMarginControl from "../../../settings-components/Responsive Spacing Settings/Responsive Margin Control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import rbeaOptions from "./rbea-options";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.editor;

const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
} = wp.components;

export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        block_id,
        displayTitle,
        displaySubtitle,
        columnsCount,
        blockTitle,
        blockSubtitle,
        contentAlign,
        layout,
        //style panel
        contentPadding,
        contentPaddingTablet,
        contentPaddingMobile,
        titleBottomMargin,
        titleBottomMarginTablet,
        titleBottomMarginMobile,
        subtitleBottomMargin,
        subtitleBottomMarginTablet,
        subtitleBottomMarginMobile,
        textBottomMargin,
        textBottomMarginTablet,
        textBottomMarginMobile,
        columnDividerHeight,
        columnDividerWidth,
        dividerColor,
        textAlign,
        textFontFamily,
        textFontSize,
        textFontSizeMobile,
        textFontSizeTablet,
        textFontWeight,
        textLineHeight,
        textColor,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLineHeight,
        titleColor,
        titleAlign,
        subtitleFontFamily,
        subtitleFontSize,
        subtitleFontSizeMobile,
        subtitleFontSizeTablet,
        subtitleFontWeight,
        subtitleLineHeight,
        subtitleColor,
        subtitleAlign,
        tagTitle,
        displayColumnSeparator,
        // advanced panel
        blockOpacity,
        zIndex,
        blockTag,
        containerWidth,
        containerWidthTablet,
        containerWidthMobile,
        containerTopPadding,
        containerBottomPadding,
        containerLeftPadding,
        containerRightPadding,
        containerTopPaddingTablet,
        containerBottomPaddingTablet,
        containerLeftPaddingTablet,
        containerRightPaddingTablet,
        containerTopPaddingMobile,
        containerBottomPaddingMobile,
        containerLeftPaddingMobile,
        containerRightPaddingMobile,
        containerTopMargin,
        containerBottomMargin,
        containerLeftMargin,
        containerRightMargin,
        containerTopMarginTablet,
        containerBottomMarginTablet,
        containerLeftMarginTablet,
        containerRightMarginTablet,
        containerTopMarginMobile,
        containerBottomMarginMobile,
        containerLeftMarginMobile,
        containerRightMarginMobile,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Columns", "responsive-block-editor-addons")}
                value={columnsCount}
                onChange={(value) => setAttributes({ columnsCount: value })}
                min={1}
                max={4}
              />
              <BaseControl>
                <BaseControl.VisualLabel>
                  {__("Alignment", "responsive-block-editor-addons")}
                </BaseControl.VisualLabel>
                <br></br>
                <br></br>
                <AlignmentToolbar
                  value={contentAlign}
                  onChange={(value) =>
                    setAttributes({
                      contentAlign: value,
                    })
                  }
                  controls={["left", "center", "right"]}
                  isCollapsed={false}
                />
              </BaseControl>
            </PanelBody>
            <PanelBody
              title={__("Layouts", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Layouts", "responsive-block-editor-addons")}
                value={layout}
                onChange={(value) => setAttributes({ layout: value })}
                options={rbeaOptions.layouts}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Padding"}
                attrNameTemplate="contentPadding%s"
                values={{
                  desktop: contentPadding,
                  tablet: contentPaddingTablet,
                  mobile: contentPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              {displayTitle && (
                <ResponsiveSpacingControl
                  title={"Title Bottom"}
                  attrNameTemplate="titleBottomMargin%s"
                  values={{
                    desktop: titleBottomMargin,
                    tablet: titleBottomMarginTablet,
                    mobile: titleBottomMarginMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
              {displaySubtitle && (
                <ResponsiveSpacingControl
                  title={"Subtitle Bottom"}
                  attrNameTemplate="subtitleBottomMargin%s"
                  values={{
                    desktop: subtitleBottomMargin,
                    tablet: subtitleBottomMarginTablet,
                    mobile: subtitleBottomMarginMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
              <ResponsiveSpacingControl
                title={"Text Bottom"}
                attrNameTemplate="textBottomMargin%s"
                values={{
                  desktop: textBottomMargin,
                  tablet: textBottomMarginTablet,
                  mobile: textBottomMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Column Divider", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Divider", "responsive-block-editor-addons")}
                checked={displayColumnSeparator}
                onChange={() =>
                  setAttributes({ displayColumnSeparator: !displayColumnSeparator })
                }
              />
              <Fragment>
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: dividerColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={dividerColor}
                  onChange={(colorValue) =>
                    setAttributes({ dividerColor: colorValue })
                  }
                  allowReset
                />
              </Fragment>
              <RangeControl
                label={__("Height", "responsive-block-editor-addons")}
                value={columnDividerHeight}
                onChange={(value) =>
                  setAttributes({ columnDividerHeight: value })
                }
                min={0}
                max={100}
              />
              <RangeControl
                label={__("Width", "responsive-block-editor-addons")}
                value={columnDividerWidth}
                onChange={(value) =>
                  setAttributes({ columnDividerWidth: value })
                }
                min={0}
                max={100}
              />
            </PanelBody>
            <PanelBody
              title={__("Text", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody initialOpen={true}>
                <Fragment>
                  <p className="responsive-block-editor-addons-setting-label">
                    {__("Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: textColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={textColor}
                    onChange={(colorValue) =>
                      setAttributes({ textColor: colorValue })
                    }
                    allowReset
                  />
                </Fragment>
                <BaseControl>
                  <BaseControl.VisualLabel>
                    {__("Text Alignment", "responsive-block-editor-addons")}
                  </BaseControl.VisualLabel>
                  <br></br>
                  <br></br>
                  <AlignmentToolbar
                    value={textAlign}
                    onChange={(value) =>
                      setAttributes({
                        textAlign: value,
                      })
                    }
                    controls={["left", "center", "right"]}
                    isCollapsed={false}
                  />
                </BaseControl>
              </PanelBody>
              <TypographyHelperControl
                title={__("Text Typography", "responsive-block-editor-addons")}
                attrNameTemplate="text%s"
                values={{
                  family: textFontFamily,
                  size: textFontSize,
                  sizeMobile: textFontSizeMobile,
                  sizeTablet: textFontSizeTablet,
                  weight: textFontWeight,
                  height: textLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Title", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Title", "responsive-block-editor-addons")}
                checked={displayTitle}
                onChange={() => setAttributes({ displayTitle: !displayTitle })}
              />
              {displayTitle && (
                <PanelBody initialOpen={true}>
                  <SelectControl
                    label={__(
                      "Title HTML Tag",
                      "responsive-block-editor-addons"
                    )}
                    value={tagTitle}
                    onChange={(value) => setAttributes({ tagTitle: value })}
                    options={rbeaOptions.htmlTitleTags}
                  />
                  <Fragment>
                    <p className="responsive-block-editor-addons-setting-label">
                      {__("Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: titleColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={titleColor}
                      onChange={(colorValue) =>
                        setAttributes({ titleColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                  <BaseControl>
                    <BaseControl.VisualLabel>
                      {__("Text Alignment", "responsive-block-editor-addons")}
                    </BaseControl.VisualLabel>
                    <br></br>
                    <br></br>
                    <AlignmentToolbar
                      value={titleAlign}
                      onChange={(value) =>
                        setAttributes({
                          titleAlign: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </BaseControl>
                  <TypographyHelperControl
                    title={__(
                      "Title Typography",
                      "responsive-block-editor-addons"
                    )}
                    attrNameTemplate="title%s"
                    values={{
                      family: titleFontFamily,
                      size: titleFontSize,
                      sizeMobile: titleFontSizeMobile,
                      sizeTablet: titleFontSizeTablet,
                      weight: titleFontWeight,
                      height: titleLineHeight,
                    }}
                    showLetterSpacing={false}
                    showTextTransform={false}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </PanelBody>
              )}
            </PanelBody>
            <PanelBody
              title={__("Subtitle", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Subtitle", "responsive-block-editor-addons")}
                checked={displaySubtitle}
                onChange={() =>
                  setAttributes({ displaySubtitle: !displaySubtitle })
                }
              />
              {displaySubtitle && (
                <PanelBody initialOpen={true}>
                  <Fragment>
                    <p className="responsive-block-editor-addons-setting-label">
                      {__("Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: subtitleColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={subtitleColor}
                      onChange={(colorValue) =>
                        setAttributes({ subtitleColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                  <BaseControl>
                    <BaseControl.VisualLabel>
                      {__(
                        "Subtitle Alignment",
                        "responsive-block-editor-addons"
                      )}
                    </BaseControl.VisualLabel>
                    <br></br>
                    <br></br>
                    <AlignmentToolbar
                      value={subtitleAlign}
                      onChange={(value) =>
                        setAttributes({
                          subtitleAlign: value,
                        })
                      }
                      controls={["left", "center", "right"]}
                      isCollapsed={false}
                    />
                  </BaseControl>
                  <TypographyHelperControl
                    title={__(
                      "Subtitle Typography",
                      "responsive-block-editor-addons"
                    )}
                    attrNameTemplate="subtitle%s"
                    values={{
                      family: subtitleFontFamily,
                      size: subtitleFontSize,
                      sizeMobile: subtitleFontSizeMobile,
                      sizeTablet: subtitleFontSizeTablet,
                      weight: subtitleFontWeight,
                      height: subtitleLineHeight,
                    }}
                    showLetterSpacing={false}
                    showTextTransform={false}
                    setAttributes={setAttributes}
                    {...this.props}
                  />
                </PanelBody>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <SelectControl
                label={__("Block HTML Tag", "responsive-block-editor-addons")}
                value={blockTag}
                onChange={(value) => setAttributes({ blockTag: value })}
                options={rbeaOptions.blockTags}
              />
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={blockOpacity}
                onChange={(value) => setAttributes({ blockOpacity: value })}
                min={0}
                max={100}
              />
              <RangeControl
                label={__("Z-Index", "responsive-block-editor-addons")}
                value={zIndex}
                onChange={(value) => setAttributes({ zIndex: value })}
                min={0}
                max={1000}
              />
            </PanelBody>
            <PanelBody
              title={__("Block Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Max Content Width"}
                attrNameTemplate="containerWidth%s"
                values={{
                  desktop: containerWidth,
                  tablet: containerWidthTablet,
                  mobile: containerWidthMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsivePaddingControl
                  attrNameTemplate="container%s"
                  values={{
                    desktopTop: containerTopPadding,
                    desktopBottom: containerBottomPadding,
                    desktopLeft: containerLeftPadding,
                    desktopRight: containerRightPadding,

                    tabletTop: containerTopPaddingTablet,
                    tabletBottom: containerBottomPaddingTablet,
                    tabletLeft: containerLeftPaddingTablet,
                    tabletRight: containerRightPaddingTablet,

                    mobileTop: containerTopPaddingMobile,
                    mobileBottom: containerBottomPaddingMobile,
                    mobileLeft: containerLeftPaddingMobile,
                    mobileRight: containerRightPaddingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveMarginControl
                  attrNameTemplate="container%s"
                  values={{
                    desktopTop: containerTopMargin,
                    desktopBottom: containerBottomMargin,
                    desktopLeft: containerLeftMargin,
                    desktopRight: containerRightMargin,

                    tabletTop: containerTopMarginTablet,
                    tabletBottom: containerBottomMarginTablet,
                    tabletLeft: containerLeftMarginTablet,
                    tabletRight: containerRightMarginTablet,

                    mobileTop: containerTopMarginMobile,
                    mobileBottom: containerBottomMarginMobile,
                    mobileLeft: containerLeftMarginMobile,
                    mobileRight: containerRightMarginMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
            </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
