const cds = {
    al: {
      color: {
        magenta: {
          50: "#fae6ef",
          100: "#efb0cd",
          200: "#e78ab4",
          300: "#db5492",
          400: "#d5337d",
          500: "#ca005d",
          600: "#b80055",
          700: "#8f0042",
          800: "#6f0033",
          900: "#550027",
        },
        gold: {
          50: "#fff6e6",
          100: "#ffe2b0",
          200: "#ffd48a",
          300: "#ffc054",
          400: "#ffb433",
          500: "#ffa100",
          600: "#e89300",
          700: "#b57200",
          800: "#8c5900",
          900: "#6b4400",
        },
        // ... otros colores
      },
      size: {
        icon: {
          "sm": 12,
          "md": 16,
          "lg": 20,
          "xl": 24,
          "2xl": 32,
          "3xl": 40,
        },
      },
      space: {
        "sm": 2,
        "md": 4,
        "lg": 8,
        "xl": 12,
        "2xl": 16,
        "3xl": 24,
        "4xl": 32,
        "5xl": 40,
        "6xl": 48,
        "7xl": 56,
        "8xl": 64,
      },
      border: {
        radius: {
          square: 0,
          sm: 4,
          md: 8,
          lg: 16,
          xl: 24,
          pill: 56,
          circle: 500,
        },
        // ... otros estilos de borde
      },
      font: {
        family: {
          primary: "BreeCF",
          secondary: "Amor Sans",
        },
        style: {
          breecf: {
            bold: 'BreeCF-Bold',
            regular: 'BreeCF-Regular',
            light: 'BreeCF-Light'
          },
          amorsans: {
            regular: 'AmorSans-Regular', // Cambia esto al nombre de tu fuente regular
          },
        },
        size: {
          "sm": 10,
          "md": 12,
          "lg": 14,
          "xl": 16,
          "2xl": 18,
          "3xl": 20,
          "4xl": 24,
          "5xl": 28,
          "6xl": 32,
          "7xl": 40,
          "8xl": 48,
          "display": 56,
          "giant": 72,
        }
        // ... otros atributos de fuente
      },
    },
    sp: {
        color: {
          background: {
            subtle: { value: "{cds.al.color.neutral.50}", type: "color" },
            lightest: { value: "{cds.al.color.black.0}", type: "color" },
          },
          text: {
            extreme: { value: "{cds.al.color.black.900}", type: "color" },
            strong: { value: "{cds.al.color.neutral.800}", type: "color" },
            medium: { value: "{cds.al.color.black.300}", type: "color" },
            subtle: { value: "{cds.al.color.neutral.500}", type: "color" },
            lightest: { value: "{cds.al.color.black.0}", type: "color" },
            disable: { value: "{cds.al.color.black.400}", type: "color" },
            disableInverse: { value: "{cds.al.color.black.500}", type: "color" },
            accent: { value: "{cds.al.color.gold.600}", type: "color" },
            feedback: {
              success: { value: "{cds.al.color.green.600}", type: "color" },
              warning: { value: "{cds.al.color.orange.700}", type: "color" },
              critical: { value: "{cds.al.color.red.600}", type: "color" },
            },
            brand: {
              extreme: { value: "{cds.al.color.magenta.700}", type: "color" },
              strong: { value: "{cds.al.color.magenta.600}", type: "color" },
              medium: { value: "{cds.al.color.magenta.500}", type: "color" },
            },
          },
          surface: {
            feedback: {
              critical: {
                strong: { value: "{cds.al.color.red.500}", type: "color" },
                subtle: { value: "{cds.al.color.red.50}", type: "color" },
              },
              warning: {
                strong: { value: "{cds.al.color.orange.500}", type: "color" },
                subtle: { value: "{cds.al.color.orange.50}", type: "color" },
              },
              success: {
                strong: { value: "{cds.al.color.green.500}", type: "color" },
                subtle: { value: "{cds.al.color.green.50}", type: "color" },
              },
              informative: {
                strong: { value: "{cds.al.color.blue.500}", type: "color" },
                subtle: { value: "{cds.al.color.blue.50}", type: "color" },
              },
            },
            brand: {
              extreme: { value: "{cds.al.color.magenta.700}", type: "color" },
              strong: { value: "{cds.al.color.magenta.600}", type: "color" },
              medium: { value: "{cds.al.color.magenta.500}", type: "color" },
              subtle: { value: "{cds.al.color.magenta.50}", type: "color" },
            },
            accent: {
              strong: { value: "{cds.al.color.gold.600}", type: "color" },
            },
            opacity: {
              subtle: { value: "rgba(255, 255, 255, 0.2500)", type: "color" },
              hover: { value: "rgba(255, 255, 255, 0.1000)", type: "color" },
            },
            subtle: { value: "{cds.al.color.black.100}", type: "color" },
            lightest: { value: "{cds.al.color.black.0}", type: "color" },
            disable: { value: "{cds.al.color.black.100}", type: "color" },
            disableInverse: { value: "{cds.al.color.black.200}", type: "color" },
            medium: { value: "{cds.al.color.neutral.400}", type: "color" },
          },
          border: {
            brand: {
              strong: { value: "{cds.al.color.magenta.700}", type: "color" },
              medium: { value: "{cds.al.color.magenta.500}", type: "color" },
            },
            focus: { value: "{cds.al.color.gold.500}", type: "color" },
            extreme: { value: "{cds.al.color.neutral.800}", type: "color" },
            strong: { value: "{cds.al.color.neutral.500}", type: "color" },
            disable: { value: "{cds.al.color.neutral.300}", type: "color" },
            subtle: { value: "{cds.al.color.black.100}", type: "color" },
            light: { value: "{cds.al.color.neutral.50}", type: "color" },
            feedback: {
              success: { value: "{cds.al.color.green.500}", type: "color" },
              critical: { value: "{cds.al.color.red.500}", type: "color" },
            },
          },
          icon: {
            darkest: { value: "{cds.al.color.black.900}", type: "color" },
            extreme: { value: "{cds.al.color.black.800}", type: "color" },
            strong: { value: "{cds.al.color.neutral.800}", type: "color" },
            disableInverse: { value: "{cds.al.color.black.500}", type: "color" },
            disable: { value: "{cds.al.color.black.400}", type: "color" },
            medium: { value: "{cds.al.color.black.300}", type: "color" },
            lightest: { value: "{cds.al.color.black.0}", type: "color" },
            accent: {
              medium: { value: "{cds.al.color.gold.500}", type: "color" },
              strong: { value: "{cds.al.color.gold.600}", type: "color" },
            },
            subtle: { value: "{cds.al.color.neutral.500}", type: "color" },
            brand: {
              extreme: { value: "{cds.al.color.magenta.700}", type: "color" },
              strong: { value: "{cds.al.color.magenta.600}", type: "color" },
              subtle: { value: "{cds.al.color.magenta.100}", type: "color" },
            },
            feedback: {
              success: { value: "{cds.al.color.green.600}", type: "color" },
              warning: { value: "{cds.al.color.orange.700}", type: "color" },
              critical: { value: "{cds.al.color.red.600}", type: "color" },
            },
          },
        },
        text: {
          title: {
            giant: {
              value: {
                fontStyle: "{cds.al.fontStyle.breecf.bold",
                lineHeight: "{cds.al.font.line-height.base}",
                fontSize: "{cds.al.font.size.giant}",
                letterSpacing: "{cds.al.font.letter-spacing.base}",
              },
              type: "typography",
            },
          },
          paragraph: {
            medium: {
              value: {
                fontStyle: "{cds.al.fontStyle.breecf.bold",
                lineHeight: "{cds.al.font.lineHeight.base}",
                fontSize: "{cds.al.font.size.giant}",
                letterSpacing: "{cds.al.font.letter-spacing.base}",
              }
            }
          },
        }
    }
  };
  
  export default cds;