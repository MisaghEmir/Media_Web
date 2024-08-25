function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue ? `var(${cssVariable})` : `rgb(var(${cssVariable}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        color_text_00: withOpacity("--color-text-00"),
        color_text_10: withOpacity("--color-text-10"),
        color_text_11: withOpacity("--color-text-11"),
        color_text_12: withOpacity("--color-text-12"),
        color_text_13: withOpacity("--color-text-13"),
        color_text_14: withOpacity("--color-text-14"),
        color_text_15: withOpacity("--color-text-15"),
        color_text_16: withOpacity("--color-text-16"),
        color_text_17: withOpacity("--color-text-17"),
        color_text_18: withOpacity("--color-text-18"),
        color_text_19: withOpacity("--color-text-19"),
        color_text_20: withOpacity("--color-text-20"),
        color_text_21: withOpacity("--color-text-21"),
        color_text_22: withOpacity("--color-text-22"),
        color_text_23: withOpacity("--color-text-23"),
        color_text_24: withOpacity("--color-text-24"),
        color_text_25: withOpacity("--color-text-25"),
        color_text_26: withOpacity("--color-text-26"),
        color_text_27: withOpacity("--color-text-27"),
        color_text_28: withOpacity("--color-text-28"),
        color_text_29: withOpacity("--color-text-29"),
        color_text_30: withOpacity("--color-text-30"),

        // Theme --------------------------------------------------
        // --------------------------------------------------------

        theme_100: withOpacity("--theme-text-100"),
        theme_200: withOpacity("--theme-text-200"),
        theme_300: withOpacity("--theme-text-300"),
        theme_400: withOpacity("--theme-text-400"),
        theme_500: withOpacity("--theme-text-500"),
        theme_600: withOpacity("--theme-text-600"),
        theme_700: withOpacity("--theme-text-700"),
        theme_800: withOpacity("--theme-text-800"),
        theme_900: withOpacity("--theme-text-900"),
       
      },
      borderColor: {
        color_border_0: withOpacity("--color-border-0"),
        color_border_10: withOpacity("--color-border-10"),
        color_border_20: withOpacity("--color-border-20"),
        color_border_30: withOpacity("--color-border-30"),
        color_border_40: withOpacity("--color-border-40"),
        color_border_50: withOpacity("--color-border-50"),
        color_border_60: withOpacity("--color-border-60"),
        color_border_70: withOpacity("--color-border-70"),
        color_border_80: withOpacity("--color-border-80"),
        color_border_90: withOpacity("--color-border-90"),
        color_border_100: withOpacity("--color-border-100"),
      },
      backgroundColor: {
        background_body: withOpacity("--background-body"),
        background_body_dark: withOpacity("--background-bodyDark"),



        color_bg_12: withOpacity("--color-text-12"),
        color_bg_13: withOpacity("--color-text-13"),
        color_bg_14: withOpacity("--color-text-14"),
        color_bg_15: withOpacity("--color-text-15"),
        color_bg_16: withOpacity("--color-text-16"),
        color_bg_17: withOpacity("--color-text-17"),
        color_bg_18: withOpacity("--color-text-18"),
        color_bg_19: withOpacity("--color-text-19"),
        color_bg_20: withOpacity("--color-text-20"),
        color_bg_21: withOpacity("--color-text-21"),
        color_bg_22: withOpacity("--color-text-22"),
        color_bg_23: withOpacity("--color-text-23"),
        color_bg_24: withOpacity("--color-text-24"),
        color_bg_25: withOpacity("--color-text-25"),
        color_bg_26: withOpacity("--color-text-26"),
        color_bg_27: withOpacity("--color-text-27"),
        color_bg_28: withOpacity("--color-text-28"),
        color_bg_29: withOpacity("--color-text-29"),
        color_bg_30: withOpacity("--color-text-30"),

        // Theme --------------------------------------------------
        // --------------------------------------------------------

        theme_100: withOpacity("--theme-bg-100"),
        theme_200: withOpacity("--theme-bg-200"),
        theme_300: withOpacity("--theme-bg-300"),
        theme_400: withOpacity("--theme-bg-400"),
        theme_500: withOpacity("--theme-bg-500"),
        theme_600: withOpacity("--theme-bg-600"),
        theme_700: withOpacity("--theme-bg-700"),
        theme_800: withOpacity("--theme-bg-800"),
        theme_900: withOpacity("--theme-bg-900"),
      }
    },
    fontFamily:{
      AcuminPro : 'Acumin Pro',
      AcuminProItalic : 'Acumin Pro Italic',
      AcuminProBold : 'Acumin Pro Bold',
      AcuminProBoldItalic : 'Acumin Pro Bold Italic',
      //-------------------------------------------------
      AdobeCleanBlack : 'Adobe Clean Black',
      AdobeCleanLight : 'Adobe Clean Light',
      AdobeCleanUXBold : 'Adobe Clean UX Bold',
      //-------------------------------------------------
      SourceSansPro : 'Source Sans Pro',
      SourceSansProBold : 'Source Sans Pro Bold',
    
    }
  },
  plugins: [],
}

