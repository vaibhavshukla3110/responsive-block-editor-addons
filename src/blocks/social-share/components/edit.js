/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import { loadGoogleFont } from "../../../utils/font";

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Popover, TextControl, Button, ToggleControl } = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activeLabel: -1,
      activeIcon: -1,
      showIconEditor: false,
    };
  }

  editShareIconHandler(index, type, val) {
    const { attributes, setAttributes } = this.props;
    let socialMediaIcons = [...attributes.socialMediaIcons];
    let socialMediaIconsCopy = [];
    attributes.socialMediaIcons.forEach(obj => {
      let copyObj = {...obj};
      socialMediaIconsCopy.push(copyObj);
    })
    socialMediaIconsCopy[index] ? (socialMediaIconsCopy[index][type] = val) : "";
    setAttributes({ socialMediaIcons: socialMediaIconsCopy });
  }

  insertIconHandler() {
    const { attributes, setAttributes } = this.props;
    let socialMediaIconsCopy = [];
    attributes.socialMediaIcons.forEach(obj => {
      let copyObj = {...obj};
      socialMediaIconsCopy.push(copyObj);
    })    
    const newShareIcon = {
      icon: "skype",
      label: "Skype",
      id: "skype",
      url: "https://skype.com/",
      newTab: false,
    };
    socialMediaIconsCopy.push(newShareIcon);
    this.setState({ activeIcon: socialMediaIconsCopy.length - 1 });
    setAttributes({ socialMediaIcons: socialMediaIconsCopy });
  }

  removeIconHandler() {
    const { attributes, setAttributes } = this.props;
    const { activeIcon } = this.state;
    let socialMediaIconsCopy = [];
    attributes.socialMediaIcons.forEach(obj => {
      let copyObj = {...obj};
      socialMediaIconsCopy.push(copyObj);
    })    
    socialMediaIconsCopy.splice(activeIcon, 1);
    this.setState({ activeIcon: -1 });
    setAttributes({ socialMediaIcons: socialMediaIconsCopy });
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-social-share-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-social-share-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    const { activeIcon, activeLabel, showIconEditor } = this.state;
    // Setup the attributes
    const {
      attributes: {
        block_id,
        socialMediaIcons,
        iconsAlign,
        viewOption,
        labelFontFamily,
        iconColorType,
      },
      setAttributes,
      isSelected,
    } = this.props;

    return [
      <Inspector {...{ setAttributes, ...this.props }} />,
      <Fragment>
        <div
          className={classnames(
            "responsive-block-editor-addons-block-social-share",
            `block-${block_id}`
          )}
        >
          {labelFontFamily && loadGoogleFont(labelFontFamily)}
          <div
            className={`responsive-block-editior-addons-share-icons-align-${iconsAlign}`}
          >
            <ul className="rbea-icons-wrapper responsive-block-editor-addons-share-icons-container">
              {socialMediaIcons.map((icon, index) => (
                <li
                  key={index}
                  className="responsive-block-editor-addons-share-icon"
                >
                  {(viewOption === "icon" || viewOption === "icontext") && (
                    <a
                      target={icon.newTab ? "_blank" : null}
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          activeLabel: index,
                          activeIcon: showIconEditor
                            ? activeIcon == index
                              ? -1
                              : index
                            : index,
                          showIconEditor: !showIconEditor,
                        });
                      }}
                    >
                      <div className="rbea-social-icon responsive-block-editor-addons-share-icon-svg-container">
                        <span
                          className={classnames(
                            "rbea-social-icon responsive-block-editor-addons-share-icon-svg",
                            iconColorType === "official"
                              ? `responsive-block-editor-addons-icon-${icon.icon}`
                              : ""
                          )}
                        >
                          {renderSVG(icon.icon)}
                        </span>
                      </div>
                    </a>
                  )}
                  {icon.label &&
                    (viewOption === "text" || viewOption === "icontext") && (
                      <a
                        target={icon.newTab ? "_blank" : null}
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activeLabel: index,
                            activeIcon: showIconEditor
                              ? activeIcon == index
                                ? -1
                                : index
                              : index,
                            showIconEditor: !showIconEditor,
                          });
                        }}
                      >
                        <div
                          className="responsive-block-editor-addons-share-icon-label"
                          contentEditable="true"
                          suppressContentEditableWarning={true}
                          onBlur={(e) =>
                            this.editShareIconHandler(
                              activeLabel,
                              "label",
                              e.target.innerHTML
                            )
                          }
                        >
                          {icon.label}
                        </div>
                      </a>
                    )}
                  {showIconEditor && activeIcon == index && isSelected && (
                    <Fragment>
                      <Popover
                        position="bottom center"
                        className="responsive-block-editor-addons-share-icon-modal-container"
                      >
                        <div className="responsive-block-editor-addons-share-icon-modal">
                          <p className="components-base-control__label">
                            {__("Icon")}
                          </p>
                          <FontIconPicker
                            icons={svg_icons}
                            renderFunc={renderSVG}
                            theme="default"
                            value={socialMediaIcons[activeIcon]?.icon}
                            onChange={(val) =>
                              this.editShareIconHandler(activeIcon, "icon", val)
                            }
                            isMulti={false}
                            noSelectedPlaceholder={__(
                              "Select Icon",
                              "responsive-block-editor-addons"
                            )}
                          />
                          <br />
                          <TextControl
                            label={__("URL")}
                            value={socialMediaIcons[activeIcon]?.url}
                            onChange={(val) =>
                              this.editShareIconHandler(activeIcon, "url", val)
                            }
                            placeholder={__("URL")}
                          />
                          <br />
                          <TextControl
                            label={__("Label")}
                            value={socialMediaIcons[activeIcon]?.label}
                            onChange={(val) =>
                              this.editShareIconHandler(
                                activeIcon,
                                "label",
                                val
                              )
                            }
                            placeholder={__("Enter label for icon")}
                          />
                          <br />
                          <ToggleControl
                            label={__(
                              "Open in new tab",
                              "responsive-block-editor-addons"
                            )}
                            checked={socialMediaIcons[activeIcon]?.newTab}
                            onChange={(val) =>
                              this.editShareIconHandler(
                                activeIcon,
                                "newTab",
                                val
                              )
                            }
                          />
                          <br />
                          <Button
                            isDefault
                            isPrimary
                            className="rbea-share-button-save"
                            onClick={(e) => this.setState({ activeIcon: -1 })}
                          >
                            {__("Save")}
                          </Button>
                          <Button
                            isDefault
                            className="rbea-share-button-remove"
                            onClick={(e) => this.removeIconHandler()}
                          >
                            {__("Remove")}
                          </Button>
                        </div>
                      </Popover>
                    </Fragment>
                  )}
                </li>
              ))}
              <span
                onClick={() => this.insertIconHandler()}
                className="rbea-add-icon-btn"
                role="button"
                areaLabel={__("Add new icon")}
              >
                {renderSVG("plus")}
              </span>
            </ul>
          </div>
        </div>
      </Fragment>,
    ];
  }
}
