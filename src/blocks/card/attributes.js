const ITEM_COUNT = 2;
const cardsArray = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  cardsArray.push({
    title: "Title",
    subtitle: "Subtitle",
    button: "Button" + i,
    buttonURL: "",
    image: "",
    content:
      "Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  cardsArray: {
    type: "array",
    default: cardsArray,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  stack: {
    type: "string",
    default: "mobile",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  textColor: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
  },
  itemBackgroundColor: {  //For compatibility with v1.3.2.
    type: "string",
    default: "empty"
  },
  ctaBackColor: {
    type: "string",
  },
  ctaColor: {
    type: "string",
    default: "#fff",
  },
  buttonColor: {   //For compatibility with v1.3.2.
    type: "string",
    default: "empty"
  },
  buttonTextColor: {   //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 0,
  },
  boxShadowVOffset: {
    type: "number",
    default: 0,
  },
  boxShadowBlur: {
    type: "number",
    default: 0,
  },
  boxShadowSpread: {
    type: "number",
    default: 0,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  titleSpace: {
    type: "number",
    default: 8,
  },
  titleSpaceMobile: {
    type: "number",
    default: 8,
  },
  titleSpaceTablet: {
    type: "number",
    default: 8,
  },
  subtitleSpace: {
    type: "number",
    default: 16,
  },
  subtitleSpaceMobile: {
    type: "number",
    default: 16,
  },
  subtitleSpaceTablet: {
    type: "number",
    default: 16,
  },
  contentSpace: {
    type: "number",
    default: 16,
  },
  contentSpaceMobile: {
    type: "number",
    default: 16,
  },
  contentSpaceTablet: {
    type: "number",
    default: 16,
  },
  buttonSpace: {
    type: "number",
    default: 20,
  },
  blockBorderWidth: {
    type: "number",
    default: 0,
  },
  borderWidth: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  blockBorderRadius: {
    type: "number",
    default: 12,
  },
  borderRadius: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  opacity: {
    type: "number",
    default: 100,
  },
  resshowImage: {
    type: "boolean",
    default: true,
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  backgroundImage: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
    default: "#fff",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  imageopacity: {
    type: "number",
    default: 20,
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  imagePosition: {
    type: "string",
    default: "center center",
  },
  imageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  thumbsize: {
    type: "string",
    default: "cover",
  },
  imageheight: {
    type: "number",
    default: 200,
  },
  blockmargin: {
    type: "number",
    default: 2,
  },
  blockmarginMobile: {
    type: "number",
    default: 2,
  },
  blockmarginTablet: {
    type: "number",
    default: 2,
  },
  blockzindex: {
    type: "number",
    default: 1,
  },
  icon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "after",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  ctaHoverBackColor: {
    type: "string",
  },
  ctaHoverColor: {
    type: "string",
    default: "#e6f2ff",
  },
  buttonhColor: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty"
  },
  buttonhTextColor: { //For compatibility with v1.3.2.
    type: "string",
    default: "#e6f2ff",
  },
  buttonopacity: {
    type: "number",
    default: 100,
  },
  butopacity: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  buttonHopacity: {
    type: "number",
    default: 100,
  },
  ctaVpadding: {
    type: "number",
    default: 10,
  },
  ctaHpadding: {
    type: "number",
    default: 14,
  },
  vPadding: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  hPadding: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  vMargin: {
    type: "number",
    default: 10,
  },
  hMargin: {
    type: "number",
    default: 0,
  },
  ctaBorderWidth: {
    type: "number",
    default: 1,
  },
  ctaBorderRadius: {
    type: "number",
    default: 2,
  },
  ctaBorderStyle: {
    type: "string",
    default: "none",
  },
  butborderWidth: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  butborderRadius: { //For compatibility with v1.3.2.
    type: "number",
    default: 999,
  },
  butborderStyle: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  buttonSize: {
    type: "string",
    default: "responsive-block-editor-addons-button-size-medium",
  },
  buttoncolorLocation1: {
    type: "number",
    default: 0,
  },
  buttoncolorLocation2: {
    type: "number",
    default: 100,
  },
  buttongradientDirection: {
    type: "number",
    default: 90,
  },
  buttonbackgroundColor1: {
    type: "string",
  },
  buttonbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  buttonbackgroundType: {
    type: "string",
    default: "none",
  },
  icon_hcolor: {
    type: "string",
    default: "#3a3a3a",
  },
  headingFontFamily: {
    type: "string",
  },
  subFontFamily: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  subLineHeight: {
    type: "number",
    default: 1,
  },
  subFontWeight: {
    type: "string",
    default: 400,
  },
  subFontSize: {
    type: "number",
    default: 16,
  },
  headingLineHeight: {
    type: "number",
    default: 1,
  },
  headingFontWeight: {
    type: "string",
    default: 900,
  },
  headingFontSize: {
    type: "number",
    default: 20,
  },
  contentLineHeight: {
    type: "number",
    default: 2,
  },
  contentFontSize: {
    type: "number",
    default: 16,
  },
  contentFontWeight: {
    type: "string",
    default: 400,
  },
  blockbotmargin: {
    type: "number",
    default: 2,
  },
  blockbotmarginMobile: {
    type: "number",
    default: 2,
  },
  blockbotmarginTablet: {
    type: "number",
    default: 2,
  },
  blockleftmargin: {
    type: "number",
    default: 0,
  },
  blockleftmarginMobile: {
    type: "number",
    default: 0,
  },
  blockleftmarginTablet: {
    type: "number",
    default: 0,
  },
  blockrightmargin: {
    type: "number",
    default: 0,
  },
  blockrightmarginMobile: {
    type: "number",
    default: 0,
  },
  blockrightmarginTablet: {
    type: "number",
    default: 0,
  },
  contenttopSpace: {
    type: "number",
    default: 16,
  },
  contenttopSpaceMobile: {
    type: "number",
    default: 16,
  },
  contenttopSpaceTablet: {
    type: "number",
    default: 16,
  },
  bgimageSize: {
    type: "string",
    default: "full",
  },
  bgimagePosition: {
    type: "string",
    default: "center center",
  }, //For compatibility with v1.3.2.
  bgimageRepeat: {
    type: "string",
    default: "no-repeat",
  }, //For compatibility with v1.3.2.
  bgthumbsize: {
    type: "string",
    default: "cover",
  }, //For compatibility with v1.3.2.
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  borderStyle: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  buttonTarget: {
    type: "boolean",
    default: "false",
  },
  contentAlignment: {
    type: "string",
    default: "left",
  },
  blockBorderColor: {
    type: "string",
  },
  borderColor: { //For compatibility with v1.3.2.
    type: "string",
    default: "empty",
  },
  backgroundImageOne: {
    type: "string",
  },
  backgroundImageTwo: {
    type: "string",
  },
  backgroundImageThree: {
    type: "string",
  },
  backgroundImageFour: {
    type: "string",
  },
  backgroundImagePosition: {
    type: "string",
    default: "center center",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  headingFontSizeMobile: {
    type: "number",
  },
  headingFontSizeTablet: {
    type: "number",
  },
  subFontSizeMobile: {
    type: "number",
  },
  subFontSizeTablet: {
    type: "number",
  },
  contentFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  ctaBorderColor: {
    type: "string",
  },
  ctaHoverBorderColor: {
    type: "string",
  },
  ctaTextOpacity: {
    typr: "number",
    default: 100,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: 14
  },
  ctaHpaddingTablet: {
    type: "number",
    default: 14
  },
  ctaVpaddingTablet: {
    type: "number",
    default: 10
  },
  ctaVpaddingMobile: {
    type: "number",
    default: 10
  },
  vMarginTablet: {
    type: "number",
    default: 10
  },
  vMarginMobile: {
    type: "number",
    default: 10
  },
  hMarginTablet: {
    type: "number",
    default: 0
  },
  hMarginMobile: {
    type: "number",
    default: 0
  },
  buttonHbackgroundType: {
    type: "string",
    default: "none",
  }
};
export default attributes;
